import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import * as FileSystem from 'expo-file-system';

const ViewImageScreen = () => {
  const [locations, setLocations] = useState();

  const getFiles = async () => {
    let files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory + "/near_shot");
    setLocations(files)
    console.log(files);
  }

  useEffect(() => {
    getFiles()
  }, []);

  const displayImages = ({item}) => {
    return(
      <Image 
        style = {styles.Image}
        source = {{ uri: FileSystem.documentDirectory + "/near_shot/" + item }} 
      />
    );
  };

  return (
    <View>
      <FlatList 
        data = {locations}
        renderItem = {displayImages}
        keyExtractor = {({item}) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 500,
    width: 300
  }
});

export default ViewImageScreen;