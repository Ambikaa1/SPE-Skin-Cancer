import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("4.db")
db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
);

const StorageScreen = ({ route }) => {
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists humonculus (name text primary key not null unique, file_location text);",
        [],
        null,
        (t, error) => {console.log(error);}
      );
      tx.executeSql(
        "create table if not exists mole (mole_id integer primary key not null unique, name text, body_part text references humonculus(name) not null);",
        [],
        null,
        (t, error) => {console.log(error);}
      );
      tx.executeSql(
        "create table if not exists near_shot (near_shot_id integer primary key not null unique, date text not null, file_location text not null, mole_id integer references mole(mole_id) not null);",
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
            "insert into mole (name, body_part) values ('Mole', 'head');",
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
            "insert into near_shot (date, file_location, mole_id) values ('2020-01-01', 'photos/1.jpeg', 1);",
            [],
            null,
            (t, error) => {console.log(error);}
          );
        }
      )}>
        <Text style = {styles.text}>ADD_NEAR</Text>
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
          tx.executeSql("select * from near_shot;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>VIEW_NEAR</Text>
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
