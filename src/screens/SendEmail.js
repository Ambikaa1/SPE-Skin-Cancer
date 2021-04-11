import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert, FlatList} from "react-native";
import * as SQLite from "expo-sqlite";
import {useIsFocused} from "@react-navigation/native";
import * as MailComposer from 'expo-mail-composer';

const db = SQLite.openDatabase("28.db");

const SendEmail = ({ navigation, route }) => {
    // const [value1, onChangeText1] = useState('Placeholder');
    // const [value2, onChangeText2] = useState('Additonal comments');
    const isFocused = useIsFocused()

    const selectedImages  = route.params.selectedImages
    const selectedMoles   = route.params.selectedMoles
    let displayString = ""
    for (const farShotID of Object.keys(selectedMoles)){
        displayString = displayString + '\n' +  selectedMoles[farShotID].name + ': ' + selectedImages[farShotID].length
    }

    async function sendEmail(moldID) {
        let email = await MailComposer.composeAsync({
            recipients: ['ye19836@bristol.ac.uk'],
            subject   : 'Mole Photos',
            body      : 'Test Body',
            attachments:selectedImages[moldID]
        })
        alert(email.status)
    }

    async function sendEmails(){
        for(let [moldID, moldObject] of Object.entries(selectedMoles)){
            await sendEmail(moldID)
        }
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
               /* {   text: "OK",
                    onPress: () => Linking.openURL("mailto:?subject=Mole Images&body=${selectedImages}'Produced by SCaRF."),
                    style: "cancel",
                }*/
                 {   text: "OK",
                   onPress: sendEmails(),
                   style: "cancel",
               }

            ],
            { cancelable: false }
        );

    // onPress: () => Linking.openURL("mailto:yourgp'semal@blahblahblah.com?subject=Mole Images&body=Produced by SCaRF."),


    return (
        <ScrollView>
            <Text style={styles.mainBodyText}>Each mole along with your near shots will be added to its OWN email, this is to ensure your
                clinician knows which near-shots belong to which mole.</Text>

            <Text style={styles.mainBodyText}>The name of the mole, date the images were taken and the location
                of the mole on your body will also be attached.</Text>

            <Text style={styles.mainBodyText}>There is a box below each set of images for any additional comments you would like to make,
                or you can do this in the email itself.
            </Text>

{/*
            <FlatList
                data = {selectedMoles}
                renderItem = {showEmailBody}
                keyExtractor = {item => item.key}
            />*/}

            <Text style={styles.mainBodyText}>You have selected the following moles:</Text>
            <Text style={styles.bulletPoints}>{displayString}</Text>


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
        fontWeight: "bold"
    },
});

export default SendEmail;
