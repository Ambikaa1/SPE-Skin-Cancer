import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoListScreen from "../screens/InfoListScreen"
import InfoScreen from "../screens/InfoScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SurveyScreen2 from "../screens/SurveyScreen2";
import WhySCQOLIT from "../screens/WhySCQOLIT";
import LastSCQOLITScreen from "../screens/LastSCQOLITScreen";

const Stack = createStackNavigator()

const InfoStack = () => {

    const InfoListScreenHelp = () => {
      Alert.alert("Help", "This is the information part of the app.\n\nYou can traverse the information available "+
      "by clicking the header most relevant to your query.\n\nThis information has been collated "+
      "and created by doctors and medical students involved with the SCaRF charity.\n\n"+
          "You can also complete the SCQOLIT survey, which is for people who have had a skin cancer diagnosis");
    };

    const InfoScreenHelp = () => {
        Alert.alert("Help", "You can go back by clicking the back button at the top left or tapping the info icon again \n\n"+
            "Note: some information pages may contain external links that direct you to more "+
        "information.");
    };

    const WhySurveyHelp = () => {
        Alert.alert("Help", "\nHere you can read more detail about the SCQOLIT survey. \n\nPress 'Next' to start the survey, or press the back button" +
            " at the top left.");
    };
    const SurveyHelp = () => {
        Alert.alert("Help","\nThis is the SCQOLIT survey.\n\nPress a button to answer the question and then click 'Next' to move on to the next question\n\n"+
            "When you're done, press the 'Finished' button to view your score.");
    }
    const FinalSurveyPageHelp = () => {
        Alert.alert("Help","\nThis is your score for the SCQOLIT survey.\n\nPress 'Done' to save and return to the homepage." +
        " You can complete this survey again at any time.");
    }

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
        name= "SurveyScreen"
        component = {SurveyScreen2}
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
            title: "Done!",
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

export default InfoStack;
