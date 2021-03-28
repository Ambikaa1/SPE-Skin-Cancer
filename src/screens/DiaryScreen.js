import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import DisplayImages from "../components/MoleList"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("22.db");

const DiaryScreen = ({ navigation }) => {
    const [moles, setMoles] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT mole_id, name, comments, far_shot, lastUpdated FROM mole;",
                    [],
                    (_, { rows }) => setMoles(rows._array));
            }
        );
    }, [isFocused]);

    return (
        <>
            <Text style = {styles.title}>Select a mole to view near shots</Text>
            <FlatList
                data = {moles}
                renderItem = {({item}) => (
                    <TouchableOpacity style = {styles.nearFarShot} onPress = {() => navigation.navigate("MoleInfo", { id: item.mole_id })}>
                        <DisplayImages uri = {item.far_shot} name = {item.name} comments = {item.comments} lastUpdated = {item.lastUpdated} />
                    </TouchableOpacity>
                )}
                keyExtractor = {item => `${item.mole_id}`}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: "bold"
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
    }
});

export default DiaryScreen;
