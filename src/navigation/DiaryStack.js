import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import DiaryScreen from "../screens/DiaryScreen";
import MoleInfoScreen from "../screens/MoleInfoScreen";
import ImageScreen from "../screens/ImageScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"

const Stack = createStackNavigator()

const DiaryStack = () => {

    //Help function
    const FarShotScreenHelp = () => {
        Alert.alert("Help","Here you can see the far shots for each mole you have logged on the app, along with the name, comments and when it was last updated." +
        " \n\nTap on an image to see the near shots associated with each mole.");
    };

    const NearShotScreenHelp = () => {
        Alert.alert("Help","Here you can see the near shots for the mole you selected, including when the picture was taken." +
        "\n\nYou can tap on an image to view it in full screen.");
    };

  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "Diary"
        component = {DiaryScreen}
        options = {{
          title: "Diary",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={FarShotScreenHelp}/>,
        }}
      />
      <Stack.Screen
        name = "MoleInfo"
        component = {MoleInfoScreen}
        options = {{
          title: "Mole",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction={NearShotScreenHelp}/>,
        }}
      />
      <Stack.Screen
        name = "Image"
        component = {ImageScreen}
        options = {{
          title: "Image",
          headerTitle: props => <HeaderText {...props} />,
          // headerRight: props => <HeaderButton {...props} />,
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

export default DiaryStack;
