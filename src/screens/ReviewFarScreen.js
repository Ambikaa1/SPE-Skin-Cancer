import React from "react";
import { StyleSheet } from "react-native";
import Review from "../components/Review"

const ReviewFarScreen = ({ navigation, route }) => {
  return (
    <Review navigation = {navigation} nextScreen = "CameraNear" photo = {route.params.photo} name = {route.params.name} comments = {route.params.comments} />
  );
};

const styles = StyleSheet.create({});

export default ReviewFarScreen;