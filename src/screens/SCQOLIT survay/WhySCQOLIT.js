import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";


const WhySCQOLIT = ({navigation}) =>{
    return(
        <ScrollView style = {styles.container}>
            <View>
                <Text style = {styles.title}>
                    Why should I complete the SCQOLIT?
                </Text>
            </View>
            <View>
                <Text style ={styles.text}>
                    This confidential survey was developed to assess how skin cancer affects your quality of life.
                </Text>

                <Text style = {styles.text}>
                    It assesses how you are coping with your diagnosis.  You have the option of sharing it with your clinical team.  It can help them identify whether you would benefit from extra support.
                </Text>
            </View>
            <View style ={styles.questionView}>
                <Text style = {styles.question}>
                    Would you like to complete the SCQOLIT questions today?
                </Text>
            </View>
            <TouchableOpacity style = {styles.yesButton} onPress ={() => navigation.navigate("InfoSCQOLIT")}>
                <Text style = {styles.yesText}>
                    Yes
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title:{
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 60,
        fontSize: 30,
        textAlign:'center',
        },
    text:{
        marginBottom: 50,
        textAlign: 'center',
        fontSize:20,
        alignItems: 'center',
    },
    yesButton:{
        backgroundColor: "#24b324",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:10,
        marginTop: 40,
        width: "95%",
    },
    yesText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },
    questionView:{
        alignItems:'center',
        marginTop: 60,
        marginLeft:20,
        marginRight:20,
    },
    question:{
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'center',
    }


})
export default WhySCQOLIT;
