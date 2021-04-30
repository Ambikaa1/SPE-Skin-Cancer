import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert, Image, Pressable } from "react-native";
import * as MailComposer from 'expo-mail-composer';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("31.db");

const SendEmail = ({ navigation, route }) => {
    const selectedFarShot    =  route.params.selectedFarShot
    const selectedNearShots  =  route.params.selectedNearShots
    const [comment, setComment] = useState("")
    const [showReturn, setShowReturn] = useState(false)
    const [prevScore, setPrevScore] = useState(-1)

   /* console.log("Selected Mole   =", selectedFarShot)
    console.log("Selected Images =", selectedNearShots)*/

    //displayString is the data on the selected moles to be displayed on this screen
    let displayString  = selectedFarShot.name + ': ' + selectedNearShots.length
    console.log(selectedFarShot)

    //email body is the actual text to be inputted to the email
    let emailBody      = "Mole name:\n" + selectedFarShot.name + '\n\n' + "Location:\n" + selectedFarShot.sub_body_part + '\n\n' + "Original Comment:\n" + selectedFarShot.comments

    let attachedImages  = [selectedFarShot.far_shot]
    for (const nearShot of selectedNearShots){
        attachedImages = [...attachedImages, nearShot.near_shot]
    }

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("select * from survey;", [], (_, { rows }) => {
                        setPrevScore(rows._array[0].score)
                    }
                );
            }
        );
    }, []);

    const sendEmail = async () => {
        if (comment !== "") {
            emailBody = emailBody + '\n\nAdditional Comment:\n ' + comment
        }

        if (prevScore !== -1) {
            emailBody = emailBody + '\n\nSCQOLIT Score:\n ' + prevScore
        }

        let email = await MailComposer.composeAsync({
            recipients:  [],
            subject   :  'CONFIDENTIAL: Mole Photos',
            body      :  emailBody,
            attachments: attachedImages,
        })

        if (email.status === 'sent'){
            setShowReturn(true)
        } else {
            alert("Error sending email")
        }
    }

  /*  async function makeAttachment(){
        let sendFolder = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "emailAttachments");

        //We want to only send these photos, so if the folder existed and contained photos, delete it and make a new one
        if (!Boolean(sendFolder.exists)) {
            await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "emailAttachments/");
        }else{
            await FileSystem.deleteAsync(FileSystem.documentDirectory + "emailAttachments/")
            await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "emailAttachments/");
        }

        await FileSystem.copyAsync({
            from : selectedFarShot.far_shot,
            to   : FileSystem.documentDirectory + "emailAttachments/FarShot",
        })

        let i = 0
        for (const nearShot of selectedNearShots){
            await FileSystem.copyAsync({
                from : selectedFarShot.far_shot,
                to   : FileSystem.documentDirectory + "emailAttachments/" + "near-shot" + i + nearShot.date ,
            })
            i++
        }

    }*/

    const Notice = () =>{
        Alert.alert(
            "Notice",
            "The email to your GP will not be protected by any extra encryption and your email app is responsible for anything bad happening, not the amazing people that kindly developed this app",
            [
                {
                    text: "Cancel",
                    onPress: () => navigation.navigate("Send")
                    ,

                },
                 {   text: "OK",
                   onPress: sendEmail(),
                   style: "cancel",
               }
            ],
            { cancelable: false }
        );
    }

    return (
        <ScrollView>
            <Text style={styles.mainBodyText}>Here you can send your selected moles. </Text>

            <Text style={styles.mainBodyText}>There is a box below the set of images for any additional comments you would like to make,
                or you can do this in the email itself.
            </Text>

            <Text style = {styles.title}>Far shot</Text>
            <View style = {styles.flatListRow}>
                <Pressable
                    style = {styles.image}
                    onLongPress = {() => navigation.navigate("Image", { uri: selectedFarShot.far_shot })}
                >
                    <Image
                        key   = {selectedNearShots.length}
                        style = {[styles.image, {borderWidth: 5, borderColor:  "transparent"}]}
                        source= {{ uri: selectedFarShot.far_shot}}
                    />
                </Pressable>

                <View style = {styles.moleDetails}>
                    <Text style = {styles.dateText}>
                        Name: {"\n"}{selectedFarShot.name}{"\n"}{"\n"}
                        Last updated: {"\n"}{selectedFarShot.lastUpdated}{"\n"}{"\n"}
                        Comment: {"\n"}{selectedFarShot.comments}
                    </Text>
                </View>
            </View>

            <Text style = {styles.title}>Near Shots</Text>
            {selectedNearShots.map((nearShot, index) => {
                return  <View style = {styles.flatListRow}>
                    <Pressable
                        style = {styles.image}
                        onLongPress = {() => navigation.navigate("Image", { uri: nearShot.near_shot })}
                    >
                        <Image
                            key   = {index}
                            style = {[styles.image, {borderWidth: 5, borderColor:  "transparent"}]}
                            source= {{ uri: nearShot.near_shot}}
                        />
                    </Pressable>

                    <View style = {styles.moleDetails}>
                        <Text style = {styles.dateText}>
                            Date Taken: {nearShot.date}
                        </Text>
                    </View>
                </View>;
            })}

            <Text style={styles.mainBodyText}>Any comment you would like to make, please enter below:</Text>

            <TextInput
                multiline
                value = {comment}
                onChangeText = {value => setComment(value)}
                placeholder = ""
                style = {styles.input}
            />

            <Text style={styles.mainBodyText}>Press the button below to open up your default email application.
                All the information you have selected will be attached. Make sure that you check the email address you are
                sending the images to is correct.</Text>

            <TouchableOpacity
                style={styles.doneBox}
                onPress={() => Notice()}
            >
                <Text style={styles.doneText}>Send</Text>
            </TouchableOpacity>

            <Text style={styles.mainBodyText}>Once you are done, press 'Finished'. </Text>

            <TouchableOpacity
                style={[styles.doneBox, showReturn ? {backgroundColor: "red"}:{backgroundColor: "gray"}]}
                onPress={() => {showReturn && navigation.navigate("Send")}}
            >
                <Text style={styles.doneText}>Finished</Text>
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
    image: {
        flex: 1,
        height: 300,
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
        width: "95%",
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
        marginTop: 10,
        marginHorizontal: 10,
    },
    bulletPoints: {
        fontSize: 17,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 10,
        fontWeight: "bold"
    },
    flatListRow: {
        flexDirection: "row",
        marginHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderTopColor: "#71A1D1",
        borderTopWidth: 5,
        borderBottomColor: "#71A1D1",
        borderBottomWidth: 5,
    },
    title: {
        fontSize: 17,
        marginHorizontal: 10,
        fontWeight: "bold",
        marginTop: 10,
    },
    dateText : {
        fontSize: 17,
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#E2E2E2",
        height: 150,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 7.5,
        paddingLeft: 10,
        fontSize: 17,
        marginHorizontal: 10
    },
    moleDetails : {
        flex : 1,
    }
});

export default SendEmail;
