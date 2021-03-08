import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("17.db");

const MoleTypeScreen = ({navigation}) => {
    const [moleChoice, setChoice] = useState(null);
    const [name, setName] = useState(null);
    const [comments, setComments] = useState(null);
    const [moles, setMoles] = useState([]);

    const displayMoles = ({ item }) => {
        return(
            <TouchableOpacity onPress = {() => navigation.navigate("HelpNearShot", { id: item.mole_id })}>
                <Text style = {styles.moleListItem}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT mole_id, name FROM mole;", [], (_, { rows }) => setMoles(rows._array));
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
                </>
            }
            {(moleChoice == 0) && 
                <>
                <Text style = {styles.question}>Select a mole below to photograph:</Text>
                    <FlatList 
                        data = {moles}
                        renderItem = {displayMoles}
                        keyExtractor = {item => `${item.mole_id}`}
                        style = {styles.moleList}
                    />
                </>
            }
            {(moleChoice != null) &&
                <TouchableOpacity style = {styles.doneBox} onPress={() =>
                    {moleChoice
                        ? navigation.navigate("HelpFarShot", { name: name, comments: comments })
                        : navigation.navigate("HelpNearShot", { name: name, comments: comments })
                    }}
                >
                    <Text style = {styles.doneText}>Confirm</Text>
                </TouchableOpacity>
            }
                
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10
    },
    dropDownContainer: {
        height: 40,
        marginTop: 5,
        marginRight: 10,
        fontSize: 20,
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
        marginRight: 10,
        marginTop: 10,
        marginBottom: 7.5,
        paddingLeft: 10,
        fontSize: 20,
    },
    moleList: {
        marginBottom: 80,
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
        width: "97.5%",
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
