import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import InfoScreen from "./src/screens/InfoScreen";
import CameraScreen from "./src/screens/CameraScreen";
import DiaryScreen from "./src/screens/DiaryScreen";
import SendScreen from "./src/screens/SendScreen";

// This is temporary
const data = [{title: "What is skin cancer?", children: [{title: "The common types of skin cancer", children: [{title: "Basal cell carcinoma"}, {title: "Squamous cell carcinoma"}, {title: "Malignant melanoma"}]}, {title: "How skin cancers are triggered"}, {title: "What skin cancer looks like"}, {title: "Treatments for skin cancer"}]},{title: "How do I monitor my moles?",},{title: "What is the charity SCaRF?",},{title: "How do I donate?",}]

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator data = {data}>
      <Tab.Screen name = "Home" component = {HomeScreen} />
      <Tab.Screen name = "Info" children = {props => <InfoScreen {...props} data = {data} />} />
      <Tab.Screen name = "Camera" component = {CameraScreen} />
      <Tab.Screen name = "Diary" component = {DiaryScreen} />
      <Tab.Screen name = "Send" component = {SendScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

