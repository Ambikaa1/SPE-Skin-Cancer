import React, { useState, useEffect } from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as SQLite from "expo-sqlite";

import MoleListItem from "../components/MoleListItem"

const db = SQLite.openDatabase("28.db");

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style = {styles.container}>
                <Text style = {styles.questionTop}>Have you logged this mole on the app before?</Text>
                <DropDownPicker
                    items = {[
                        {label: 'Yes', value: 0},
                        {label: 'No', value: 1},
                    ]}
                    containerStyle = {styles.dropDownContainer}
                    labelStyle = {styles.dropDownLabel}
                    placeholder = "Select 'Yes' or 'No'"
                    onChangeItem = {item => setChoice(item.value)}
                />
                {(moleChoice == 1) && 
                    <>
                        <Text style = {styles.question}>Name this mole:</Text>
                        <TextInput
                            value = {name}
                            onChangeText = {value => setName(value)}
                            placeholder = "e.g. Left cheek 1"
                            style = {styles.input}
                        />
                        <Text style = {styles.question}>Any other comments:</Text>
                        <TextInput
                            value = {comments}
                            onChangeText = {value => setComments(value)}
                            placeholder = "e.g. located 7cm away from nose"
                            style = {styles.input}
                        />
                        <TouchableOpacity style = {styles.doneBox} onPress = {() => navigation.navigate("HelpFarShot", { name: name, comments: comments, bodyPart: route.params.bodyPart })}>
                            <Text style = {styles.doneText}>Confirm</Text>
                        </TouchableOpacity>
                    </>
                }
                {(moleChoice == 0) &&
                    <>
                        {(moles.length == 0)
                            ?
                                <>
                                    <Text style = {styles.question}>It appears you haven't logged any moles in this region of the body yet. Select 'No' above to log your first mole in this region.</Text>
                                </>
                            :
                                <>
                                    <Text style = {styles.question}>Select a mole below to photograph</Text>
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
                    </>
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    dropDownContainer: {
        height: 40,
        marginTop: 5,
        marginHorizontal: 10,
    },
    dropDownLabel: {
        fontSize: 17,
    },
    questionTop: {
        fontSize: 17,
        marginHorizontal: 10
    },
    question: {
        marginTop: 20,
        fontSize: 17,
        marginHorizontal: 10
    },
    input: {
        backgroundColor: "#E2E2E2",
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 7.5,
        paddingLeft: 10,
        fontSize: 17,
        marginHorizontal: 10
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "95%",
        bottom: 10,
        marginHorizontal: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default MoleTypeScreen;
