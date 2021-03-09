import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomunculusScreen from "../screens/HomunculusScreen";
import BodyPartScreen from "../screens/BodyPartScreen"
import CameraFarScreen from "../screens/CameraFarScreen"
import CameraNearScreen from "../screens/CameraNearScreen"
import ReviewFarScreen from "../screens/ReviewFarScreen";
import ReviewNearScreen from "../screens/ReviewNearScreen";
import MoleTypeScreen from "../screens/MoleTypeScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import HelpFarShotScreen from "../screens/HelpFarShotScreen";
import HelpNearShotScreen from "../screens/HelpNearShotScreen";
import DrawingHelpScreen from "../screens/DrawingHelpScreen";
import PhotoSuccess from "../screens/PhotoSuccess";
import FrontHomuncScreen from "../screens/FrontHomuncScreen";

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
          title: "Location",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
          name = "FrontHomunc"
          component = {FrontHomuncScreen}
          options = {{
              title: "Front View"
          }}
      />
      <Stack.Screen
        name = "BodyPart"
        component = {BodyPartScreen}
        options = {{
          title: "Location",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
        name = "MoleType"
        component = {MoleTypeScreen}
        options = {{
          title: "Choose Mole",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
          name = "HelpFarShot"
          component = {HelpFarShotScreen}
          options = {{title: 'Help'}}
      />
      <Stack.Screen
        name = "CameraFar"
        component = {CameraFarScreen}
        options = {{
          title: "Far Shot",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
        name = "CameraNear"
        component = {CameraNearScreen}
        options = {{
          title: "Near Shot",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
          headerLeft: null,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name = "ReviewFar"
        component = {ReviewFarScreen}
        options = {{
          title: "Review",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
          headerLeft: null,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
          name = "HelpNearShot"
          component = {HelpNearShotScreen}
          options = {{
              title: "Help"
          }}
      />
      <Stack.Screen
        name = "ReviewNear"
        component = {ReviewNearScreen}
        options = {{
          title: "Review",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
          headerLeft: null,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
          name = "PhotoSuccess"
          component = {PhotoSuccess}
          options = {{
              title: "Success!"
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
