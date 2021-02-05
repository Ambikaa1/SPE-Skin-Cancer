import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";
import { Camera } from "expo-camera";
import {SafeAreaView, Button} from "react-native";
import {AntDesign, MaterialCommunityIcons, Feather} from "@expo/vector-icons";


// import {useAsyncStorage} from "RNAsyncStorage";
// const handlePress = () =>console.log("Test pressed")

const CameraScreen = () => {
    //Set initial camera permissions as nul.
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>
                    <TouchableOpacity onPress={() => Alert.alert('Arrow Pressed')}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Help Pressed')}>
                        <AntDesign name="questioncircleo" size={24} color="black" />
                    </TouchableOpacity>
                </Text>
            </SafeAreaView>
            <Camera style={styles.camera} type={type}>

            </Camera>
            <View style={styles.buttonContainer}>
                <Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity stly={styles.takePictureIcon}>
                    <Feather name="circle" size={50} color="black" />
                </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
};

//

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        alignItems: "stretch",

    },
    text: {
        fontSize: 50,
    },
    buttonContainer:{
        backgroundColor: "white",
    },
    button:{
        alignSelf: "flex-end"
    },
    takePictureIcon: {
        alignSelf: "center"
    },
    message: {
        color: '#000',
        fontWeight: 'bold',
    },
    camera: {
        flex: 5,
    }
});

export default CameraScreen;
