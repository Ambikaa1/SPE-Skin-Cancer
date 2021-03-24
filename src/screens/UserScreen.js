import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import DropDownPicker from "react-native-dropdown-picker";

const db = SQLite.openDatabase("20.db");

const UserScreen = ({navigation}) => {
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
    navigation.navigate("RiskFactorsScreen")
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.info}>You now need to put in some basic information to help the App identify you and your moles.</Text>
      <Text style = {styles.info}>This information remains on your phone unless you want to send it with your images by email to a clinician such as your GP or skin doctor.</Text>
      <Text style = {styles.title}> Basic Information</Text>
      <TextInput
        value = {firstName}
        onChangeText = {value => setFirstName(value)}
        placeholder = "First name"
        style = {styles.input}
      />
      <TextInput
        value = {lastName}
        onChangeText = {value => setLastName(value)}
        placeholder = "Family name"
        style = {styles.input}
      />
      <TextInput
        value = {dateOfBirth}
        onChangeText = {value => setDateOfBirth(value)}
        placeholder = "DD/MM/YYYY"
        style = {styles.input}
      />
      <TouchableOpacity onPress = {() => {
        db.transaction(
          tx => {
            tx.executeSql("select * from user;", [], (_, { rows }) =>
              console.log(rows)
            );
          }
        );
      }}>
        {/*<Text>VIEW_USER</Text>*/}
      </TouchableOpacity>

      <TouchableOpacity style = {styles.doneBox} onPress = {addToDatabase}>
          <Text style = {styles.doneText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  info: {
      fontSize: 15,
      paddingBottom: 5,
  },
  title:{
      fontSize: 20,
      paddingTop: 5,
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
    bottom: 10,
  },
  doneText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  },
});

export default UserScreen;