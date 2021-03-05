import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import DiaryScreen from "../screens/DiaryScreen";
import MoleInfoScreen from "../screens/MoleInfoScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"

const Stack = createStackNavigator()

const DiaryStack = () => {
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
          headerRight: props => <HeaderButton {...props} />,
        }}
      />
      <Stack.Screen
        name = "MoleInfo"
        component = {MoleInfoScreen}
        options = {{ 
          title: "Mole",
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

export default DiaryStack;