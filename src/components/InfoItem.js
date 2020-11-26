import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const InfoItem = ({ name }) => {
  return(
    <TouchableOpacity>
      <View style = {styles.container}>
        <Text style = {styles.heading}>{name}</Text>
        <Ionicons name = "ios-arrow-forward" size = {24} color = "black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2.5,
    marginHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "black",
    borderBottomColor: "black",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  heading: {
    fontSize: 20,
    color: "black",
  },
  icon: {
    color: "black",
  }
});

export default InfoItem;
