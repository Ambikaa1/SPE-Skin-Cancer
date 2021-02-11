import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db")
db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
);

const StorageScreen = ({ route }) => {
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists humonculus (name text primary key not null unique);",
        [],
        null,
        (t, error) => {console.log(error);}
      );
      tx.executeSql(
        "create table if not exists mole (id integer primary key not null unique, name text, body_part text references humonculus(name), description text, image text);",
        [],
        null,
        (t, error) => {console.log(error);}
      );
      tx.executeSql("insert into humonculus (name) values ('head');", []);
      tx.executeSql("insert into humonculus (name) values ('body');", []);
      tx.executeSql("insert into humonculus (name) values ('arms');", []);
      tx.executeSql("insert into humonculus (name) values ('legs');", []);
    });
  });

  return (
    <View>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql(
            "insert into mole (name, body_part, description, image) values ('Mole', 'head', 'abcde', null);",
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
          tx.executeSql("select * from mole;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>VIEW_MOLE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql(
            "select * from humonculus;",
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