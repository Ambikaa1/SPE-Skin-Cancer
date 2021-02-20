import React from "react"
import { StyleSheet } from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraNearScreen = ({ navigation }) => {
  return(
    <TakePhoto navigation = {navigation} nextScreen = "ReviewNear" />
  );
};

const styles = StyleSheet.create({});

export default CameraNearScreen;