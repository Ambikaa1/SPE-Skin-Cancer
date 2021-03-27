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

    const [selectedImages, setSelectedImages] = useState([])

    const displayFarShots = ({ item }) => {
        let uri = item.near_shot
        let selected = selectedImages.includes(uri)

        return(
            <View style = {styles.nearFarShot}>
            <TouchableOpacity style = {[styles.nearFarShot, selected ? {borderWidth: 5, borderColor:  "#71A1D1"} : {borderWidth: 5, borderColor:  "transparent"}]} onPress = {() => HandleMultipleSelection(uri)}>
                <Image
                    style = {[styles.image, selected ?  {opacity : 0.5} : {opacity: 1}]}
                    source = {{ uri: uri}}
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
        let nextSelectedImages = selectedImages

        if (nextSelectedImages.includes(uri)) {
            nextSelectedImages = nextSelectedImages.filter(_uri => _uri !== uri)
        }else {
            nextSelectedImages.push(uri)
        }
        setSelectedImages([...nextSelectedImages])
    }

    return (

        <View style={styles.container}>
            <Text style = {styles.title}>Select the images you would like to send:</Text>
            <Text style={styles.subTitle}>Currently selected: {selectedImages.length}</Text>
            <TouchableOpacity
                style={styles.topButtonStyle}
                onPress = {() => console.log(selectedImages)}
            >
                <Text style={styles.ButtonText}>Select images</Text>
            </TouchableOpacity>

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
        fontSize: 18,
        fontWeight: "bold",
    },
    subTitle: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#71A1D1",
    },
    topButtonStyle:{
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        alignItems: 'center',
    },
    moleDetails: {
        fontSize: 18,
        paddingLeft: 10,
    },
});

export default SelectNearShots;
