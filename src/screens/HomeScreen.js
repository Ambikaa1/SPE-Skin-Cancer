import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as SQLite from "expo-sqlite";

import Welcome from "../components/Welcome";
import Home from "../components/Home";

const db = SQLite.openDatabase("28.db");

const HomeScreen = ({ navigation }) => {
    const [welcomeSeen, setWelcomeSeen] = useState(1)
    
    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT welcome_seen FROM user",
                    [],
                    (_, { rows }) => setWelcomeSeen(rows._array[0].welcome_seen));
            }
        );
    });

    return (
        <View style = {styles.container}>
            {welcomeSeen
                ? <Home />
                : <Welcome setWelcomeSeen = {setWelcomeSeen} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;