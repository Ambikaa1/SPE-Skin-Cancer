import React from "react"
import { StyleSheet} from "react-native";
import TakePhoto from "../components/TakePhoto"

const CameraFarScreen = ({ navigation, route }) => {
  let uris = []
  return (
    <TakePhoto navigation = {navigation} nextScreen = "ReviewFar" uris = {uris} name = {route.params.name} comments = {route.params.comments} />
  );
};

const styles = StyleSheet.create({});

export default CameraFarScreen;