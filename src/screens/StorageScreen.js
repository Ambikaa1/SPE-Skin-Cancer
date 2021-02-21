import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("7.db");
console.log(db);

const StorageScreen = ({ route }) => {
  const date = new Date()

  return (
    <View>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql(
            "INSERT INTO mole (name, sub_body_part) values ('Mole on a toe', 'toes_left_foot');",
            [],
            null,
            (t, error) => {console.log(error);}
          );
        }
      )}>
        <Text style = {styles.text}>ADD_MOLE</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql(
            `INSERT INTO mole_entry (date, far_shot_file, near_shot_file, mole_id) values ('${date}', 'far_shot/1', 'near_shot/1', 1);`,
            [],
            null,
            (t, error) => {console.log(error);}
          );
        }
      )}>
        <Text style = {styles.text}>ADD_ENTRY</Text>
      </TouchableOpacity>

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
