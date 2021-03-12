import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";

const Question3Screen = ({navigation, route}) => {

    const clickHandler = (value) => {
        let update = (route.params +value)
        console.log("total = ", update)
        navigation.navigate("Question4", update)
    }

    return(
        <View style = {styles.container}>
            <View>
                <Text style ={styles.text}>
                    Over the last week how much have you worried about covering up your skin and keeping out of the sun?
                    {/*{route.params}*/}
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
        </View>
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

export default Question3Screen;
