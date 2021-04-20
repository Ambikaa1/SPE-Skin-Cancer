import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoListScreen from "../screens/InfoListScreen"
import InfoScreen from "../screens/InfoScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SurveyScreen2 from "../screens/SCQOLIT survay/SurveyScreen2";
import WhySCQOLIT from "../screens/SCQOLIT survay/WhySCQOLIT";
import LastSCQOLITScreen from "../screens/SCQOLIT survay/LastSCQOLITScreen";

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

    const WhySurveyHelp = () => {
        Alert.alert("Help", "\nThis page gives a description of the survey. Press 'Next' to continue")
    };
    const SurveyHelp = () => {
        Alert.alert("Help","\nThis is the SCQOLIT survey.\n\n Press a button to answer the question and then click 'Next' to move on to the next question\n\n"+
            " When you're done, press the 'Finished' button to view your score.")
    }
    const FinalSurveyPageHelp = () => {
        Alert.alert("Help","\nThis is your score for the SCQOLIT survey.\n\nPress 'Done' to save and return to the homepage")
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
