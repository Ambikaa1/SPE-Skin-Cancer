import React, { useState } from "react";
import { Text, Image, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from "react-native";

const MoleFormScreen = ({ route }) => {
  const uris = route.params.uris;
  const [name, setName] = useState(null);

  return (
    <View style = {styles.container}>
      <TextInput
        value = {name}
        onChangeText = {value => setName(value)}
        placeholder = "Mole name"
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
      <TouchableOpacity style = {styles.doneBox}>
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