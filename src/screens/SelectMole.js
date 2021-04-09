import React, {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useIsFocused} from "@react-navigation/native"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const SelectMoleScreen = ({navigation }) => {
    const [molesDictionary, setMolesDictionary] = useState({})
    const [moleIDToObject, setMoleIDToObject]   = useState({})
    const [moles, setMoles] = useState([]);
    const [totalCount, setTotalCount] = useState(0)
    const isFocused = useIsFocused();

    const updateSelection = (moleID, newSelection) => {
        setMolesDictionary({...molesDictionary, [moleID]: newSelection})
    }

    const clearSelection = () => {
        setMolesDictionary({})
        setTotalCount(0) //Required to refresh the list
    }


    const displayFarShots = ({ item }) => {
        let moleID  = item.mole_id
        let moleURI = item.far_shot


        let numberSelected = molesDictionary[moleID] === undefined ? 0 : molesDictionary[moleID].length
        return(
            <TouchableOpacity style = {styles.nearFarShot}
                              onPress     = {() => navigation.navigate("SelectNearShots", { id: moleID, currentSelection: molesDictionary[moleID],updateSelection : {updateSelection}})}
                              onLongPress = {() => navigation.navigate("Image", { uri: item.far_shot })}
            >

                <Image
                    style = {[styles.image, {borderWidth: 5}, numberSelected === 0 ?  {opacity: 1, borderColor:  "transparent"} : {opacity : 0.5, borderColor:  "#c708ff"}]}
                    source = {{ uri: moleURI}}
                />
                <View style = {styles.moleInfo}>
                    <Text style = {styles.moleName}>Name: {item.name}</Text>
                    <Text style = {styles.moleDetails}>
                        Last updated: {item.lastUpdated}{"\n"}
                        Comment: {item.comments}{"\n"}
                    </Text>
                    <Text style = {styles.currentlySelected}>Currently Selected: {numberSelected}</Text>

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
        let newCount = 0
        for (const [, entry] of Object.entries(molesDictionary)){
            newCount += entry.length
        }
        setTotalCount(newCount)


    }, [isFocused]);

    const continueToSend = () => {
        const selectedMoles = {}
        for (const [key, entry] of Object.entries(molesDictionary)){
            if (entry.length === 0){
                delete molesDictionary[key]
            }else{
                for (const mole of moles){
                    if (mole.mole_id.toString() === key){
                        selectedMoles[key] = mole
                    }
                }
            }
        }
        navigation.navigate("SendEmail", {selectedImages: molesDictionary, selectedMoles: selectedMoles})
    }




    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Select a mole to view near shots</Text>
            <Text style = {styles.subtitle}>Hold your finger on an image to enlarge it</Text>

            <FlatList
                data = {moles}
                extraData = {totalCount}
                renderItem = {displayFarShots}
                keyExtractor = {item => `${item.mole_id}`}
            />
            <TouchableOpacity

                style={[styles.continueButtonStyle, totalCount === 0 ?{backgroundColor: "#d3d3d3"} : null]}
                onPress ={totalCount === 0 ? null :() =>  {
                   continueToSend()
                }}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.continueButtonStyle, totalCount === 0 ?{backgroundColor: "#d3d3d3"} : {backgroundColor: "red"}]}
                onPress ={totalCount === 0 ? null :() =>  clearSelection()}
            >
                <Text style={styles.continueButtonText}>Clear Selection</Text>

            </TouchableOpacity>

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
