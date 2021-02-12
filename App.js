import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./src/screens/HomeScreen";
import InfoStack from "./src/screens/InfoListScreen";
import CameraScreen from "./src/screens/CameraScreen";
import DiaryScreen from "./src/screens/DiaryScreen";
import SendScreen from "./src/screens/SendScreen";
import {createStackNavigator} from "@react-navigation/stack";
import Homunculous from "./src/screens/Homunculous";
import Homunc2 from "./src/screens/Homunc2";
import Homunc3 from "./src/screens/Homunc3";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {HomeStack} />
      <Tab.Screen name = "Info" component = {InfoStack} />
      <Tab.Screen name = "Camera" component = {CameraScreen} />
      <Tab.Screen name = "Diary" component = {DiaryScreen} />
      <Tab.Screen name = "Send" component = {SendScreen} />
      <Tab.Screen name = "GridView" component = {Homunc2} />
      <Tab.Screen name = "Homunculous" component = {Homunculous} />
      <Tab.Screen name = "Body" component = {Homunc3} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
      {/*<Stack.Navigator initialRouteName="Home">*/}
      {/*    <Stack.Screen name="Homunculous" component={Homunculous} />*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;

