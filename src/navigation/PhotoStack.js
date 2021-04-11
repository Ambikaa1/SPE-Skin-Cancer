import React from "react";
import {Alert, StyleSheet} from "react-native";
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
import SCQOLITStack from "./SQOLITStack";
import BackHomuncScreen from "../screens/BackHomuncScreen";
import LeftHomuncScreen from "../screens/LeftHomuncScreen";
import RightHomuncScreen from "../screens/RightHomuncScreen";
import SideBodyPartScreen from "../screens/SideBodyPartScreen";
import BackBodyPartScreen from "../screens/BackBodyPartScreen";
import SwipingHomuncScreen from "../screens/SwipingHomuncScreen";
import CloseHeadScreen from "../screens/CloseHeadScreen";
const Stack = createStackNavigator();

const PhotoStack = () => {

    //Help functions
    const HomuncHelp = () => {
        Alert.alert("Help", "Here you should select the area of your body that the mole you want to take a picture of"+
        " is located.\n\nUse the buttons at the top to switch views of the body diagram.");
    };

    const BodyPartHelp = () => {
        Alert.alert("Help", "Check that this is the correct area your mole is located.\n\nIf you are happy, press "+
        "confirm at the bottom to proceed.\n\nIf you would like to choose a different area instead, press the back "+
            "button on the top left.");
    };

    const MoleTypeHelp = () => {
        Alert.alert("Help", "If you are documenting a mole for the first time:\n\u2022Select 'Yes' from the drop down menu."+
        "\n\u2022Add a relevant mole name, such as 'Left Upper Arm 1'.\n\u2022Add any additional comments (this is optional)."+
        "\n\nIf you are adding a near-shot for an existing entry:\n\u2022Select 'No' from the drop down menu.\n\u2022"+
        "Select the entry you wish to add a new picture to.\n\nPress 'Confirm' to continue.");
    };

    const CameraHelp = () => {
        Alert.alert("Help", "If you need reminding of the guidance to take the picture, press the 'Help' back"+
        " button on the top left.");
    };

    const ReviewHelp = () => {
        Alert.alert("Help", "If you are happy with the photograph:\n\u2022Press 'Accept' below the image."+
        "\n\u2022Drag the red circle around with your finger to circle the mole. You can use the slider on the right"+
        " to increase and decrease the size of the circle. Use this to make it clear what mole you are documenting."+
        "\n\u2022Press 'Done' to proceed.\n\nIf you are not happy and would like to take a different photograph:"+
        "\n\u2022Press 'Try again' and confirm your choice.");
    };

  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      {/*<Stack.Screen*/}
      {/*    name = "FrontHomunc"*/}
      {/*    component = {FrontHomuncScreen}*/}
      {/*    options = {{*/}
      {/*        title: "Front View",*/}
      {/*        headerTitle: props => <HeaderText {...props} />,*/}
      {/*        headerRight: props => <HeaderButton {...props} onPressFunction = {HomuncHelp}/>,*/}
      {/*        headerLeft: null,*/}
      {/*        gestureEnabled: false*/}
      {/*    }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*    name = "BackHomunc"*/}
      {/*    component = {BackHomuncScreen}*/}
      {/*    options = {{*/}
      {/*        title: "Back View",*/}
      {/*        headerTitle: props => <HeaderText {...props} />,*/}
      {/*        headerRight: props => <HeaderButton {...props} onPressFunction = {HomuncHelp}/>,*/}
      {/*        headerLeft: null,*/}
      {/*        gestureEnabled: false*/}
      {/*    }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*    name = "LeftHomunc"*/}
      {/*    component = {LeftHomuncScreen}*/}
      {/*    options = {{*/}
      {/*        title: "Left Side View",*/}
      {/*        headerTitle: props => <HeaderText {...props} />,*/}
      {/*        headerRight: props => <HeaderButton {...props} onPressFunction = {HomuncHelp}/>,*/}
      {/*        headerLeft: null,*/}
      {/*        gestureEnabled: false*/}
      {/*    }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*    name = "RightHomunc"*/}
      {/*    component = {RightHomuncScreen}*/}
      {/*    options = {{*/}
      {/*        title: "Right Side View",*/}
      {/*        headerTitle: props => <HeaderText {...props} />,*/}
      {/*        headerRight: props => <HeaderButton {...props} onPressFunction = {HomuncHelp}/>,*/}
      {/*        headerLeft: null,*/}
      {/*        gestureEnabled: false*/}
      {/*    }}*/}
      {/*/>*/}
      <Stack.Screen
          name = "Swiping"
          component = {SwipingHomuncScreen}
          options = {{
              title: "Body Outline",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction = {HomuncHelp}/>,
              // headerLeft: null,
              gestureEnabled: false
          }}
      />
      <Stack.Screen
        name = "BodyPart"
        component = {BodyPartScreen}
        options = {{
          title: "Location",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={BodyPartHelp}/>,
        }}
      />
      <Stack.Screen
          name = "SideBodyPart"
          component = {SideBodyPartScreen}
          options = {{
              title: "Location",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction={BodyPartHelp}/>,
          }}
      />
      <Stack.Screen
          name = "BackBodyPart"
          component = {BackBodyPartScreen}
          options = {{
              title: "Location",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction={BodyPartHelp}/>,
          }}
      />
      <Stack.Screen
          name = "CloseHeadScreen"
          component = {CloseHeadScreen}
          options = {{
              title: "Close Head",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction={BodyPartHelp}/>,
          }}
      />
      <Stack.Screen
        name = "MoleType"
        component = {MoleTypeScreen}
        options = {{
          title: "Choose Mole",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={MoleTypeHelp}/>,
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
          headerRight: props => <HeaderButton {...props} onPressFunction={CameraHelp}/>,
        }}
      />
      <Stack.Screen
        name = "CameraNear"
        component = {CameraNearScreen}
        options = {{
          title: "Near Shot",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={CameraHelp}/>,
        }}
      />
      <Stack.Screen
        name = "ReviewFar"
        component = {ReviewFarScreen}
        options = {{
          title: "Review",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={ReviewHelp}/>,
          headerLeft: null,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
          name = "HelpNearShot"
          component = {HelpNearShotScreen}
          options = {{
              headerLeft: null,
              gestureEnabled: false,
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
      <Stack.Screen
          name= "Survay"
          component= {SCQOLITStack}
          />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#71A1D1",
  },
});

export default PhotoStack;
