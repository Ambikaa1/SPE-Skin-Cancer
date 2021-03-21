import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoleCountdown = ({ item, index }) => {
    const now = Date.now()
    const difference = item.nextUpdate - now
    const percentage = difference / 2592000000;

    const barStyle = () => {
        console.log(percentage);
        return ({
            marginTop: 5,
            height: 10,
            width: `${percentage * 100}%`,
            backgroundColor: "#71A1D1"
        })
    }

    const numOfDays = () => {
        const days = Math.floor(difference / 86400000)
        let message;
        if (days === 0) {
            message = "Today"
        } else {
            message = days + " days"
        }
        return message
    }

    return (
        <View style = {(index === 0) ? styles.containerTop : styles.container}>
            <Text style = {styles.name}>{item.name}</Text>
            <Text style = {styles.numDays}>{numOfDays()}</Text>
            <View style = {styles.bar}>
                <View style = {barStyle()} />
                <View style = {styles.remainingBar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "black",
    },
    container: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: "black",
    },
    name: {
        fontSize: 17,
        fontWeight: "bold"
    },
    numDays: {
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