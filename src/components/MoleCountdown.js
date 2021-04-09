import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoleCountdown = ({ item, index }) => {
    const now = Date.now()
    const difference = item.nextUpdate - now
    const percentage = difference / 2592000000;

    const barStyle = () => {
        console.log(percentage);
        return ({
            height: "100%",
            width: `${percentage * 100}%`,
            backgroundColor: "#71A1D1"
        })
    }

    const numOfDays = () => {
        const days = Math.floor(difference / 86400000)
        let message;
        if (days <= 0) {
            message = "Today"
        } else {
            message = days + " days"
        }
        return message
    }

    return (
        <View style = {(index === 0) ? styles.containerTop : styles.container}>
            <View style = {styles.info}>
                <Text style = {styles.name} numberOfLines = {1}>{item.name}</Text>
                <Text style = {styles.numDays}>{numOfDays()}</Text>
            </View>
            <View style = {styles.barContainer}>
                <View style = {styles.bar}>
                    <View style = {barStyle()} />
                    <View style = {styles.remainingBar} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "#AAAAAA",
    },
    container: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: "#AAAAAA",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {
        fontSize: 17,
        flex: 1
    },
    numDays: {
        fontSize: 17
    },
    barContainer: {
        marginTop: 5,
    },
    bar: {
        flexDirection: "row",
        height: 10,
        borderRadius: 5,
        overflow: "hidden"
    },
    remainingBar: {
        height: "100%",
        backgroundColor: "#71A1D120",
        opacity: 10,
        flex: 1,
    }
});

export default MoleCountdown;