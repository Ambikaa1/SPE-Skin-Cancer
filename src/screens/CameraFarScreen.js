import React from "react"
import { StyleSheet} from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraFarScreen = ({ navigation, route }) => {
  return (
    <TakePhoto navigation = {navigation} nextScreen = "ReviewFar" name = {route.params.name} comments = {route.params.comments} />
  );
};

const styles = StyleSheet.create({});

export default CameraFarScreen;
