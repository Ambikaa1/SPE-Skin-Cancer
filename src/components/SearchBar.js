import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return(
    <View style = {styles.backgroundStyle}>
      <Feather name = "search" style = {styles.iconStyle} />
      <TextInput
        autoCorrect = {false}
        placeholder = "Search"
        style = {styles.inputStyle}
        value = {term}
        onChangeText = {onTermChange}
        onEndEditing = {onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#E2E2E2",
    height: 50,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row"
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10
  }
});

export default SearchBar;

// Once imported use as follows:
// <SearchBar
//   term = {term}
//   onTermChange = {setTerm}
//   onTermSubmit = {() => {yourFunctionHere}}
// />
