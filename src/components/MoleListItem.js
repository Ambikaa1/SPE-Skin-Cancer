import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MoleListItem = ({ uri, name, comments, lastUpdated }) => {
    return(
        <View style = {styles.container}>
            <Image
                style = {styles.image}
                source = {{ uri: uri }}
            />
            <View style = {styles.moleInfo}>
                <Text style = {styles.moleName}>{name}</Text>
                <Text style = {styles.moleDetails}>{comments}</Text>
                <Text style = {styles.moleDetails}>Last updated: {lastUpdated}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 5,
        marginVertical: 5,
        borderTopColor: "#71A1D1",
        borderBottomColor: "#71A1D1",
        borderTopWidth: 5,
        borderBottomWidth: 5,
        marginHorizontal: 10
    },
    image: {
        height: 200,
        width: 100
    },
    moleInfo: {
        marginLeft: 10,
        flex: 1,
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

export default MoleListItem;