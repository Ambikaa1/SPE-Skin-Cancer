import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import DiaryScreen from "../screens/DiaryScreen";
import HeaderBar from "../components/HeaderBar";

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
        options = {{ title: "Diary", headerTitle: props => <HeaderBar {...props} />}}
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