import React from "react";
import { StyleSheet } from "react-native";
import Review from "../components/Review"

const ReviewNearScreen = ({ navigation, route }) => {
  return (
    <Review navigation = {navigation} nextScreen = "Success" photo = {route.params.photo} id = {route.params.id} />
  );
};

const styles = StyleSheet.create({});

export default ReviewNearScreen;