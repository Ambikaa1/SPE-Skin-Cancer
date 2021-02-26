import React from "react";
import { StyleSheet, TouchableOpacity, Alert, } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const onPressFunction = () => {
  Alert.alert("Help Title", "Help text goes here");
}

const HeaderButton = () => {
  return (
    <TouchableOpacity onPress = {onPressFunction} style =  {styles.button}>
      <Ionicons name = "help-circle" size = {35} color = {"white"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ 
  "button": {
    marginRight: 5,
  }
});

export default HeaderButton;