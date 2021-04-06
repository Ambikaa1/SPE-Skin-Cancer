import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SettingsButton from "../components/SettingsButton"
import RiskFactorsScreen from "../screens/RiskFactorsScreen";
import SurveyScreen from "../screens/SCQOLIT survay/SurvayScrren";
import WhySCQOLIT from "../screens/SCQOLIT survay/WhySCQOLIT";
import LastSCQOLITScreen from "../screens/SCQOLIT survay/LastSCQOLITScreen";

const Stack = createStackNavigator()

const HomeStack = () => {
  const HomeHelp = () => {
      Alert.alert("Help", "\nThis is the homepage of the app.\n\nYou can personalise your information by "+
      "clicking on the user icon below the help button.\n\n This page gives you access to the SCaRF charity website "+
      "with the bottom left box, as well as their donation page, on the right.");
  };

  const UserHelp = () => {
    Alert.alert("Help", "\nHere you can view your personal information stored in the app.\n\nPress any of the boxes to make"+
        " changes and then press Done at the bottom to update these changes.\n\nAny information you add to"
      +" this app will be stored locally on your phone so only you have access to it.");
  };

  const WhySurveyHelp = () => {
      Alert.alert("Help", "\nThis page gives a description of the survey. Press 'Next' to continue")
  };
  const SurveyHelp = () => {
      Alert.alert("Help","\nThis is the SCQOLIT survey.\n\nScroll through and select answers for each question from the drop down menus. \n\n"+
          " When your done, press the 'Finished' button at the bottom of the page to save your answers and get your score.")
  }
  const FinalSurveyPageHelp = () => {
      Alert.alert("Help","\nThis is your score for the SCQOLIT survey.\n\nPress 'Next' to return to the homepage")
  }

  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
        <Stack.Screen
            name = "WelcomeScreen"
            component = {WelcomeScreen}
            options = {{
                title: "Welcome"
            }}
        />

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
          title: "User Info",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction = {UserHelp} />,
        }}
      />
      <Stack.Screen
        name = "RiskFactorsScreen"
        component = {RiskFactorsScreen}
        options = {{
            title: "User Info",
            headerTitle: props => <HeaderText {...props} />,
            headerRight: props => <HeaderButton {...props} onPressFunction = {UserHelp} />,
        }}
      />
      <Stack.Screen
          name= "SurveyScreen"
          component = {SurveyScreen}
          options = {{
              title: "SCQOLIT Survey",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction = {SurveyHelp} />,
          }}
      />
      <Stack.Screen
          name="WhySCQOLITScreen"
          component = {WhySCQOLIT}
          options = {{
              title: "Why SCQOLIT?",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction = {WhySurveyHelp} />,
          }}
      />
      <Stack.Screen
          name="LastSCQOLITScreen"
          component = {LastSCQOLITScreen}
          options = {{
              title: "Done",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} onPressFunction={FinalSurveyPageHelp} />,
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
