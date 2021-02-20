import React, { useState } from "react";
import { View, Text,Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Review = ({ navigation, route, nextScreen }) => {
  const [drawing, setDrawing] = useState(false);
  const photo = route.params.photo
  const uris = route.params.uris

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
  
  return (
    <View style = {styles.container}>
      <Image
        style = { styles.camera }
        source = {{ uri: photo }}
      />
      <View style = { styles.cameraBar }>
        {drawing
          ?
            <>
              <TouchableOpacity style = {styles.optionButton} onPress = {() => navigation.navigate(nextScreen, {uris: uris.concat([photo])})}>
                <FontAwesome name="paint-brush" size={48} color="white" />
                <Text style = {styles.text}>Draw</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.optionButton} onPress = {() => navigation.navigate(nextScreen, {uris: uris.concat([photo])})}>
                  <MaterialCommunityIcons name="eraser" size={50} color="white" />
                  <Text style = {styles.text}>Clear</Text>
              </TouchableOpacity>
            </>
          :
            <>
              <TouchableOpacity style = {styles.optionButton} onPress = {acceptImage}>
                <Ionicons name = "ios-thumbs-up" size = {50} color = "white"/>
                <Text style = {styles.text}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.optionButton} onPress = {rejectImage}>
                <Ionicons name = "ios-thumbs-down" size = {50} color = "white" />
                <Text style = {styles.text}>Try again</Text>
              </TouchableOpacity>
            </>
        }
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
  }
});

export default Review;