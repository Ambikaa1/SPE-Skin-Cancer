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
        Alert.alert("Help", "Far shot help - Needs coding");
    };

    const NearShotHelp = () => {
        Alert.alert("Help", "Near shot help - Needs coding");
    };

    const SendShotHelp = () => {
        Alert.alert("Help", "Send shot help - Needs coding");
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
