
import React from "react";
import { SafeAreaView, Text, StyleSheet,TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const Welcome = ({ setWelcomeSeen }) => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.titleText}>Welcome.</Text>
            <Text style = {styles.mainText}>
                This App is designed to allow you to monitor your skin moles and similar lesions.
                Lesions are areas of abnormal change, for example a wound, an ulcer or a skin tumour.
            </Text>
            <Text style = {styles.mainText}>
                It was developed through a collaboration between The Skin Cancer Research Fund (SCaRF)
                and the Department of Computer Science at the University of Bristol.
            </Text>

            <TouchableOpacity style = {styles.doneBox} onPress = {() => {db.transaction(
                tx => {
                    tx.executeSql(
                        "UPDATE user SET welcome_seen = 1 WHERE user_id = 1;",
                        [],
                        null,
                        (t, error) => {console.log(error);}
                    );
                });
                setWelcomeSeen(1);
                }
            }>
                <Text style = {styles.doneText}>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleText: {
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 30,
        fontWeight: "bold",
    },
    mainText: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 17,
    },
    doneBox: {
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "95%",
        bottom: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },
});

export default Welcome;

