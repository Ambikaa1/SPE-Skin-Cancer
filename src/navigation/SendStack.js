import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SendScreen from "../screens/SendScreen";
import HeaderBar from "../components/HeaderBar";

const Stack = createStackNavigator()

const SendStack = () => {
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
        options = {{ title: "Send", headerTitle: props => <HeaderBar {...props} />}}
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