import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoListScreen from "../screens/InfoListScreen"
import InfoScreen from "../screens/InfoScreen";
import StorageScreen from "../screens/StorageScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"

const Stack = createStackNavigator()

const InfoStack = () => {

    const InfoListScreenHelp = () => {
      Alert.alert("Help", "This is the information page part of the app.\n\nYou can traverse the information available "+
      "by clicking the header you think is most relevant to your query.\n\nThis information has been collated "+
      "and created by doctors and medical students involved with the SCaRF charity.\n\nIf you would like to go back, simply"+
      " press the back button on the top left corner. Alternatively, you "+
      "click on the Info icon on the bottom bar to return to the front page.");
    };

    const InfoScreenHelp = () => {
        Alert.alert("Help", "Some information pages may also contain external links that direct you to more "+
        "information.");
    };

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
          headerRight: props => <HeaderButton {...props} onPressFunction = {InfoListScreenHelp} />,
        }}
      />
      <Stack.Screen
        name = "InfoScreen"
        component = {InfoScreen}
        options = {{
          title: "Information",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction = {InfoScreenHelp} />,
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
