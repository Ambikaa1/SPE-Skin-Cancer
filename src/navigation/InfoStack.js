import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoListScreen from "../screens/InfoListScreen"
import InfoScreen from "../screens/InfoScreen";
import StorageScreen from "../screens/StorageScreen";
import HeaderBar from "../components/HeaderBar";

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
        options = {{ title: "Information", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "InfoScreen"
        component = {InfoScreen}
        options = {{ title: "Information", headerTitle: props => <HeaderBar {...props} />}}
      />
      <Stack.Screen
        name = "StorageScreen"
        component = {StorageScreen}
        options = {{ title: "Storage", headerTitle: props => <HeaderBar {...props} />}}
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