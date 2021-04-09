import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");
console.log(db);

const StorageScreen = ({ route }) => {
  const date = new Date()

  return (
    <View>

      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("select * from mole;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>VIEW_MOLE</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("SELECT * FROM mole_entry;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>VIEW_ENTRY</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql(
            "select * from sub_body_part;",
            [],
            (_, { rows }) => {console.log(rows)},
            (t, error) => {console.log(error);})
        }
      )}>
        <Text style = {styles.text}>VIEW_BODY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default StorageScreen;
