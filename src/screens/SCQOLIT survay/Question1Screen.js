import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";

const Question1Screen = ({navigation}) => {



    const clickHandler = (value) => {
        console.log("total = ", value)
        navigation.navigate("Question2", value)
    }

    return(
        <ScrollView style = {styles.container}>
            <View>
                <Text style ={styles.text}>
                    Over the last week, how much have you been concerned that your skin cancer might come back?
                </Text>
            </View>
            <View>
                <TouchableOpacity style = {styles.options} onPress = {() => clickHandler(3)}>
                    <Text style = {styles.optionsText}>
                        Very much so
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.options} onPress = {() => clickHandler(2)}>
                    <Text style = {styles.optionsText}>
                        Moderately so
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.options} onPress = {() => clickHandler(1)}>
                    <Text style = {styles.optionsText}>
                        Somewhat
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.options} onPress = {() => clickHandler(0)}>
                    <Text style = {styles.optionsText}>
                        Not at all
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,

    },
    text:{
        marginBottom: 150,
        textAlign: 'center',
        fontSize:20,
        alignItems: 'center',
    },
    options:{
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:10,
        width: "95%",
        marginBottom:15,
    },
    optionsText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },


})

export default Question1Screen;
