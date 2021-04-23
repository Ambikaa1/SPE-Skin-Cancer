import React, {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useIsFocused} from "@react-navigation/native"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const SelectMoleScreen = ({navigation }) => {
    const [moles, setMoles] = useState([]);
    const isFocused = useIsFocused();



    const displayFarShots = ({ item }) => {
        let moleURI = item.far_shot

        return(
            <TouchableOpacity style = {styles.nearFarShot}
                              onPress     = {() => navigation.navigate("SelectNearShots", { mole: item})}
                              onLongPress = {() => navigation.navigate("Image", { uri: item.far_shot })}
            >

                <Image
                    style = {[styles.image, {borderWidth: 5, opacity: 1, borderColor:  "transparent"}]}
                    source = {{ uri: moleURI}}
                />
                <View style = {styles.moleInfo}>
                    <Text style = {styles.moleName}>Name: {item.name}</Text>
                    <Text style = {styles.moleDetails}>
                        Last updated: {item.lastUpdated}{"\n"}
                        Comment: {item.comments}{"\n"}
                    </Text>
                </View>

            </TouchableOpacity>
        );
    };

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT mole_id, name, comments, far_shot, lastUpdated FROM mole;",
                    [],
                    (_, { rows }) => {
                    setMoles(rows._array)
                });
            }
        );
    }, [isFocused]);



    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Tap on a mole to view the near shots</Text>
            <Text style = {styles.subtitle}>Hold your finger on an image to enlarge it</Text>

            <FlatList
                data = {moles}
                renderItem = {displayFarShots}
                keyExtractor = {item => `${item.mole_id}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 16,

    },
    image: {
        height: 200,
        width: 100
    },
    nearFarShot: {
        flexDirection: "row",
        marginHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderTopColor: "#71A1D1",
        borderBottomColor: "#71A1D1",
        borderTopWidth: 5,
        borderBottomWidth: 5,
    },
    moleInfo: {
        marginLeft: 10,
    },
    moleName: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 10,
    },
    currentlySelected: {
        fontSize: 18,
        fontWeight: "bold",
        color : "#71A1D1",
    },
    moleDetails: {
        color: "black",
        paddingTop: 10,
        paddingBottom: 10,
    },
    continueButtonStyle:{
        backgroundColor: "#71A1D1",
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: "center",
        marginBottom: 5,
        width: "97.5%",

    },
    continueButtonText:{
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontSize: 20,

    },
});

export default SelectMoleScreen;
