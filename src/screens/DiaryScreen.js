import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import MoleListItem from "../components/MoleListItem"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("30.db");

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
        <View style = {styles.container}>
            {moles.length == 0
                ?
                    <>
                        <Text style = {styles.title}>You haven't photographed any moles yet. Click the camera icon at the bottom of the screen to begin photographing your moles.</Text>
                    </>
                :
                    <>
                        <Text style = {styles.title}>Tap on a far-shot image to view the near shots</Text>
                        <FlatList
                            data = {moles}
                            renderItem = {({item}) => (
                                <TouchableOpacity onPress = {() => navigation.navigate("MoleInfo", { id: item.mole_id })}>
                                    <MoleListItem uri = {item.far_shot} name = {item.name} comments = {item.comments} lastUpdated = {item.lastUpdated} />
                                </TouchableOpacity>
                            )}
                            keyExtractor = {item => `${item.mole_id}`}
                        />
                    </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 10,
        fontSize: 17,
        // fontWeight: "bold"
    }
});

export default DiaryScreen;
