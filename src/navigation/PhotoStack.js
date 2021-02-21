import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomunculusScreen from "../screens/HomunculusScreen";
import BodyPartScreen from "../screens/BodyPartScreen"
import CameraFarScreen from "../screens/CameraFarScreen"
import CameraNearScreen from "../screens/CameraNearScreen"
import ReviewFarScreen from "../screens/ReviewFarScreen";
import ReviewNearScreen from "../screens/ReviewNearScreen";
import MoleFormScreen from "../screens/MoleFormScreen";

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
        name = "CameraFar"
        component = {CameraFarScreen}
        options = {{
          title: "Take Far Shot",
        }}
      />
      <Stack.Screen
        name = "CameraNear"
        component = {CameraNearScreen}
        options = {{
          title: "Take Near Shot",
        }}
      />
      <Stack.Screen
        name = "ReviewFar"
        component = {ReviewFarScreen}
        options = {{
          title: "Review Far Shot",
        }}
      />
      <Stack.Screen
        name = "ReviewNear"
        component = {ReviewNearScreen}
        options = {{
          title: "Review Near Shot",
        }}
      />
      <Stack.Screen
        name = "MoleForm"
        component = {MoleFormScreen}
        options = {{
          title: "Your Mole",
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