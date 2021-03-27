import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import * as SQLite from "expo-sqlite";


const db = SQLite.openDatabase("22.db");

const SelectNearShots = ({ route }) => {
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

    let selectedImages = [];

    const displayFarShots = ({ item }) => {
        return(
            <View style = {styles.nearFarShot}>
            <TouchableOpacity style = {styles.nearFarShot} onPress = {() => HandleMultipleSelection(item.near_shot)}>
                <Image
                    style = {styles.image}
                    source = {{ uri: item.near_shot }}
                />
            </TouchableOpacity>
                <View style = {styles.moleInfo}>
                    <Text style = {styles.moleName}>{item.name}</Text>
                    <Text style = {styles.moleDetails}>{item.comments}</Text>
                    <Text style = {styles.moleDetails}>Last updated: {item.date}</Text>
                </View>
            </View>
        );
    };

    const HandleMultipleSelection = (uri) => {
        if (selectedImages.includes(uri))
            selectedImages =  selectedImages.filter(_uri => _uri !== uri)
        else
            selectedImages.push(uri)
        console.log(selectedImages)
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Near shot images:</Text>
            <FlatList
                data = {entries}
                extraData = {selectedImages}
                renderItem = {displayFarShots}
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
        borderStyle: 'solid',
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

export default SelectNearShots;
