import React from "react";
import { StyleSheet } from "react-native";
import Review from "../components/Review"

const ReviewFarScreen = ({ navigation, route }) => {
  return (
    <Review navigation = {navigation} route = {route} nextScreen = "CameraNear" />
  );
};

const styles = StyleSheet.create({});

export default ReviewFarScreen;