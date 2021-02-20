import React from "react"
import { StyleSheet} from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraFarScreen = ({ navigation }) => {
  return(
    <TakePhoto navigation = {navigation} nextScreen = "ReviewFar" />
  );
};

const styles = StyleSheet.create({});

export default CameraFarScreen;