import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";

const LastSCQOLITScreen = ({navigation, route}) => {
    return(
        <>
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Thank you for taking the survay! {"\n"}
                    {"\n"}{"\n"}

                    Your score is:{"\n"}
                </Text>
                <Text style = {styles.scoreText}>
                    {route.params}/30
                </Text>


            </View>
            <TouchableOpacity style = {styles.nextButton}>
                <Text style = {styles.nextButtonText}>
                    Next
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
