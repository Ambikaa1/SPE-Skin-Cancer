import React, {useEffect, useState } from "react";
import {View, Text, StyleSheet, Alert, TouchableOpacity} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const LastSCQOLITScreen = ({navigation, route}) => {
    const [PrevScore, setPrevScore] = useState(null)
    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("select * from survey_score;", [], (_, { rows }) => {
                        setPrevScore(rows._array[0].score);
                    }
                );
            }
        );
    }, []);

    const addToDatabase = () => {
        db.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE survey_score SET score = ?, answers = ?`,
                    [route.params.total, route.params.Answers],
                    null,
                    (t, error) => {
                        console.log(error);
                    }
                );
            }
        );
    }

    const doneFunction = () => {
        navigation.navigate("InfoList")
        addToDatabase()
        console.log(route.params)
    }
    const testFunction = () => {
        Alert.alert("allert", (PrevScore))
    }

    return(
        <>
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Thank you for taking the survey! {"\n"}
                    {"\n"}{"\n"}

                    Your score is:{"\n"}
                </Text>
                <Text style = {styles.scoreText}>
                    {route.params.total}/30
                </Text>


            </View>
            <TouchableOpacity style = {styles.nextButton} onPress = {() => doneFunction()}>
                <Text style = {styles.nextButtonText}>
                    Done
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.nextButton} onPress = {() => testFunction()}>
                <Text style = {styles.nextButtonText}>
                    Test
                </Text>
            </TouchableOpacity>


        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: "2.5%",
        marginHorizontal: "2.5%",



    },
    title:{
        marginTop:"35%",
        textAlign:'center',
        fontSize:30,

    },
    scoreText:{
        textAlign: 'center',
        fontSize:50,
        color: 'red',
    },

    nextButtonText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },

    nextButton:{
        alignItems: 'center',
        bottom: 50,
        backgroundColor: "#71A1D1",
        marginHorizontal:"2.5%",
        borderRadius: 10,
    }




})

export default LastSCQOLITScreen;
