import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from "../components/SearchBar";
import InfoItem from "../components/InfoItem";

// This is temporary
const data = [{title: "What is skin cancer?", children: [{title: "The common types of skin cancer", children: [{title: "Basal cell carcinoma"}, {title: "Squamous cell carcinoma"}, {title: "Malignant melanoma"}]}, {title: "How skin cancers are triggered"}, {title: "What skin cancer looks like"}, {title: "Treatments for skin cancer"}]},{title: "How do I monitor my moles?",},{title: "What is the charity SCaRF?",},{title: "How do I donate?",}]

const Stack = createStackNavigator()

const InfoStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name = "Information" component = {InfoScreen} />
    </Stack.Navigator>
  );
};

const InfoScreen = ({ navigation }) => {
  const [term, setTerm] = useState("")
  return (
    <SafeAreaView style = {styles.container}>
      <SearchBar
        term = {term}
        onTermChange = {setTerm}
        onTermSubmit = {() => {}}
      />
      <FlatList
        data = {data}
        keyExtractor = {({ title }) => title}
        renderItem = {({ item }) => {
          return (
            <TouchableOpacity onPress = {() => {
              navigation.push("Information")
            }
            }>
              <InfoItem name = {item.title}/>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InfoStack;
