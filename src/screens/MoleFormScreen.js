import React, { useState } from "react";
import { Text, Image, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase("app.db");

const MoleFormScreen = ({ navigation, route }) => {
  const uris = route.params.uris;
  const date = new Date()
  const [name, setName] = useState(null);

  const savePhoto = async (uri, folderName, id) => {
    console.log(uri);
    console.log(folderName);
    console.log(id);
    let folder = await FileSystem.getInfoAsync(FileSystem.documentDirectory + folderName);
    if (!Boolean(folder.exists)) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + folderName + "/");
    }
    await FileSystem.moveAsync({
      from: uri,
      to: FileSystem.documentDirectory + folderName + "/" + id
    });
    console.log("Photo saved")
  };

  const addToDatabase = () => {
    db.transaction(
      tx => {
        tx.executeSql(
          "INSERT INTO mole (name, sub_body_part) values (?, 'toes_left_foot');",
          [name],
          (t, result) => {
            tx.executeSql(
              "INSERT INTO mole_entry (date, mole_id) values (?, ?);",
              [date, result.insertId],
              (t, result2) => {
                savePhoto(uris[0], "far_shot", result2.insertId);
                savePhoto(uris[1], "near_shot", result2.insertId)
              },
              (t, error) => {console.log(error);}
            );
          },
          (t, error) => {console.log(error);}
        );
      },
    );
    navigation.navigate("Homunculus");
  };

  return (
    <View style = {styles.container}>
      <TextInput
        value = {name}
        onChangeText = {value => setName(value)}
        // placeholder = "Mole name"
        style = {styles.input}
      />
      <View style = {styles.imagesContainer}>
        <View style = {styles.imageAndCaption}>
          <Image
            style = { styles.image }
            source = {{ uri: uris[0] }}
          />
          <Text style = {styles.caption}>Far Shot</Text>
        </View>
        <View style = {styles.imageAndCaption}>
          <Image
            style = { styles.image }
            source = {{ uri: uris[1] }}
          />
          <Text style = {styles.caption}>Near Shot</Text>
        </View>
      </View>
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
    marginBottom: 7.5,
    paddingLeft: 10,
    fontSize: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    marginHorizontal: 5
  },
  imageAndCaption: {
    marginHorizontal: 5,
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    height: ((Dimensions.get("window").width / 2 - 15) / 9) * 16,
    width: Dimensions.get("window").width / 2 - 15,
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

export default MoleFormScreen;