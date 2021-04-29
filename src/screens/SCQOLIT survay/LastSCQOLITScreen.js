import React, {useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const LastSCQOLITScreen = ({navigation, route}) => {
    const [prevScore, setPrevScore] = useState(-1)
    const [total,setTotal] = useState(-1)
    const [answers, setAnswers] = useState(null)

    useEffect(() => {
        setAnswers(route.params.answers)
        setTotal(route.params.total)
            db.transaction(
                tx => {
                    tx.executeSql("select * from survey;", [], (_, { rows }) => {
                            setPrevScore(rows._array[0].score)
                        }
                    );
                }
            );
        }, []);

    const addToDatabase = () => {
        db.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE survey SET score = ?`,
                    [total],
                    null,
                    (t, error) => {console.log(error);}
                );
            }
        );
        console.log("score updated from: ", prevScore, " to: ", total)
    };

    const doneFunction = () => {
        addToDatabase()
        navigation.navigate("InfoList")
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
                {(route.params.total >= 20) &&
                <>
                    <Text style = {styles.recommendText}>
                        Your survey score is high. We recommend you may want to talk to your gp
                    </Text>
                </>

                }
            </View>
            <TouchableOpacity style = {styles.nextButton} onPress = {() => doneFunction()}>
                <Text style = {styles.nextButtonText}>
                    Done
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
    },
    recommendText:{
        textAlign: 'center',
        marginTop: 20,
    },
})

export default LastSCQOLITScreen;
