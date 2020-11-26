import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation"
import SearchBar from "../components/SearchBar";
import InfoItem from "../components/InfoItem";

const InfoScreen = ({ navigation, data }) => {
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
            <TouchableOpacity>
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

export default withNavigation(InfoScreen);
