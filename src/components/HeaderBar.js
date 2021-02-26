import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const onPressFunction = () => {
  Alert.alert("Test");
}

const HeaderBar = ({ children }) => {
  return(
    <View style = {styles.container}>
      <Text style = {styles.text}>{children}</Text>
      <TouchableOpacity style = {styles.help} onPress = {onPressFunction}>
        <Ionicons name = "help-circle" size = {30} color = {"white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width,
  },
  text: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "600"
  },
  help: {
    position: "absolute",
    right: 10,
  }
});

export default HeaderBar;