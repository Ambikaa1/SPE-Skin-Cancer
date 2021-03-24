import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import DropDownPicker from "react-native-dropdown-picker";

const db = SQLite.openDatabase("20.db");

const RiskFactorsScreen = ({ navigation }) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");

    // useEffect(() => {
    //     db.transaction(
    //         tx => {
    //             tx.executeSql("select * from user;", [], (_, { rows }) => {
    //                     setFirstName(rows._array[0].first_name);
    //                     setLastName(rows._array[0].last_name);
    //                     setDateOfBirth(rows._array[0].date_of_birth);
    //                 }
    //             );
    //         }
    //     );
    // }, []);

    // const addToDatabase = () => {
    //     db.transaction(
    //         tx => {
    //             tx.executeSql(
    //                 `UPDATE user SET first_name = ?, last_name = ?, date_of_birth = ? WHERE user_id = 1;`,
    //                 [firstName, lastName, dateOfBirth],
    //                 null,
    //                 (t, error) => {console.log(error);}
    //             );
    //         }
    //     );
    //     navigation.goBack();
    // };

    return (
    <View style = {styles.container}>
        <Text style = {styles.title}>Judging risk factors for skin cancer </Text>
        <Text style = {styles.title}>Have you ever had a skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: 1},
                {label: 'No', value: 0},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},

            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />
        <Text style = {styles.title}>Has anyone in your family had a skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: 1},
                {label: 'No', value: 0},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />
        <Text style = {styles.title}>Have you ever had a skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: 1},
                {label: 'No', value: 0},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},

            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />
        <Text style = {styles.title}>Has anyone in your family had skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: 1},
                {label: 'No', value: 0},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />
        <Text style = {styles.title}>Have you ever had skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: 1},
                {label: 'No', value: 0},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},

            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />
        <Text style = {styles.title}>Has anyone in your family had skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: 1},
                {label: 'No', value: 0},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />




    {/*    <TouchableOpacity onPress = {() => {*/}
    {/*        db.transaction(*/}
    {/*            tx => {*/}
    {/*                tx.executeSql("select * from user;", [], (_, { rows }) =>*/}
    {/*                    console.log(rows)*/}
    {/*                );*/}
    {/*            }*/}
    {/*        );*/}
    {/*    }}>*/}
    {/*    /!*<Text>VIEW_USER</Text>*!/*/}
    {/*</TouchableOpacity>*/}

        {/*<TouchableOpacity style = {styles.doneBox} onPress = {addToDatabase}>*/}
        {/*    <Text style = {styles.doneText}>Done</Text>*/}
        {/*</TouchableOpacity>*/}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
    },
    info: {
        fontSize: 15,
        paddingBottom: 5,
    },
    title:{
        fontSize: 20,
        paddingTop: 5,
    },
    input: {
        backgroundColor: "#E2E2E2",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 5,
        paddingLeft: 10,
        fontSize: 20,
    },
    doneBox: {
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },
    dropDownContainer: {
        height: 40,
        marginTop: 5,
        marginRight: 10,
    },
    dropDownLabel: {
        fontSize: 20,
    },
});

export default RiskFactorsScreen;