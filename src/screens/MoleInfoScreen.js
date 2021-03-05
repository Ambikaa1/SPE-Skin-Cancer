import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("17.db");

const MoleInfoScreen = ({ route }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql(
          "SELECT near_shot FROM mole_entry WHERE mole_id = ?;", 
          [route.params.id], 
          (_, { rows }) => setEntries(rows._array)
        );
      }
    );
  }, []);

  const displayImages = ({ item }) => {
    return (
      <Image 
        style = {styles.image}
        source = {{ uri: item.near_shot }} 
      />
    );
  }

  return (
    <View>
      <FlatList 
        data = {entries}
        renderItem = {displayImages}
        keyExtractor = {() => `${Math.floor(Math.random() * 10000)}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 100
  },
});

export default MoleInfoScreen;