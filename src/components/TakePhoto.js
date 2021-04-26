import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const TakePhoto = ({ navigation, nextScreen, name, comments, id, bodyPart }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [ghostImage, setGhostImage] = useState(true);
    const [ghostImageFile, setGhostImageFile] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);

    const bodyPartGhost = {
        "Back Back": require("../../assets/ghost/back/torso.png"),
        "Left Upper Arm Back": require("../../assets/ghost/back/upper_arm_left.png"),
        "Left Lower Arm Back": require("../../assets/ghost/back/lower_arm_left.png"),
        "Right Upper Arm Back": require("../../assets/ghost/back/upper_arm_right.png"),
        "Right Lower Arm Back": require("../../assets/ghost/back/lower_arm_right.png"),
        "Head or Neck Back": require("../../assets/ghost/back/head.png"),
        "Dorsum Left Hand Back": require("../../assets/ghost/back/dorsum_left_hand.png"),
        "Dorsum Right Hand Back": require("../../assets/ghost/back/dorsum_right_hand.png"),
        "Left Upper Leg Back": require("../../assets/ghost/back/left_leg_upper.png"),
        "Left Lower Leg Back": require("../../assets/ghost/back/left_leg_lower.png"),
        "Right Upper Leg Back": require("../../assets/ghost/back/right_leg_upper.png"),
        "Right Lower Leg Back": require("../../assets/ghost/back/right_leg_lower.png"),
        "Plantar Surface Left Foot Back": require("../../assets/ghost/back/left_foot.png"),
        "Plantar Surface Right Foot Back": require("../../assets/ghost/back/right_foot.png"),
        "Left Head or Neck Left": require("../../assets/ghost/left/head.png"),
        "Left Torso Left": require("../../assets/ghost/left/torso2.png"),
        "Left Leg or Inner Right Leg Left": require("../../assets/ghost/left/legs2.png"),
        "Right Head or Neck Right": require("../../assets/ghost/right/head.png"),
        "Right Torso Right": require("../../assets/ghost/right/torso2.png"),
        "Right Leg or Inner Left Leg Right": require("../../assets/ghost/right/legs2.png"),
        "Top of the head Front": require("../../assets/ghost/front/head_top.png"),
        "Face Front": require("../../assets/ghost/front/face.png"),
        "Neck Front": require("../../assets/ghost/front/neck.png"),
        "Torso Front": require("../../assets/ghost/front/torso.png"),
        "Left Upper Arm Front": require("../../assets/ghost/front/upper_left_arm.png"),
        "Right Upper Arm Front": require("../../assets/ghost/front/upper_right_arm.png"),
        "Left Lower Arm Front": require("../../assets/ghost/front/lower_left_arm.png"),
        "Right Lower Arm Front": require("../../assets/ghost/front/lower_right_arm.png"),
        "Volar Right Hand Front": require("../../assets/ghost/front/right_hand.png"),
        "Volar Left Hand Front": require("../../assets/ghost/front/left_hand.png"),
        "Left Upper Leg Front": require("../../assets/ghost/front/upper_left_leg.png"),
        "Right Upper Leg Front": require("../../assets/ghost/front/upper_right_leg.png"),
        "Left Lower Leg Front": require("../../assets/ghost/front/left_lower_leg.png"),
        "Right Lower Leg Front": require("../../assets/ghost/front/right_lower_leg.png"),
        "Dorsum Left Foot Front": require("../../assets/ghost/front/left_foot.png"),
        "Dorsum Right Foot Front": require("../../assets/ghost/front/right_foot.png")
    };

    useEffect(() => {
        (async () => {
                const { status } = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
        })();

        if (nextScreen == "ReviewNear") {
            db.transaction(
                tx => {
                    tx.executeSql(
                        "SELECT near_shot FROM mole_entry WHERE mole_id = ?;",
                        [id],
                        (_, { rows }) => {
                            if (rows.length > 0) {
                                setGhostImageFile({ uri: rows._array[0].near_shot })
                            }
                        }
                    );
                }
            );
        } else if (nextScreen == "ReviewFar") {
            setGhostImageFile(bodyPartGhost[bodyPart])
        }
    }, []);

    // Conditional rendering based on permissions
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style = {styles.container}>
            <Camera
                style = { styles.camera }
                type = { type }
                ref = { ref => {setCameraRef(ref)} }
                autoFocus={Camera.Constants.AutoFocus.on}
                whiteBalance={Camera.Constants.WhiteBalance.auto}
                flashMode={Camera.Constants.FlashMode.auto}
            />

            {ghostImage
                ? <Image style = { styles.image } source = {ghostImageFile}/>
                : null
            }

            <View style = { styles.cameraBar }>
                <TouchableOpacity
                    onPress={() => {
                            setType(
                                    type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                            );
                    }}>
                    <Ionicons name = "camera-reverse" size = {40} style = {styles.cameraOption} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {async() => {
                        if (cameraRef) {
                                let photo = await cameraRef.takePictureAsync();
                                navigation.navigate(nextScreen, { photo: photo.uri, name: name, comments: comments, id: id, bodyPart, })
                                // console.log('photo taken', photo);
                        }
                    }}>
                    <Ionicons name = "radio-button-on" size = {70} style = {styles.cameraIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => {
                        setGhostImage(prevCheck => !prevCheck);
                        // console.log('show ghost image =', ghostImage)
                    }
                }>
                    {ghostImage
                        ? <MaterialCommunityIcons name = "ghost" size = {40} style = {styles.ghostOption} color = {(ghostImageFile == null) ? "black" : "white"} />
                        : <MaterialCommunityIcons name = "ghost-off" size = {40} style = {styles.ghostOption} color = {(ghostImageFile == null) ? "black" : "white"} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        alignItems: "stretch"
    },
    camera:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.5,
        width: undefined,
        height: undefined,
        aspectRatio: 1.5,
        resizeMode: 'contain',
    },
    cameraBar: {
        backgroundColor: "black",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    cameraIcon: {
        color: "white"
    },
    cameraOption: {
        color: "white",
        marginHorizontal: (Dimensions.get("window").width) / 5,
    },
    ghostOption: {
        marginHorizontal: (Dimensions.get("window").width) / 5,
    }
});

export default TakePhoto;
