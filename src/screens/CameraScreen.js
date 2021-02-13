import React, {useEffect, useState, Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image} from "react-native";
import { Camera } from "expo-camera";
import {AntDesign, MaterialCommunityIcons, MaterialIcons, Feather} from "@expo/vector-icons";
import Dialog from "react-native-dialog";

const CameraScreen = () => {

    //Set initial camera permissions as null.
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);
    const [image, setImage] = useState(null);
    const [ghostImage, setGhostImage] = useState(true);
    const [photoTaken, setPhotoTaken] = useState(false);

    const [visible, setVisible] = useState(false);
    const handleCancel = () => {
        setVisible(false);
    };
    const handleDelete = () => {
        setPhotoTaken(false);
        setVisible(false);

    };
    const stuff = () => {
        setVisible(true);
    }


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
            <ViewTopBar/>

            <View style={styles.container}>

                {!photoTaken ?
                    <Camera
                        style={styles.camera}
                        type={type}
                        ref={ref => {setCameraRef(ref)}}
                    /> :
                    <Image
                        style = {styles.camera}
                        source={{uri : image}}
                    />
                }

                {ghostImage && <Image
                    style={styles.image}
                    source={require('./cute.jpg')}
                />}

                {visible &&
                        <Dialog.Container visible={visible}>
                            <Dialog.Title>Do you want to delete this image?</Dialog.Title>
                            <Dialog.Description>
                                You cannot undo this action.
                            </Dialog.Description>
                            <Dialog.Button label={"Cancel"} onPress={handleCancel}/>
                            <Dialog.Button label={"Delete"} onPress={handleDelete}/>
                        </Dialog.Container>
                }

                <View style={styles.cameraBar}>

                    {!photoTaken ?
                        <TouchableOpacity
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="white" />
                        </TouchableOpacity> :
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.text}>Accept image</Text>
                                <Feather name="thumbs-up" size={50} color="green"/>
                            </TouchableOpacity>
                        </View>
                    }

                    {!photoTaken ?
                        <TouchableOpacity
                            onPress={async() => {
                                if (cameraRef) {
                                    let photo = await cameraRef.takePictureAsync();
                                    setImage(photo.uri);
                                    setPhotoTaken(true);
                                    console.log('photo taken', photo);
                                }
                            }}>
                            <MaterialCommunityIcons name="circle-slice-8" size={70} color="white" />
                        </TouchableOpacity> :
                        <View>
                            <TouchableOpacity onPress={stuff}>
                                <Text style={styles.text}>Try again</Text>
                                <Feather name="thumbs-down" size={50} color="red"  />
                            </TouchableOpacity>
                        </View>

                    }

                    <TouchableOpacity
                        onPress={() => {
                            setGhostImage(prevCheck => !prevCheck);
                            console.log('show ghost image =', ghostImage)
                        }}>
                        <MaterialIcons name="filter" size={50} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const ViewTopBar = () => {
    return (
        <SafeAreaView style={styles.topRow}>
            <TouchableOpacity onPress={() => Alert.alert('Arrow Pressed')}>
                <AntDesign name="arrowleft" size={35} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Alert.alert('Now is the time to photograph the part of the body you selected.' +
                    ' You can use the outline to line up your photograph.' +
                    ' It is best if someone takes the photograph for you while you stay still.');
            }}>
                <AntDesign name="questioncircleo" size={35} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
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
        justifyContent: 'space-between',
    },
    cameraBar:{
        backgroundColor: "#71A1D1",
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        resizeMode: 'contain',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    confirmAlert: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CameraScreen;


