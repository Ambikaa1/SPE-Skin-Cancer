import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoleInfoScreen = ({ route }) => {
  return (
    <View>
      <Text>Hello world! {route.params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MoleInfoScreen;