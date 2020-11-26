import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const InfoItem = ({ name }) => {
  return(
    <TouchableOpacity>
      <View style = {styles.container}>
          <Text style = {styles.heading}>{name}</Text>
          <Ionicons name="ios-arrow-forward" style = {styles.icon} size = {24} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2.5,
    padding: 5,
    backgroundColor: "#E2E2E2",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heading: {
    fontSize: 20,
  },
  icon: {
    color: "black",
  }
});

export default InfoItem;
