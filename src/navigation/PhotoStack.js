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
import HeaderBar from "../components/HeaderBar";

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
        options = {{ title: "Location", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "BodyPart"
        component = {BodyPartScreen}
        options = {{ title: "Location", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "CameraFar"
        component = {CameraFarScreen}
        options = {{ title: "Far Shot", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "CameraNear"
        component = {CameraNearScreen}
        options = {{ title: "Near Shot", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "ReviewFar"
        component = {ReviewFarScreen}
        options = {{ title: "Review", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "ReviewNear"
        component = {ReviewNearScreen}
        options = {{ title: "Review", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "MoleForm"
        component = {MoleFormScreen}
        options = {{ title: "Confirm", headerTitle: props => <HeaderBar {...props} />}}
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