import React, {useEffect, useState, Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image} from "react-native";
import { Camera } from "expo-camera";
import {AntDesign, MaterialCommunityIcons, MaterialIcons, Feather} from "@expo/vector-icons";
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
    //Set initial camera permissions as null.
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);
    const [mediaPermission, setMediaPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [ghostImage, setGhostImage] = useState(true);

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
            {ghostImage && <Image
                style={styles.image}
                source={require('./cute.jpg')}
            />}
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
                            setImage(photo.uri);
                        }
                    }}>
                    <MaterialCommunityIcons name="circle-slice-8" size={70} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    // For now, I have changed the camera roll icon to toggle the ghost image to remove for camera preview.
                    onPress={() => {
                        setGhostImage(prevCheck => !prevCheck);
                        console.log('show ghost image =', ghostImage)
                    }}>
                    <MaterialIcons name="filter" size={50} color="white" />
                </TouchableOpacity>
            </View>
            <Review picture={image}/>
        </View>
    );
}

const Review = (props) => {
    return (
        <View>
            <Image source={{ uri: props.picture }} style={{ width: 200, height: 200 }}/>
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
    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.6,
        width: undefined,
        height: undefined,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    }
});

export default CameraScreen;


