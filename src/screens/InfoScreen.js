import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
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
      <ScrollView>
        <View style = {styles.block}>
          <Text style = {styles.heading}>Skin Cancer</Text>
          <InfoItem name = {"Common types"}/>
          <InfoItem name = {"Triggers"}/>
          <InfoItem name = {"Appearance"}/>
          <InfoItem name = {"Treatments"}/>
        </View>
        <View style = {styles.block}>
          <Text style = {styles.heading}>Monitoring Moles</Text>
          <InfoItem name = {"ABCDE rule"}/>
          <InfoItem name = {"Signs to look for"}/>
        </View>
        <View style = {styles.block}>
          <Text style = {styles.heading}>SCaRF</Text>
          <InfoItem name = {"About"}/>
          <InfoItem name = {"Who we are"}/>
          <InfoItem name = {"What we do"}/>
          <InfoItem name = {"Achievements"}/>
          <InfoItem name = {"The future"}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default InfoScreen;
