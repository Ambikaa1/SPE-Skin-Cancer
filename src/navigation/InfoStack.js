import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoListScreen from "../screens/InfoListScreen"
import InfoScreen from "../screens/InfoScreen";
import StorageScreen from "../screens/StorageScreen";

const Stack = createStackNavigator()

const InfoStack = () => {
  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "InfoList"
        component = {InfoListScreen}
        options = {{
          title: "Information",
        }}
      />
      <Stack.Screen
        name = "InfoScreen"
        component = {InfoScreen}
        options = {{
          title: "Information",
        }}
      />
      <Stack.Screen
        name = "StorageScreen"
        component = {StorageScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#71A1D1",
  }
});

export default InfoStack;