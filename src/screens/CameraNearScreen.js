import React from "react"
import { StyleSheet } from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraNearScreen = ({ navigation, route }) => {
  return(
    <TakePhoto navigation = {navigation} nextScreen = "ReviewNear" id = {route.params.id} />
  );
};

const styles = StyleSheet.create({});

export default CameraNearScreen;
