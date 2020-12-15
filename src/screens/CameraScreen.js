import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

// import {useAsyncStorage} from "RNAsyncStorage";
// const handlePress = () =>console.log("Test pressed")

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null); //Initially we have no state

    return(
    <View style = {styles.container}>
        { hasPermission
            ? (<StartCamera />)
            : (
                <View style = {styles.container}>
                    <Text style = {styles.message}>
                        Here you can take photos of your moles!
                    </Text>
                    <TouchableOpacity
                    onPress={useEffect(() => { //Use effect allows us to do work after we render, in this case getting permissions
                        (async () => {
                            const { permission } = await Camera.requestPermissionsAsync();
                            setHasPermission(permission === 'granted');
                        })()},[])}
                    style={{width: 200, borderRadius: 4, backgroundColor: "darkblue", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}
                    >
                        <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
                            Get Started!
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    </View>
    );
};

const StartCamera = () => {
    const [cameraFacing , setCameraFacing] = useState(Camera.Constants.Type.back); //Set initial camera face to the back camera
    const [flash, setFlash] = useState('auto') //Initialise flash as auto
    //const [showingPhoto, setShowingPhoto] = useState('false')
    //const [photo, setPhoto] = useState<any>null

    return (
        <View style = {styles.container}>
            <Camera
                type = {cameraFacing}
                flashMode = {flash}
                style = {styles.camera}
                ref = {camera => this.camera = camera}
            >
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
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
