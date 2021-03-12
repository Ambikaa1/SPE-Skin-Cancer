import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";

const infoAboutQuestions = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View>
                <Text style ={styles.text}>
                    The purpose of this questionnaire is to measure how much having skin cancer has affected your quality of life
                    over the last week. Please select one box for each question and answer all questions.
                </Text>
            </View>
            <View>
                <Text style = {styles.text}>
                    There are ten questions.
                </Text>
            </View>
            <TouchableOpacity style = {styles.next} onPress = {() => navigation.navigate("Question1")}>
                <Text style = {styles.nextText}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,

    },
    text:{
        marginBottom: 50,
        textAlign: 'center',
        fontSize:20,
        alignItems: 'center',
    },
    next:{
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:10,

        position: "absolute",
        width: "95%",
        bottom: 20
    },
    nextText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },


})

export default infoAboutQuestions;
