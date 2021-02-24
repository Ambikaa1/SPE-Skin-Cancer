import React, {useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert, Animated, PanResponder} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Review = ({ navigation, route, nextScreen }) => {
  const [drawing, setDrawing] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0)

  const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },

        onPanResponderMove:

            Animated.event(
            [
              null,
              { dx: pan.x, dy: pan.y }
            ],
            {useNativeDriver: false}
        ),
        onPanResponderRelease: () => {
          pan.flattenOffset();
        }
      })
  ).current;

  const getDimensions = ({nativeEvent}) => {
        setMaxX(nativeEvent.layout.width);
        setMaxY(nativeEvent.layout.height);
        console.log("MaxX =", maxX);
        console.log("MaxY = ", maxY);

  }

  const photo = route.params.photo
  const uris = route.params.uris

  const acceptImage = () => {
    setDrawing(true);
  };

  const rejectImage = () => {
    Alert.alert(
      "Do you want to delete this image?",
      "You cannot undo this action.",
      [{text: "Cancel", style: "cancel"}, {text: "Delete", onPress: () => navigation.goBack()}],
    );
  };

  return (
    <View style = {styles.container}>
        <View style = {styles.camera} onLayout = {getDimensions}>
            <Image
                style = { styles.camera }
                source = {{ uri: photo }}
            />

            {drawing
                ?
                <Animated.View
                    style={{
                    position: 'absolute',
                    transform: [
                        { translateX: pan.x.interpolate({inputRange : [-50, maxX-50], outputRange : [-50, maxX-50], extrapolateLeft:"clamp", extrapolateRight:"clamp"})},
                        { translateY: pan.y.interpolate({inputRange : [-50, maxY-50], outputRange : [-50, maxY-50], extrapolateLeft:"clamp", extrapolateRight:"clamp"}) }
                        ]
                    }}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.circle} />
                </Animated.View>
              : null
            }
        </View>

      <View style = { styles.cameraBar }>
        {drawing
          ?
            <>
              <TouchableOpacity style = {styles.optionButton} onPress = {() => navigation.navigate(nextScreen, {uris: uris.concat([photo])})}>
                <FontAwesome name="paint-brush" size={48} color="white" />
                <Text style = {styles.text}>Draw</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.optionButton} onPress = {() => navigation.navigate(nextScreen, {uris: uris.concat([photo])})}>
                  <MaterialCommunityIcons name="eraser" size={50} color="white" />
                  <Text style = {styles.text}>Clear</Text>
              </TouchableOpacity>
            </>
          :
            <>
              <TouchableOpacity style = {styles.optionButton} onPress = {acceptImage}>
                <Ionicons name = "ios-thumbs-up" size = {50} color = "white"/>
                <Text style = {styles.text}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.optionButton} onPress = {rejectImage}>
                <Ionicons name = "ios-thumbs-down" size = {50} color = "white" />
                <Text style = {styles.text}>Try again</Text>
              </TouchableOpacity>
            </>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch"
  },
  camera:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  cameraBar: {
    backgroundColor: "black",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center"
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  circle :{
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderStyle : 'solid',
    borderColor : 'red',
    borderWidth : 5,
  },
});

export default Review;
