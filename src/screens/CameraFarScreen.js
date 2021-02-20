import React from "react"
import { StyleSheet} from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraFarScreen = ({ navigation }) => {
  let uris = []
  return(
    <TakePhoto navigation = {navigation} nextScreen = "ReviewFar" uris = {uris} />
  );
};

const styles = StyleSheet.create({});

export default CameraFarScreen;