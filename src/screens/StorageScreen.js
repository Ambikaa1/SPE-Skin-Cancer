import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db")

const StorageScreen = ({ route }) => {

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql("create table if not exists body (id integer primary key not null, name text)");
    });
  });

  return (
    <View>
      <TouchableOpacity onPress = {() => db.transaction(
        tx => {
          tx.executeSql("insert into body (name) values ('test')");
          tx.executeSql("select * from body", [], (_, { rows }) =>
            console.log(JSON.stringify(rows))
          );
        })}
      >
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create();

export default StorageScreen;
