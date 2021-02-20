import React from "react";
import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomunculusScreen from "../screens/HomunculusScreen";
import BodyPartScreen from "../screens/BodyPartScreen"
import CameraScreen2 from "../screens/CameraScreen2";
import ReviewPhotoScreen from "../screens/ReviewPhotoScreen"

const Stack = createStackNavigator();

const PhotoStack = () => {
  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "Homunculus"
        component = {HomunculusScreen}
        options = {{
          title: "Mole Location",
        }}
      />
      <Stack.Screen
        name = "BodyPart"
        component = {BodyPartScreen}
        options = {{
          title: "Mole Location",
        }}
      />
      <Stack.Screen
        name = "Camera"
        component = {CameraScreen2}
        options = {{
          title: "Camera",
        }}
      />
      <Stack.Screen
        name = "ReviewPhoto"
        component = {ReviewPhotoScreen}
        options = {{
          title: "Review Photo",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#71A1D1",
  }
});

export default PhotoStack;