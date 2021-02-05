import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db")

const StorageScreen = ({ route }) => {

  useEffect(() => {

    db.transaction(tx => {
      // tx.executeSql("drop table if exists mole;")
      tx.executeSql("create table if not exists hum (name text primary key not null unique);", []);
      tx.executeSql("create table if not exists mole (id integer primary key not null, name text, part text, foreign key(part) references hum(name));", []);
      tx.executeSql("create table if not exists test (id integer primary key not null, name text);", []); // temporary
      tx.executeSql("insert into hum (name) values ('head');", []);
      tx.executeSql("insert into hum (name) values ('body');", []);
      tx.executeSql("insert into hum (name) values ('arms');", []);
      tx.executeSql("insert into hum (name) values ('legs');", []);
    });
  });

  return (
    <View>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("insert into test (name) values ('test2');", []);
          tx.executeSql("select * from test;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>ADD TEST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("select * from hum;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>VIEW_BODY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("insert into mole (name) values ('head mole');", []);
          tx.executeSql("select * from mole;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>HEAD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("insert into mole (name, part) values ('body mole', 'body');", []);
          tx.executeSql("select * from mole;", [], (_, { rows }) =>
            console.log(rows)
          );
        })}
      >
        <Text style = {styles.text}>BODY</Text>
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
