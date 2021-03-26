import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("22.db");

const MoleInfoScreen = ({ route }) => {
    const [entries, setEntries] = useState([]);

    //Get a list of all the near shot images for a particular mole entry
    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "SELECT near_shot, date FROM mole_entry WHERE mole_id = ?;",
                    [route.params.id],
                    (_, { rows }) => setEntries(rows._array)
                );
            }
        );
    }, []);

    const displayImages = ({ item }) => {
        return (
            <View style={styles.nearFarShot}>
                <Image
                    style = {styles.image}
                    source = {{ uri: item.near_shot }}
                />
                <Text style={styles.moleDetails}>Date taken: {item.date}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Near shot images:</Text>
            <FlatList
                data = {entries}
                renderItem = {displayImages}
                keyExtractor = {() => `${Math.floor(Math.random() * 10000)}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: 150,
    },
    nearFarShot: {
        flexDirection: "row",
        marginHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
    },
    title: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 20,
    },
    moleDetails: {
        fontSize: 18,
        paddingLeft: 10,
    },
});

export default MoleInfoScreen;
