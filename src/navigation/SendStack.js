import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SendScreen from "../screens/SendScreen";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SelectMole from "../screens/SelectMole";
import SelectNearShots from "../screens/SelectNearShots"

const Stack = createStackNavigator()

const SendStack = () => {
  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "Send"
        component = {SendScreen}
        options = {{
          title: "Send",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} />,
        }}
        />

      <Stack.Screen
          name = "SelectMole"
          component = {SelectMole}
          options = {{
              title: "Select mole",
              headerTitle: props => <HeaderText {...props} />,
              headerRight: props => <HeaderButton {...props} />,
          }}
      />
        <Stack.Screen
            name = "SelectNearShots"
            component = {SelectNearShots}
            options = {{
                title: "Select near shots",
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

export default SendStack;
