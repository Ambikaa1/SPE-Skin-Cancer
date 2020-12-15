import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, Alert, Image, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';



const DiaryScreen = () => {
  return (
      <SafeAreaView>
          <View>
              <Text>
              <TouchableOpacity onPress={() => Alert.alert('Arrow Pressed')}>
                  <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
                  <TouchableOpacity onPress={() => Alert.alert('Help Pressed')}>
                      <AntDesign name="questioncircleo" size={24} color="black" />
                  </TouchableOpacity>
              </Text>
          </View>

          <Text style={styles.title}>Diary Page</Text>
          <Text style={styles.subtitle}>Choose a mole to view pictures:</Text>
          <View>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('Mole 1 Pressed')}>
                  <Text>
                      <Text style={styles.buttonText}>Mole 1</Text>
                      <Text>
                          <Feather style={styles.imageContainer} name="image" size={24} color="black" />
                      </Text>
                  </Text>
              </TouchableOpacity>
              <Text>

              </Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('Mole 2 Pressed')}>
                  <Text>
                      <Text style={styles.buttonText}>Mole 2</Text>
                      <Text>
                          <Feather style={styles.imageContainer} name="image" size={24} color="black" />
                      </Text>
                  </Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#fff"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    subtitle: {
        marginTop: 16,
        paddingVertical: 8,
        paddingLeft: 10,
        borderRadius: 6,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#71A1D1",
    },
    buttonText: {
        fontSize: 20,
    },
    imageContainer: {
        fontSize: 50,
        textAlign: 'right',
    }
});

export default DiaryScreen;
