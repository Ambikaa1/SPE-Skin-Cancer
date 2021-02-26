import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoListScreen from "../screens/InfoListScreen"
import InfoScreen from "../screens/InfoScreen";
import StorageScreen from "../screens/StorageScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"

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
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
        name = "InfoScreen"
        component = {InfoScreen}
        options = {{ 
          title: "Information",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
        name = "StorageScreen"
        component = {StorageScreen}
        options = {{ 
          title: "Storage",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
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

export default InfoStack;