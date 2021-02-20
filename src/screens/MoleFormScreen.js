import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MoleFormScreen = ({ route }) => {
  console.log(route.params.uris);
  return (
    <View>
      <Text>TEST</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MoleFormScreen;