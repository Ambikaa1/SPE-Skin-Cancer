import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen"
import HeaderBar from "../components/HeaderBar";

const Stack = createStackNavigator()

const HomeStack = () => {
  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "HomeScreen"
        component = {HomeScreen}
        options = {{ title: "Home", headerTitle: props => <HeaderBar {...props} />}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#71A1D1",
  }
});

export default HomeStack;