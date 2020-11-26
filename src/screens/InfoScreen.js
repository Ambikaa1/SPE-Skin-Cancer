import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoItem from "../components/InfoItem";

const InfoScreen = () => {
  const [term, setTerm] = useState("")

  return (
    <SafeAreaView style = {styles.container}>
      <SearchBar
        term = {term}
        onTermChange = {setTerm}
        onTermSubmit = {() => {}}
      />
      <Text style = {styles.heading}>Skin Cancer</Text>
      <InfoItem name = {"Common types"}/>
      <InfoItem name = {"Triggers"}/>
      <InfoItem name = {"Appearance"}/>
      <InfoItem name = {"Treatments"}/>
      <Text style = {styles.heading}>Monitoring Moles</Text>
      <InfoItem name = {"ABCDE Rule"}/>
      <Text style = {styles.heading}>SCaRF</Text>
      <InfoItem name = {"About"}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default InfoScreen;
