import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as SQLite from "expo-sqlite";

import MoleListItem from "../components/MoleListItem"

const db = SQLite.openDatabase("24.db");

const MoleTypeScreen = ({navigation, route}) => {
    const [moleChoice, setChoice] = useState(null);
    const [name, setName] = useState(null);
    const [comments, setComments] = useState(null);
    const [moles, setMoles] = useState([]);

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT mole_id, name, lastUpdated, far_shot, comments FROM mole WHERE sub_body_part = ?;", [route.params.bodyPart], (_, { rows }) => setMoles(rows._array));
            }
        );
    }, []);

    return (
        <View style = {styles.container}>
            <Text style = {styles.questionTop}>Is this a new mole?</Text>
            <DropDownPicker
                items = {[
                    {label: 'Yes', value: 1},
                    {label: 'No', value: 0},
                ]}
                containerStyle = {styles.dropDownContainer}
                labelStyle = {styles.dropDownLabel}
                onChangeItem = {item => setChoice(item.value)}
            />
            {(moleChoice == 1) && 
                <>
                    <Text style = {styles.question}>Mole name:</Text>
                    <TextInput
                        value = {name}
                        onChangeText = {value => setName(value)}
                        placeholder = "Mole name"
                        style = {styles.input}
                    />
                    <Text style = {styles.question}>Mole comments:</Text>
                    <TextInput
                        value = {comments}
                        onChangeText = {value => setComments(value)}
                        placeholder = "Mole comments"
                        style = {styles.input}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => navigation.navigate("HelpFarShot", { name: name, comments: comments, bodyPart: route.params.bodyPart })}>
                        <Text style = {styles.doneText}>Confirm</Text>
                    </TouchableOpacity>
                </>
            }
            {(moleChoice == 0) && 
                <>
                    <Text style = {styles.question}>Select a mole below to photograph:</Text>
                    <FlatList 
                        data = {moles}
                        renderItem = {({item}) => (
                            <TouchableOpacity onPress = {() => navigation.navigate("HelpNearShot", { id: item.mole_id })}>
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
        marginHorizontal: 10,
        marginTop: 10
    },
    dropDownContainer: {
        height: 40,
        marginTop: 5,
    },
    dropDownLabel: {
        fontSize: 20,
    },
    questionTop: {
        fontSize: 20
    },
    question: {
        marginTop: 20,
        fontSize: 20
    },
    input: {
        backgroundColor: "#E2E2E2",
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 7.5,
        paddingLeft: 10,
        fontSize: 20,
    },
    moleListItem: {
        fontSize: 20,
        marginTop: 5
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "100%",
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default MoleTypeScreen;
