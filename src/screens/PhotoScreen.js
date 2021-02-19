import React from "react";
import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomunculusScreen from "./HomunculusScreen";
import BodyPartScreen from "./BodyPartScreen"
import CameraScreen from "./CameraScreen";

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
          title: "Homunculus",
        }}
      />
      <Stack.Screen
        name = "BodyPart"
        component = {BodyPartScreen}
        options = {{
          title: "Body Part",
        }}
      />
      <Stack.Screen
        name = "Camera"
        component = {CameraScreen}
        options = {{
          title: "Camera",
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