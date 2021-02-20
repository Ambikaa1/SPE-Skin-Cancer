import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const MoleFormScreen = ({ route }) => {
  const uris = route.params.uris;

  return (
    <View>
      <Text>FAR SHOT:</Text>
      <Image
        style = { styles.image }
        source = {{ uri: uris[0] }}
      />
      <Text>NEAR SHOT:</Text>
      <Image
        style = { styles.image }
        source = {{ uri: uris[1] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 100
  }
});

export default MoleFormScreen;