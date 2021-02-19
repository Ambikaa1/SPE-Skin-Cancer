import React, {useEffect, useState, Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image} from "react-native";
import { Camera } from "expo-camera";
import {AntDesign, MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome, SimpleLineIcons} from "@expo/vector-icons";
import Dialog from "react-native-dialog";


const CameraScreen = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);
    const [image, setImage] = useState(null);
    const [ghostImage, setGhostImage] = useState(true);
    const [photoTaken, setPhotoTaken] = useState(false);

    //Drawing stuff
    const [drawing, setDrawing] = useState(false);
    const acceptImage = () => {
        setDrawing(true);
    }

    //Handling the dialogue box for when the user wants to re-take an image.
    const [visible, setVisible] = useState(false);
    const handleCancel = () => {
        setVisible(false);
    };
    const handleDelete = () => {
        setPhotoTaken(false);
        setVisible(false);

    };
    const showDialog = () => {
        setVisible(true);
    }

    //Request the users permission to access their camera.
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
            {/*Top bar includes the back button and the help button.*/}

            <View style={styles.container}>
                {/*If the user has not taken a picture then the screen should display the camera,
                if the user has taken a picture then it should display the image so they can check
                it is what they want.*/}
                {!photoTaken && !drawing ?
                    <Camera
                        style={styles.camera}
                        type={type}
                        ref={ref => {setCameraRef(ref)}}
                    />

                    : photoTaken && !drawing ?

                        <Image
                            style = {styles.camera}
                            source={{uri : image}}
                        />

                        :

                        <Image
                            style = {styles.camera}
                            source={{uri : image}}
                        />

                }

                {/*Toggles the ghost image on and off when the user clicks the
                ghost image button.*/}
                {ghostImage && <Image
                    style={styles.image}
                    source={require('./cute.jpg')}
                />}

                {/*This dialogue box shows if the user is on the image preview screen and
                have chosen to re-take the image rather than save it.*/}
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

                    {/*If the user has not take a picture then the need to see the buttons related
                    to the camera functionality. If the have taken a picture they want to be
                    able to accept or reject the image. These following conditionals change the
                    contents of the bottom bar to suit the needs to of the page.*/}

                    {!photoTaken && !drawing ?
                        <TouchableOpacity
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="white" />
                        </TouchableOpacity>

                        : photoTaken && !drawing ?

                            <View>
                                <TouchableOpacity onPress={acceptImage}>
                                    <Text style={styles.text}>Accept image</Text>
                                    <Feather name="thumbs-up" size={50} color="green"/>
                                </TouchableOpacity>
                            </View>

                            :

                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.text}>Draw</Text>
                                    <FontAwesome name="paint-brush" size={48} color="white" />
                                </TouchableOpacity>
                            </View>

                    }

                    {!photoTaken && !drawing ?
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
                        </TouchableOpacity>

                        : photoTaken && !drawing ?

                            <View>
                                <TouchableOpacity onPress={showDialog}>
                                    <Text style={styles.text}>Try again</Text>
                                    <Feather name="thumbs-down" size={50} color="red"  />
                                </TouchableOpacity>
                            </View>

                            :

                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.text}>Clear</Text>
                                    <MaterialCommunityIcons name="eraser" size={50} color="white" />
                                </TouchableOpacity>
                            </View>


                    }

                    <TouchableOpacity
                        onPress={() => {
                            setGhostImage(prevCheck => !prevCheck);
                            console.log('show ghost image =', ghostImage)
                        }}>
                        {ghostImage ?
                            <SimpleLineIcons name="ghost" size={50} color="white" />
                            :
                            <MaterialCommunityIcons name="ghost-off" size={50} color="white" />
                        }

                    </TouchableOpacity>

                </View>
            </View>
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


