import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("22.db");

const SendScreen = ({ navigation, route }) => {
    // const [value1, onChangeText1] = useState('Placeholder');
    // const [value2, onChangeText2] = useState('Additonal comments');
    const [selectedImages, setSelectedImages] = useState({});

    //THIS IS USE TO LINK THE FAR SHOT ID'S RETRIEVED FROM THE SELECTION TO THE FAR SHOT OBJECT
    const [selectedMoles , setSelectedMoles]  = useState({});

    const setSelection = (selection) => {
        setSelectedImages(selection)

        //Finds the new selected moles
        let newSelectedMoles = {}
        for (const [farShotID, nearShotURIs] of Object.entries(selection)){
            if (!(nearShotURIs.length === undefined || nearShotURIs.length === 0)){
                db.transaction(
                    tx => {
                        tx.executeSql(
                            "SELECT mole_id, name, comments, far_shot, lastUpdated FROM mole WHERE mole_id = ?;",
                            [farShotID],
                            (_, { rows }) => newSelectedMoles[farShotID] = rows._array
                        );
                    }
                );
            }
        }
        setSelectedMoles(newSelectedMoles)
        console.log("----------------------------------------------------------------")
        console.log("SELECTED MOLES:", selectedMoles)
        console.log("----------------------------------------------------------------")

    }


    const selected = () => {
        navigation.navigate("SelectMole", {setSelection: {setSelection}, currentSelection: selectedImages});
    }


    const Notice = () =>
        Alert.alert(
            "Notice",
            "The email to your GP will not be protected by any extra encryption and your email app is responsible for anything bad happening, not the amazing people that kindly developed this app",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),

                },
                {   text: "OK",
                    onPress: () => Linking.openURL("mailto:?subject=Mole Images&body=\n\nProduced by SCaRF."),
                    style: "cancel",
                }
            ],
            { cancelable: false }
        );

    // onPress: () => Linking.openURL("mailto:yourgp'semal@blahblahblah.com?subject=Mole Images&body=Produced by SCaRF."),
    return (
            <ScrollView>
                <Text style={styles.mainBodyText}>Press the button below to select the images you want to attach to
                    an email.</Text>
                <TouchableOpacity
                    style={styles.doneBox}
                    onPress = {() => selected()}
                >
                    <Text style={styles.doneText}>Select images</Text>
                </TouchableOpacity>

                <Text style={styles.mainBodyText}>The name of the mole(s), date the images were taken and the location
                of the mole on your body will also be attached.</Text>

                <Text style={styles.mainBodyText}>If you would like to add any additional comments please do so in the
                box below or in the email itself.</Text>

                <View style={styles.commentBox}>
                    <TextInput
                        style={styles.textInputStyle}
                    />
                </View>

                <Text style={styles.mainBodyText}>Moles selected:</Text>
                <Text style={styles.bulletPoints}>{'\u2022'}*Mole name 1*</Text>
                <Text style={styles.bulletPoints}>{'\u2022'}*Mole name 2*</Text>


                <Text style={styles.mainBodyText}>Press the button below to open up your default email application.
                All the information you have selected will be attached. Make sure that you check the email address you are
                    sending the images to is correct.</Text>

                <TouchableOpacity
                    style={styles.doneBox}
                    onPress={() => Notice()}
                >
                    <Text style={styles.doneText}>SEND</Text>
                </TouchableOpacity>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 50,
        flex: 1,
    },
    topButtonView:{
        marginLeft: 55,
        marginRight: 55,
        marginBottom:10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
        alignSelf: 'center',
    },
    topButtonStyle:{
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        alignItems: 'center',
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignSelf: "center",
        borderRadius: 10,
        width: "97.5%",
        marginTop: 25,
        bottom: 10
    },
    bottomButtonView:{
        marginTop: 35,
        marginLeft: 50,
        marginRight: 50,
    },
    textInputStyle:{
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    commentBox:{
        zIndex: 1,
        marginLeft: 30,
        marginRight: 30,

    },
    mainBodyText: {
        fontSize: 17,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    bulletPoints: {
        fontSize: 17,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 10,
    },
});

export default SendScreen;
