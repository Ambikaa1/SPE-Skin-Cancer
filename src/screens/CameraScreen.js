import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView} from "react-native";
import { Camera } from "expo-camera";
import {AntDesign, MaterialCommunityIcons, MaterialIcons, Feather} from "@expo/vector-icons";
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
    //Set initial camera permissions as null.
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);
    const [mediaPermission, setMediaPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            const { saveStatus } = await MediaLibrary.requestPermissionsAsync();
            setMediaPermission( saveStatus === 'granted')
            console.log(status)
            console.log(saveStatus)
            console.log(mediaPermission)
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
            <SafeAreaView style={styles.topRow}>
                <TouchableOpacity onPress={() => Alert.alert('Arrow Pressed')}>
                    <AntDesign name="arrowleft" size={35} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Help Pressed')}>
                    <AntDesign name="questioncircleo" size={35} color="black" />
                </TouchableOpacity>
            </SafeAreaView>
            <Camera style={styles.camera} type={type}
                ref={ref => {setCameraRef(ref)}}>
            </Camera>
            <View style={styles.cameraBar}>
                <TouchableOpacity
                    // style={styles.flipCamera}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    // style={styles.takePicture}
                    onPress={async() => {
                        if (cameraRef) {
                            let photo = await cameraRef.takePictureAsync();
                            // Check users permissions to accessing camera roll
                            console.log('photo taken', photo);
                            if (mediaPermission) {
                                console.log('Access to camera roll')
                                await MediaLibrary.saveToLibraryAsync(photo.uri)
                                console.log('Photo saved')
                            }
                        }
                    }}>
                    <MaterialCommunityIcons name="circle-slice-8" size={70} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="filter" size={50} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        alignItems: "stretch",

    },
    topRow:{
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    cameraBar:{
        backgroundColor: "#71A1D1",
        flexDirection: 'row',
        justifyContent: 'space-around'                                                                                                                       
    },
    camera:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
});

export default CameraScreen;
