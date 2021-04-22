import React from "react";
import {Alert, StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SendScreen from "../screens/SendScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SelectMole from "../screens/SelectMole";
import SelectNearShots from "../screens/SelectNearShots"
import SendEmail from "../screens/SendEmail";
import ImageScreen from "../screens/ImageScreen";

const Stack = createStackNavigator()

const SendStack = () => {

    const FirstHelp = () => {
        Alert.alert("Help", "This part of the app allows you to send pictures you've taken to your clinician via email." +
        "\n\nClick the 'select images' button below to get started.");
    };

    const FarShotHelp = () => {
        Alert.alert("Help", "Click on each far shot to view the near shot pictures you have taken of that mole.\n"+
        "The far shot image will be appended to the email along with any near shot images you select\n"+
        "You can enlarge the far shot images by holding your finger down on them.\n\nOnce you have selected all the images"+
        " you want to send, press continue. If you would like to start again, press clear selection.");
    };

    const NearShotHelp = () => {
        Alert.alert("Help", "Press each near shot you would like to select. If the image has been correctly"+
        " selected then it will gain a pink border around it. Once you have selected all the images you want, press return"+
        " at the bottom."+"\nSimilarly to the far shot images, you can hold your finger down on each image to view a larger "+
        "version.");
    };

    const SendShotHelp = () => {
        Alert.alert("Help", "Make sure to check that the email address you are sending these images to is correct!\n"+
        "\nThe names of the entries you have selected images from will show in bold. The number of images you have selected from"+
        " these entries is shown next to the names.\n\nYou will have the chance to look over your photos once more in the email "+
        "application before sending the email.\n\nPress send to open the email application where your photos will be attached."+
        " If you no longer want to send an email, or wish to select different images simply press the back button on the top left.");
    };

  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "Send"
        component = {SendScreen}
        options = {{
          title: "Send",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={FirstHelp}/>,
        }}
        />

      <Stack.Screen
          name = "SelectMole"
          component = {SelectMole}
          options = {{
              title: "Select mole",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction={FarShotHelp}/>,
          }}
      />
        <Stack.Screen
            name = "SelectNearShots"
            component = {SelectNearShots}
            options = {{
                title: "Select near shots",
                headerTitle: props => <HeaderText {...props} />,
                headerRight: props => <HeaderButton {...props} onPressFunction={NearShotHelp}/>,
                headerLeft: null,
                gestureEnabled: false,
            }}
        />
        <Stack.Screen
            name = "SendEmail"
            component = {SendEmail}
            options = {{
                title: "Send email",
                headerTitle: props => <HeaderText {...props} />,
                headerRight: props => <HeaderButton {...props} onPressFunction={SendShotHelp}/>,
            }}
        />
        <Stack.Screen
            name = "Image"
            component = {ImageScreen}
            options = {{
                title: "Image",
                headerTitle: props => <HeaderText {...props}/>,
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

export default SendStack;
