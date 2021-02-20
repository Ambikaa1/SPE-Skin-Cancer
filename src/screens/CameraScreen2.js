import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const CameraScreen2 = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [ghostImage, setGhostImage] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
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
      />

      {ghostImage
        ? <Image style = { styles.image } source = { require('./cute.jpg') }/>
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
                navigation.push("ReviewPhoto", { photo: photo.uri })
                // console.log('photo taken', photo);
            }
          }}>
          <Ionicons name = "radio-button-on" size = {70} style = {styles.cameraIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {() => {
            setGhostImage(prevCheck => !prevCheck);
            console.log('show ghost image =', ghostImage)
          }
        }>
          {ghostImage 
            ? <MaterialCommunityIcons name = "ghost" size = {40} style = {styles.cameraOption} />
            : <MaterialCommunityIcons name = "ghost-off" size = {40} style = {styles.cameraOption} />
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
  }
});

export default CameraScreen2;