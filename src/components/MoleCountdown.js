import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoleCountdown = ({ item }) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.name}>{item.name}</Text>
            <View style = {styles.bar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: "black",
    },
    name: {
        fontSize: 17
    },
    bar: {
        marginTop: 5,
        height: 10,
        // width: 10,
        backgroundColor: "#71A1D1"
    }
});

export default MoleCountdown;