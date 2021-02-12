import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import * as FileSystem from 'expo-file-system';

const ViewImageScreen = () => {
  return (
    <View>
      <Image
        style = {styles.Image}
        source = {{ uri: "file:///var/mobile/Containers/Data/Application/46515454-770C-48CF-9C98-EBF92EE0EB20/Documents/ExponentExperienceData/%2540anonymous%252Fapp-8345b4ac-2bbe-446b-9745-ddcdc28f1dbb/near_shot/test.jpg"}}
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