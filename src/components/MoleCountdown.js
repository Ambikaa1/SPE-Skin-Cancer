import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoleCountdown = ({ item }) => {
    const percentage = (item.nextUpdate - Date.now()) / 2592000000;

    const barStyle = () => {
        console.log(percentage);
        return ({
            marginTop: 5,
            height: 10,
            width: `${percentage * 10}%`,
            backgroundColor: "#71A1D1"
        })
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.name}>{item.name}</Text>
            <View style = {styles.bar}>
                <View style = {barStyle()} />
                <View style = {styles.remainingBar} />
            </View>
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
        flexDirection: "row"
    },
    remainingBar: {
        marginTop: 5,
        height: 10,
        backgroundColor: "#71A1D120",
        opacity: 10,
        flex: 1,
    }
});

export default MoleCountdown;