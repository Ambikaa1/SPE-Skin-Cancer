import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";



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
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    message: {
        color: '#000',
        fontWeight: 'bold',
    },
    camera: {
        flex: 1,
    }
});

export default CameraScreen;
