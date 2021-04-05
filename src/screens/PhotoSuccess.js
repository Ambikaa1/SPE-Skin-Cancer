import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';

const PhotoSuccess = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}> Your mole photos are saved! </Text>
            <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("Swiping")}>
                <Text style = {styles.doneText}>Finish</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.doneBox} onPress={() => navigation.navigate("Survay")}>
                <Text style = {styles.doneText}>
                    take questionaire
                </Text>

            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    text: {
        marginTop: 10,
        alignSelf: "center",
        color: "black"
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        width: "97.5%",
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default PhotoSuccess;
