import React, {useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert, Animated, PanResponder, Slider} from "react-native";
import {Ionicons, MaterialCommunityIcons, FontAwesome, Feather} from "@expo/vector-icons";
import {captureRef} from "react-native-view-shot";
import * as SQLite from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase("20.db");

const Review = ({navigation, nextScreen, photo, name, comments, id}) => {
    const [drawing, setDrawing] = useState(false);

    const viewShotRef = useRef()
    const [hideOnScreenShot, setHideOnScreenShot] = useState(false)
    const pan = useRef(new Animated.ValueXY()).current;
    const [maxX, setMaxX] = useState(0);
    const [maxY, setMaxY] = useState(0);
    const [scale, setScale] = useState(1);
    const diameter = styles.circle.width;
    const radius = diameter / 2;
    const sliderCircleDim   = 10;
    const sliderTrackHeight = 20;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,

            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },

            onPanResponderMove:

                Animated.event(
                    [
                        null,
                        {dx: pan.x, dy: pan.y}
                    ],
                    {useNativeDriver: false}
                ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;

    const getDimensions = ({nativeEvent}) => {
        setMaxX(nativeEvent.layout.width);
        setMaxY(nativeEvent.layout.height);
        console.log("MaxX = ", maxX);
        console.log("MaxY = ", maxY);

    }

    let transformX = pan.x.interpolate({
        inputRange: [-(radius * scale), maxX - (radius * scale)],
        outputRange: [-(radius * scale), maxX - (radius * scale)],
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    let transformY = pan.y.interpolate({
        inputRange: [-(radius * scale), maxY - (radius * scale)],
        outputRange: [-(radius * scale), maxY - (radius * scale)],
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })

    const acceptImage = async () => {
        if (nextScreen === "HelpNearShot"){
            setDrawing(true);
        }
        else{
            setDrawing(false);
            await doneDrawing()
        }
    };

    const rejectImage = () => {
        Alert.alert(
            "Do you want to delete this image?",
            "You cannot undo this action.",
            [{text: "Cancel", style: "cancel"}, {text: "Delete", onPress: () => navigation.goBack()}],
        );
    };

    const takeScreenShot = async  () => {
        setHideOnScreenShot(true)
        photo = await captureRef(viewShotRef, {
            result: "base64",
            quality: 1,
            format: "jpg"
        });

        await doneDrawing()
    }

    const photoSplit = photo.split("/");
    const photoId = photoSplit[photoSplit.length - 1];

    const doneDrawing = async () => {

        //Get date
        let today = new Date();
        //+ 1 to month because by default January is 0.
        let todayFormatted = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        // Mole should next be updated in one month
        let nextUpdate = Date.now() + (30 * 24 * 60 * 60 * 1000);

        console.log("date: ", todayFormatted);
        console.log(nextScreen);
        //Changed from CameraNear to HelpNearShot to add the buffer, guidance screen.
        if (nextScreen === "HelpNearShot") {
            let folder = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "far");
            if (!Boolean(folder.exists)) {
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "far" + "/");
            }
            let newLocation = FileSystem.documentDirectory + "far/" + photoId


            await FileSystem.writeAsStringAsync(newLocation, photo, {
                encoding: FileSystem.EncodingType.Base64,
            });

            db.transaction(
                tx => {
                    tx.executeSql(
                        "INSERT INTO mole (name, comments, far_shot, sub_body_part, lastUpdated) values (?, ?, ?, 'toes_left_foot', ?);",
                        [name, comments, newLocation, todayFormatted],
                        (t, result) => navigation.navigate(nextScreen, {id: result.insertId}),
                        (t, error) => {console.log(error);}
                    );
                },
            );
        } else if (nextScreen === "PhotoSuccess") {
            let folder = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "near");
            if (!Boolean(folder.exists)) {
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "near" + "/");
            }
            let newLocation = FileSystem.documentDirectory + "near/" + photoId
            await FileSystem.moveAsync({
                from: photo,
                to: newLocation
            });
            db.transaction(
                tx => {
                    tx.executeSql(
                        "INSERT INTO mole_entry (date, near_shot, mole_id) values (?, ?, ?);",
                        [todayFormatted, newLocation, id],
                        (t, error) => {console.log(error);}
                    );
                },
            );
            //Update the date in the mole table.
            db.transaction(
                tx => {
                    tx.executeSql(
                        "UPDATE mole SET lastUpdated = ?, nextUpdate = ? WHERE mole_id = ?;",
                        [todayFormatted, nextUpdate, id],
                        (t, result) => navigation.navigate(nextScreen),
                        (t, error) => {console.log(error);}
                    );
                },
            );
        } else {
            //Added this to get rid of the "possible unhandled rejection warning - can remove this once ^ is finalised.
            return <View />;
        }
    };

    console.log("MaxX = ", maxX);
    console.log("MaxY = ", maxY);

    return (
        <View style={styles.container}>
            <View ref = {viewShotRef} style={styles.camera} onLayout={getDimensions}>
                <Image
                    style={styles.camera}
                    source={{uri: photo}}
                />

                {drawing
                    ?
                    <>
                        <Animated.View
                            style={{
                                position: 'absolute',
                                transform: [
                                    {translateX: transformX},
                                    {translateY: transformY},
                                    {scale: scale}
                                ]
                            }}
                            {...panResponder.panHandlers}
                        >
                            <View style={styles.circle}/>
                        </Animated.View>


                        {!hideOnScreenShot && <Slider
                            //Width changes the width of a horizontal slider. Due to 90deg rotation it will appear to change the height in the application
                            style = {{
                                transform :  [{ rotate: "-90deg" }],
                                position  :  "absolute",
                                width     :  maxX,
                                bottom    :  maxY/2,
                                right     : -maxX/2 + 2*sliderCircleDim,
                            }}
                            value = {scale}
                            onValueChange = {(value) => setScale(value)}
                            maximumValue={1.75}
                            minimumValue={0.25}
                            //Height here changes the height of the track for a horizontal slider. Due to 90deg rotation it will appear to change the width of the track
                            trackStyle={{ height: sliderTrackHeight, backgroundColor: 'red' }}
                            thumbStyle={{ height: sliderCircleDim, width: sliderCircleDim, backgroundColor: 'transparent' }}
                        >
                        </Slider>}

                        {/*Little Circle

                        Just to help align with the slider, I rotate these 90deg aswell so all positioning acts in same way

                        */}
                        {!hideOnScreenShot && <View
                            style={[styles.circle,
                                {
                                    transform : [
                                        {scale : 0.1},
                                        {rotate: "-90deg"}
                                        ],
                                    position : "absolute",
                                    bottom   :  maxY/2 - maxX/2 - sliderTrackHeight - 2*sliderCircleDim,
                                    right    :  -sliderCircleDim-sliderTrackHeight,
                                }
                                ]
                            }
                        />}


                        {/*Big Circle*/}
                        {!hideOnScreenShot && <View
                            style={[styles.circle,
                                {
                                    transform : [
                                        {scale : 0.3},
                                        {rotate: "-90deg"}
                                    ],
                                    position : "absolute",
                                    bottom   : maxY/2 + maxX/2 - 2*sliderCircleDim,
                                    right    :  -sliderCircleDim-sliderTrackHeight,
                                }
                            ]
                            }
                        />}
                    </>
                    : null
                }
            </View>

            <View style={styles.cameraBar}>
                {drawing
                    ?
                    <>
                        {/*Accept Button*/}
                        <TouchableOpacity style={styles.doneButton} onPress = {async() => await takeScreenShot()}>
                            <Ionicons name="ios-checkmark-done-circle" size={50} color="white"/>
                            <Text style={styles.text}>Done</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <TouchableOpacity style={styles.optionButton} onPress={acceptImage}>
                            <Ionicons name="ios-thumbs-up" size={50} color="white"/>
                            <Text style={styles.text}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={rejectImage}>
                            <Ionicons name="ios-thumbs-down" size={50} color="white"/>
                            <Text style={styles.text}>Try again</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "stretch"
    },
    camera: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    cameraBar: {
        backgroundColor: "black",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    optionButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    doneButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 50,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 10
    },
    circle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 5,
    },
});

export default Review;
