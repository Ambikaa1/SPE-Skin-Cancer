import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import DropdownMenu from 'react-native-dropdown-menu';
import * as SQLite from "expo-sqlite";
import DropDownPicker from "react-native-dropdown-picker";
// import {SafeAreaView} from "react-native-web";

const db = SQLite.openDatabase("21.db");

const RiskFactorsScreen = ({ navigation }) => {
    const [history, setHistory] = useState(null);
    const [familyHistory, setFamilyHistory] = useState(null);
    const [sunburn, setSunburn] = useState(null);
    const [sunbed, setSunbed] = useState(null);
    const [workOutside, setWorkOutside] = useState(null);
    const [immunosuppressed, setImmunosuppressed] = useState(null);
    const [moleNo, setMoleNo] = useState(null);
    const [chemicalExposure, setChemicalExposure] = useState(null);
    const [radiationExposure, setRadiationExposure] = useState(null);

    // history = ?, family_history = ?, sunburn = ?, sunbed = ?, work_outside = ?, immunosuppressed = ?, number_of_moles = ?, chemical_exposure = ?, radiation_exposure = ?
    useEffect(() => { //this one selects the values???
        db.transaction(
            tx => {
                tx.executeSql("select * from user;", [], (_, { rows }) => {
                    setHistory(rows._array[0].history);
                    setFamilyHistory(rows._array[0].family_history);
                    setSunburn(rows._array[0].sunburn);
                    setSunbed(rows._array[0].sunbed);
                    setWorkOutside(rows._array[0].work_outside);
                    setImmunosuppressed(rows._array[0].immunosuppressed);
                    setMoleNo(rows._array[0].number_of_moles);
                    setChemicalExposure(rows._array[0].chemical_exposure);
                    setRadiationExposure(rows._array[0].radiation_exposure);
                    }
                );
            }
        );
    }, []);

    const addToDatabase = () => { //updates the values
        db.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE user SET history = ?, family_history = ?, sunburn = ?, sunbed = ?, work_outside = ?, immunosuppressed = ?, number_of_moles = ?, chemical_exposure = ?, radiation_exposure = ? WHERE user_id = 1;`,
                    [history, familyHistory, sunburn, sunbed, workOutside, immunosuppressed, moleNo, chemicalExposure, radiationExposure],
                    null,
                    (t, error) => {console.log(error);}
                );
            }
        );
        navigation.navigate("HomeScreen")
    };

    return (
    <ScrollView style = {styles.container}>
        <Text style = {styles.title}>Have you got any risk factors for skin cancer? On the next few questions, please indicate ‘yes’ or ‘no’.</Text>
        <Text style = {styles.title}>This information will only be stored on your phone unless you opt to send it with your images to a clinician. </Text>
        <SafeAreaView>
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
                onChangeItem = {item => setHistory(item.value)}
            />
        </SafeAreaView>
        <SafeAreaView>
            <Text style = {styles.questions}>Has anyone in your family had a skin cancer?</Text>
            <DropDownPicker
                items = {[
                    {label: 'Yes', value: "yes"},
                    {label: 'No', value: "no"},
                    {label: 'Unsure', value: "unsure"},
                    {label: 'Rather not say', value: "not say"},
                ]}
                containerStyle = {styles.dropDownContainer}
                labelStyle = {styles.dropDownLabel}
                onChangeItem = {item => setFamilyHistory(item.value)}
            />
        </SafeAreaView>
        <View>
            <Text style = {styles.questions}>Have you ever had sunburn?</Text>
            <DropDownPicker
                items = {[
                    {label: 'Yes', value: "yes"},
                    {label: 'No', value: "no"},
                    {label: 'Unsure', value: "unsure"},
                    {label: 'Rather not say', value: "not say"},

                ]}
                containerStyle = {styles.dropDownContainer}
                labelStyle = {styles.dropDownLabel}
                onChangeItem = {item => setSunburn(item.value)}
            />
        </View>
        <View>
            <Text style = {styles.questions}>Have you ever used a sun bed?</Text>
            <DropDownPicker
                items = {[
                    {label: 'Yes', value: "yes"},
                    {label: 'No', value: "no"},
                    {label: 'Unsure', value: "unsure"},
                    {label: 'Rather not say', value: "not say"},
                ]}
                containerStyle = {styles.dropDownContainer}
                labelStyle = {styles.dropDownLabel}
                onChangeItem = {item => setSunbed(item.value)}
            />
        </View>
        <Text style = {styles.questions}>Have you ever had a job that involved working outside?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            onChangeItem = {item => setWorkOutside(item.value)}
        />
        <Text style = {styles.questions}>Are you immunosuppressed?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            onChangeItem = {item => setImmunosuppressed(item.value)}
        />
        <Text style = {styles.questions}>Have you got a large number of moles on your skin surface?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            onChangeItem = {item => setMoleNo(item.value)}
        />
        <Text style = {styles.questions}>Have you ever been exposed to any chemicals during your occupation?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            onChangeItem = {item => setChemicalExposure(item.value)}
        />
        <Text style = {styles.questions}>Have you ever been exposed to any radiation during your occupation?</Text>
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            onChangeItem = {item => setRadiationExposure(item.value)}
        />
        <Text></Text>
        <Text></Text>
        <Text style = {styles.title}>Thank you, now it's time to assess your skin. </Text>


    {/*    <TouchableOpacity onPress = {() => {*/}
    {/*        db.transaction(*/}
    {/*            tx => {*/}
    {/*                tx.execonsolcuteSql("select * from user;", [], (_, { rows }) =>*/}
    {/*                    e.log(rows)*/}
    {/*                );*/}
    {/*            }*/}
    {/*        );*/}
    {/*    }}>*/}
    {/*    /!*<Text>VIEW_USER</Text>*!/*/}
    {/*</TouchableOpacity>*/}

        <TouchableOpacity style = {styles.doneBox} onPress = {addToDatabase}>
            <Text style = {styles.doneText}>Done</Text>
        </TouchableOpacity>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
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