import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen"
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SettingsButton from "../components/SettingsButton"
import RiskFactorsScreen from "../screens/RiskFactorsScreen";

const Stack = createStackNavigator()

const HomeStack = () => {
  const HomeHelp = () => {
      Alert.alert("Home", "Help for home");
  };

  const UserHelp = () => {
    Alert.alert("User", "Help for user");
  };

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
        options = {{ 
          title: "Home",
          headerLeft: props => <SettingsButton {...props} />,
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction = {HomeHelp} />,
        }}
      />
      <Stack.Screen
        name = "UserScreen"
        component = {UserScreen}
        options = {{ 
          title: "Basic Information",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction = {UserHelp} />,
        }}
      />
      <Stack.Screen
        name = "RiskFactorsScreen"
        component = {RiskFactorsScreen}
        options = {{
            title: "Basic Information",
            headerTitle: props => <HeaderText {...props} />,
            headerRight: props => <HeaderButton {...props} onPressFunction = {UserHelp} />,
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

export default HomeStack;