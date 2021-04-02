import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("22.db");

const SelectMoleScreen = ({ navigation }) => {
    const [molesDictionary, setMolesDictionary] = useState({})
    const [moles, setMoles] = useState([]);
    const isFocused = useIsFocused();

    const updateSelection = (moleID, newSelection) => {
        setMolesDictionary({...molesDictionary, [moleID] : newSelection})
        console.log("-------------------------------------")
        console.log(molesDictionary)
        console.log("-------------------------------------")
    }


    const displayFarShots = ({ item }) => {
        let moleID  = item.mole_id
        let moleURI = item.far_shot
        let numberSelected = molesDictionary[moleID] === undefined ? 0 : molesDictionary[moleID].length
        return(
            <TouchableOpacity style = {styles.nearFarShot} onPress = {() =>
                navigation.navigate("SelectNearShots",
                    { id: moleID, currentSelection: molesDictionary[moleID],updateSelection : {updateSelection}}
                    )}>
                <Image
                    style = {[styles.image, {borderWidth: 5}, numberSelected === 0 ?  {opacity: 1, borderColor:  "transparent"} : {opacity : 0.5, borderColor:  "#c708ff"}]}
                    source = {{ uri: moleURI}}
                />
                <View style = {styles.moleInfo}>
                    <Text style = {styles.moleName}>Name: {item.name}</Text>
                    <Text style = {styles.moleDetails}>
                        Last updated: {item.lastUpdated}{"\n"}
                        Comment: {item.comments}{"\n"}
                        Currently Selected: {numberSelected}
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
                    (_, { rows }) => setMoles(rows._array));
            }
        );
        //ON INITIALISATION, POPULATE THE DICTIONARY WITH EACH MOLES ID ALONG WITH AN EMPTY ARRAY
        if (Object.keys(molesDictionary).length === 0){
            for (const mole of moles){
                molesDictionary[mole.mole_id] = []
            }
        }
    }, [isFocused]);




    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Select a mole to view near shots:</Text>
            <FlatList
                data = {moles}
                extraData = {molesDictionary}
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
        paddingBottom: 10,
    },
    moleDetails: {
        paddingBottom: 10,
    },
});

export default SelectMoleScreen;
