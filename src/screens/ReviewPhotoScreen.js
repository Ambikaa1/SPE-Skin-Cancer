import React from "react";
import { Text, Image, StyleSheet } from "react-native";

const ReviewPhotoScreen = ({ navigation, route }) => {
  let photo = route.params.photo
  // console.log(photo);
  return (
    <Image
      style = { styles.camera }
      source = {{ uri: photo }}
    />
  );
};

const styles = StyleSheet.create({
  camera:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
});

export default ReviewPhotoScreen;