import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoScreen = ({ route }) => {
  return (
    <View>
      <Text style = {styles.title}>{route.params.title}</Text>
      <Text style = {styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus velit, viverra sed rutrum et, eleifend nec velit. Duis congue, lacus quis placerat facilisis, ipsum orci luctus odio, sed viverra tellus dolor vitae lectus. Proin vitae feugiat mauris. Vestibulum aliquet mauris pretium massa ornare pellentesque. Pellentesque bibendum nunc non leo placerat, non auctor purus dignissim. Suspendisse blandit arcu eu sem volutpat pulvinar. Morbi erat lectus, venenatis non augue quis, maximus fringilla est. Sed ultrices sed neque quis rutrum. Etiam volutpat laoreet dictum.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default InfoScreen;

