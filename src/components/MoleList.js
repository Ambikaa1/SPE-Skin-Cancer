import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DisplayImages = ({ uri, name, comments, lastUpdated }) => {
    return(
        <>
            <Image
                style = {styles.image}
                source = {{ uri: uri }}
            />
            <View style = {styles.moleInfo}>
                <Text style = {styles.moleName}>{name}</Text>
                <Text style = {styles.moleDetails}>{comments}</Text>
                <Text style = {styles.moleDetails}>Last updated: {lastUpdated}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 100
    },
    moleInfo: {
        marginLeft: 10,
    },
    moleName: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
    },
    moleDetails: {
        paddingBottom: 10,
    },
});

export default DisplayImages;