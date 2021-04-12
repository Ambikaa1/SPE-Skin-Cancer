import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const InfoItem = ({ name, index }) => {
    return(
        <View style = {(index === 0) ? styles.containerTop : styles.container}>
            <Text style = {styles.heading}>{name}</Text>
            <Ionicons name = "ios-arrow-forward" size = {17} color = "black" />
        </View>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        marginHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 0.5,
        borderTopColor: "#AAAAAA",
        borderTopWidth: 0.5,
    },
    container: {
        marginHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 0.5
    },
    heading: {
        fontSize: 17,
        color: "black",
    },
    icon: {
        color: "black",
    }
});

export default InfoItem;
