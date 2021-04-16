import React, { useEffect, useState, useRef } from "react";
import { View, SafeAreaView, Text, StyleSheet, Linking, TouchableOpacity, Image, Dimensions, Platform, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import * as WebBrowser from "expo-web-browser";
import * as SQLite from "expo-sqlite";

import MoleCountdown from "../components/MoleCountdown";


const db = SQLite.openDatabase("28.db");

const Home = ({ navigation }) => {
    const [moles, setMoles] = useState([])
    const isFocused = useIsFocused();

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT name, nextUpdate, mole_id FROM mole ORDER BY nextUpdate;",
                    [],
                    (_, { rows }) => setMoles(rows._array));
            }
        );
    }, [isFocused]);

    return (
        <SafeAreaView style = {styles.container}>
            {(moles.length != 0)
                ?
                <>
                    <Text style = {styles.countdownText}>Number of days until you need to take another picture of your mole</Text>
                    <FlatList
                        data = {moles}
                        renderItem = {MoleCountdown}
                        keyExtractor = {item => `${item.mole_id}`}
                        style = {styles.countdowns}
                    />
                </>
                :
                <Text style = {styles.noMoles}>
                    You haven't photographed any moles yet.
                    Click the camera icon at the bottom of the screen to begin photographing your moles.
                </Text>
            }

            {/*<TouchableOpacity style={{marginHorizontal: '2.5%', alignItems:'center', backgroundColor: "#71A1D1", borderRadius: 10}} onPress = {() => navigation.navigate("WhySCQOLITScreen")}>*/}
            {/*    <Text style={{fontSize: 20, paddingVertical: 5, color:'white'}}>Press to complete SCQOLIT survey</Text>*/}
            {/*</TouchableOpacity>*/}

            <View style = {styles.logosContainer}>
                <TouchableOpacity onPress = {async () => await WebBrowser.openBrowserAsync(
                    "https://www.skincancerresearch.org/what-we-do",
                    {
                        dismissButtonStyle: "close"
                    }
                )}>
                    <Text style = {styles.textAboveLogo}>About SCaRF</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/scarf_logo.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {async () => await WebBrowser.openBrowserAsync(
                    "https://www.justgiving.com/scrf/donate/?utm_campaign=donate_purple&utm_content=scrf&utm_medium=buttons&utm_source=website_cid52056",
                    {
                        dismissButtonStyle: "close"
                    }
                )}>
                    <Text style = {styles.textAboveLogo}>Donate to SCaRF</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/justgiving_logo.png')} />
                </TouchableOpacity>
            </View>

            {/*<TouchableOpacity onPress = {() => {*/}
            {/*    db.transaction(*/}
            {/*        tx => {*/}
            {/*            tx.executeSql("select * from user;", [], (_, { rows }) =>*/}
            {/*                console.log(rows)*/}
            {/*            );*/}
            {/*        }*/}
            {/*    );*/}
            {/*}}>*/}
            {/*    <Text>VIEW_USER</Text>*/}
            {/*</TouchableOpacity>*/}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdownText: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "bold",
        marginRight: 10,
    },
    countdowns: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    noMoles: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 17,
        flex: 1,
    },
    logosContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        paddingVertical: 10,
    },
    scarfLogo: {
        width: Dimensions.get("window").width / 2 - 15,
        height: Dimensions.get("window").width / 2 - 15,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    textAboveLogo: {
        fontSize: 17,
        marginHorizontal: 5,
        marginBottom: 5,
        fontWeight: "bold",
        // textAlign: "center"
        // flexWrap: 'wrap',
        color: "#3366ff",
        // paddingRight: 45,
        // textDecorationLine: 'underline'
    }
});

export default Home;
