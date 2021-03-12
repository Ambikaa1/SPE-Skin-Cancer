import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("17.db");

const DiaryScreen = ({ navigation }) => {
    const [moles, setMoles] = useState([]);
    const isFocused = useIsFocused();

    const displayImages = ({ item }) => {
        return(
            <TouchableOpacity style = {styles.nearFarShot} onPress = {() => navigation.navigate("MoleInfo", { id: item.mole_id })}>
                <Image 
                    style = {styles.image}
                    source = {{ uri: item.far_shot }} 
                />
                <View style = {styles.moleInfo}>
                    <Text style = {styles.moleName}>{item.name}</Text>
                    <Text>{item.comments}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT mole_id, name, comments, far_shot FROM mole;", [], (_, { rows }) => setMoles(rows._array));
            }
        );
    }, [isFocused]);

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Select a mole to view near shots</Text>
            <FlatList 
                data = {moles}
                renderItem = {displayImages}
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
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 20,
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
        borderTopColor: "black",
        borderBottomColor: "black",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },
    moleInfo: {
        marginLeft: 10,
    },
    moleName: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default DiaryScreen;
