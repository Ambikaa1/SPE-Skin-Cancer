import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import * as FileSystem from 'expo-file-system';

const ViewImageScreen = () => {
  return (
    <View>
      <Image
        style = {styles.Image}
        source = {{ uri: "file:///var/mobile/Containers/Data/Application/B6F3B8DD-AAC7-42FF-B4FA-368369425E9D/Documents/ExponentExperienceData/%2540anonymous%252Fapp-8345b4ac-2bbe-446b-9745-ddcdc28f1dbb/near_shot/test.jpg"}}
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