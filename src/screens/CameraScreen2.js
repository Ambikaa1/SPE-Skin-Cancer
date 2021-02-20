import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraScreen2 = ({ navigation }) => {
  return(
    <TakePhoto navigation = {navigation} />
  );
};

const styles = StyleSheet.create({});

export default CameraScreen2;