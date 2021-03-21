import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("18.db");

const UserScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql("select * from user;", [], (_, { rows }) => {
            setFirstName(rows._array[0].first_name);
            setLastName(rows._array[0].last_name);
            setDateOfBirth(rows._array[0].date_of_birth);
          }
        );
      }
    );
  }, []);

  const addToDatabase = () => {
    db.transaction(
      tx => {
        tx.executeSql(
          `UPDATE user SET first_name = ?, last_name = ?, date_of_birth = ? WHERE user_id = 1;`,
          [firstName, lastName, dateOfBirth],
          null,
          (t, error) => {console.log(error);}
        );
      }
    );
    navigation.goBack();
  };

  return (
    <View style = {styles.container}>
      <TextInput
        value = {firstName}
        onChangeText = {value => setFirstName(value)}
        placeholder = "First name"
        style = {styles.input}
      />
      <TextInput
        value = {lastName}
        onChangeText = {value => setLastName(value)}
        placeholder = "Last name"
        style = {styles.input}
      />
      <TextInput
        value = {dateOfBirth}
        onChangeText = {value => setDateOfBirth(value)}
        placeholder = "DD/MM/YYYY"
        style = {styles.input}
      />
      {/*<TextInput*/}
      {/*    value = {dateOfBirth}*/}
      {/*    onChangeText = {value => setDateOfBirth(value)}*/}
      {/*    placeholder = "Date of birth"*/}
      {/*    style = {styles.input}*/}
      {/*/>*/}

      <TouchableOpacity onPress = {() => {
        db.transaction(
          tx => {
            tx.executeSql("select * from user;", [], (_, { rows }) =>
              console.log(rows)
            );
          }
        );
      }}>
        <Text>VIEW_USER</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.doneBox} onPress = {addToDatabase}>
        <Text style = {styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: "#E2E2E2",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
  doneBox: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#71A1D1",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    width: "95%",
    bottom: 10
  },
  doneText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  }
});

export default UserScreen;