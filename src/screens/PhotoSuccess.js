import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';

const PhotoSuccess = ({navigation}) => {
    return (
        <View>
            <Text> hi! </Text>
            <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("Homunculus")}>
                <Text style = {styles.doneText}>Finish</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "97.5%",
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default PhotoSuccess;