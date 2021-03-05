import React, {useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert, Animated, PanResponder, Slider} from "react-native";
import {Ionicons, MaterialCommunityIcons, FontAwesome, Feather} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase("17.db");

const Review = ({navigation, nextScreen, photo, name, comments, id}) => {
    const [drawing, setDrawing] = useState(false);

    const pan = useRef(new Animated.ValueXY()).current;
    const [maxX, setMaxX] = useState(0);
    const [maxY, setMaxY] = useState(0);
    const [scale, setScale] = useState(1);
    const diameter = styles.circle.width;
    const radius = diameter / 2;

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

    const acceptImage = () => {
        setDrawing(true);
    };

    const rejectImage = () => {
        Alert.alert(
            "Do you want to delete this image?",
            "You cannot undo this action.",
            [{text: "Cancel", style: "cancel"}, {text: "Delete", onPress: () => navigation.goBack()}],
        );
    };

    const doneDrawing = async () => {
        const photoSplit = photo.split("/")
        const photoId = photoSplit[photoSplit.length - 1]

        if (nextScreen == "CameraNear") {
            let folder = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "far");
            if (!Boolean(folder.exists)) {
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "far" + "/");
            }
            let newLocation = FileSystem.documentDirectory + "far/" + photoId
            await FileSystem.moveAsync({
                from: photo,
                to: newLocation
            });
            db.transaction(
                tx => {
                    tx.executeSql(
                        "INSERT INTO mole (name, comments, far_shot, sub_body_part) values (?, ?, ?, 'toes_left_foot');",
                        [name, comments, newLocation],
                        (t, result) => navigation.navigate(nextScreen, {id: result.insertId}),
                        (t, error) => {console.log(error);}
                    );
                },
            );
        } else if (nextScreen == undefined) {
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
                        ["01/01/2001", newLocation, id],
                        (t, result) => navigation.navigate("Homunculus"),
                        (t, error) => {console.log(error);}
                    );
                },
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.camera} onLayout={getDimensions}>
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

                        <Slider
                            //style = {{position: ''}}
                            value = {scale}
                            onValueChange = {(value) => setScale(value)}
                            maximumValue={1.75}
                            minimumValue={0.25}
                            trackStyle={{ height: 10, backgroundColor: 'red' }}
                            thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                        >
                        </Slider>
                    </>
                    : null
                }
            </View>

            <View style={styles.cameraBar}>
                {drawing
                    ?
                    <>
                        <TouchableOpacity style={styles.optionButton}
                                          onPress={() => navigation.navigate(nextScreen, {uris: uris.concat([photo])})}>
                            <FontAwesome name="paint-brush" size={48} color="white"/>
                            <Text style={styles.text}>Draw</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}
                                          onPress={() => navigation.navigate(nextScreen, {uris: uris.concat([photo])})}>
                            <MaterialCommunityIcons name="eraser" size={50} color="white"/>
                            <Text style={styles.text}>Clear</Text>
                        </TouchableOpacity>
                        {/*Accept Button*/}
                        <TouchableOpacity onPress = {doneDrawing}>
                            <Text style={styles.text}>Accept</Text>
                            <Feather name="thumbs-up" size={50} color="green"/>
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
