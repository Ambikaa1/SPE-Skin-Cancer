import React, { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from "../components/SearchBar";
import InfoItem from "../components/InfoItem";
import InfoScreen from "./InfoScreen";
import StorageScreen from "./StorageScreen";
import CamCopyScreen from "./CamCopyScreen";
import ViewImageScreen from "./ViewImageScreen";
import { NavigationContainer } from "@react-navigation/native";

// This is temporary
const data = [{title: "What is skin cancer?", children: [{title: "The common types of skin cancer", children: [{title: "Basal cell carcinoma"}, {title: "Squamous cell carcinoma"}, {title: "Malignant melanoma"}]}, {title: "How skin cancers are triggered"}, {title: "What skin cancer looks like"}, {title: "Treatments for skin cancer"}]},{title: "How do I monitor my moles?",},{title: "What is the charity SCaRF?",},{title: "How do I donate?",}]

const InfoListScreen = ({ navigation, route }) => {
  // This is temporary
  let toDisplay
  if (typeof route.params == "undefined") {
    toDisplay = data
  } else {
    toDisplay = route.params.children
  }

  const calculateNavigationFunction = ({ title, children }) => {
    if (typeof children == "undefined") {
      return navigation.navigate("InfoScreen", {title,})
    }
    return navigation.push("InfoList", {children,})
  };

  const [term, setTerm] = useState("")
  return (
    <View style = {styles.container}>
      <SearchBar
        term = {term}
        onTermChange = {setTerm}
        onTermSubmit = {() => {}}
      />
      <FlatList
        data = {toDisplay}
        keyExtractor = {(item) => item.title}
        renderItem = {({ item }) => {
          return (
            <TouchableOpacity onPress = {() => calculateNavigationFunction(item)}>
              <InfoItem name = {item.title}/>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity onPress = {() => navigation.navigate("StorageScreen")}>
        <InfoItem name = {"STORAGE"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate("CamCopyScreen")}>
        <InfoItem name = {"CAMERA"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate("ViewImageScreen")}>
        <InfoItem name = {"IMAGE"}/>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator()

const InfoStack = () => {
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
        }}
      />
      <Stack.Screen
        name = "InfoScreen"
        component = {InfoScreen}
        options = {{
          title: "Information",
        }}
      />
      <Stack.Screen
        name = "StorageScreen"
        component = {StorageScreen}
      />
      <Stack.Screen
        name = "CamCopyScreen"
        component = {CamCopyScreen}
      />
      <Stack.Screen
        name = "ViewImageScreen"
        component = {ViewImageScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#71A1D1",
  },
  container: {
    flex: 1,
  },
});

export default InfoStack;
