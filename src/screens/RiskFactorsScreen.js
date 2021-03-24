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
    <ScrollView style = {styles.container}>
        <Text style = {styles.title}>Have you got any risk factors for skin cancer? On the next few questions, please indicate ‘yes’ or ‘no’.</Text>
        <Text style = {styles.title}>This information will only be stored on your phone unless you opt to send it with your images to a clinician. </Text>

        <Text style = {styles.questions}>Have you ever had a skin cancer?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            // onChangeItem = {item => setChoice(item.value)}
        />
        <Text style = {styles.questions}>Has anyone in your family had a skin cancer?</Text>
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
        <Text style = {styles.questions}>Have you ever had sunburn?</Text>
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
        <Text style = {styles.questions}>Have you ever used a sun bed?</Text>
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
        <Text style = {styles.questions}>Have you ever had a job that involved working outside?</Text>
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
        <Text style = {styles.questions}>Are you immunosuppressed?</Text>
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
        <Text style = {styles.questions}>Have you got a large number of moles on your skin surface?</Text>
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
        <Text style = {styles.questions}>Have you ever been exposed to any chemicals during your occupation?</Text>
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
        <Text style = {styles.questions}>Have you ever been exposed to any radiation during your occupation?</Text>
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
        <Text></Text>
        <Text></Text>
        <Text style = {styles.title}>Thank you, now it's time to assess your skin. </Text>




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

        <TouchableOpacity style = {styles.doneBox} onPress={() => navigation.navigate("HomeScreen")}>
            <Text style = {styles.doneText}>Done</Text>
        </TouchableOpacity>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
    },
    questions:{
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 7,
        paddingRight: 7,
    },
    title:{
        fontSize: 15,
        paddingTop: 5,
        fontWeight: "bold",
    },
    doneBox: {
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },
    dropDownContainer: {
        height: 35,
        marginTop: 5,
        marginRight: 10,
    },
    dropDownLabel: {
        fontSize: 15,
    },
});

export default RiskFactorsScreen;