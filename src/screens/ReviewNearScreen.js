import React from "react";
import { StyleSheet } from "react-native";
import Review from "../components/Review"

const ReviewNearScreen = ({ navigation, route }) => {
  return (
    <Review navigation = {navigation} route = {route} nextScreen = "MoleForm" />
  );
};

const styles = StyleSheet.create({});

export default ReviewNearScreen;