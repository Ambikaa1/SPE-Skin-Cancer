import React from "react";
import { Text, StyleSheet } from "react-native";

const HeaderText = ({ children }) => {
  return(
    <Text style = {styles.text}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default HeaderText;