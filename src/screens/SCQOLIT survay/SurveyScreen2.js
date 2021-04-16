import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Alert, Text, TouchableOpacity, TextInput, FlatList, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as SQLite from "expo-sqlite";

import MoleListItem from "../../components/MoleListItem"


const SurveyScreen2 = ({navigation}) => {
    const [Question, setQuestion] = useState(1)
    const [Answers] = useState([null, null, null ,null, null, null, null, null ,null, null])


    const clickHandler = (values) => {
        Answers[(Question-1)] = values

    }
    const nextClick = () => {
        if (Answers[(Question-1)] == null){
            Alert.alert("Alert", "please select an answer")
        }
        else {
            setQuestion(Question + 1)
        }
    }
    const prevClick = () => {
        setQuestion(Question - 1)
    }
    const finishedClick = () => {
        if (Answers[(Question-1)] == null){
            Alert.alert("Alert", "please select an answer")
        }
        else {
            let total = 0
            for (let i in Answers) {
                total = total + Answers[i]
            }
            let data = {
                total,
                Answers
            }
            navigation.navigate("LastSCQOLITScreen", data)
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.questionTop}>Please select an answer then click 'next' to go to the next question, or press 'previous' to go to the previous question</Text>
            <View style = {{height:'40%'}}>
                <View style = {{marginTop:'15%'}}>
                    {(Question == 1) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you been concerned that your skin cancer might come back?
                        </Text>
                    </>
                    }
                    {(Question == 2) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt that you needed more information on how to recognize skin cancer
                            or prevent it?
                        </Text>
                    </>
                    }
                    {(Question == 3) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week how much have you worried about covering up your skin and keeping out of the sun?
                        </Text>
                    </>
                    }
                    {(Question == 4) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt a need for reassurance from your doctor or nurse, in respect to your
                            skin cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(Question == 5) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt emotional, anxious, depressed, guilty or stressed, in respect to your skin cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(Question == 6) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you been bothered about any disfigurement or scarring, in respect to your skin cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(Question == 7) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt shock or disbelief about having been diagnosed with skin cancer?
                        </Text>
                    </>
                    }
                    {(Question == 8) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much skin discomfort or inconvenience have you experienced, in respect to your skin
                            cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(Question == 9) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you had concerns about dying from your skin cancer?
                        </Text>
                    </>
                    }
                    {(Question == 10) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, to what extent have you felt the need for emotional support from your family or friends, in
                            respect to your skin cancer or its treatment?
                        </Text>
                    </>
                    }
                </View>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton, {backgroundColor: "#71A1D1"}]} onPress = {() => clickHandler(3)}>
                    <Text style = {styles.optionsText}>
                        Very much so
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton,{backgroundColor: "#71A1D1"}]} onPress = {() => clickHandler(2)}>
                    <Text style = {styles.optionsText}>
                        Moderately so
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton, {backgroundColor: "#71A1D1"}]} onPress = {() => clickHandler(1)}>
                    <Text style = {styles.optionsText}>
                        Somewhat
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton,  {backgroundColor: "#71A1D1"}]} onPress = {() => clickHandler(0)}>
                    <Text style = {styles.optionsText}>
                        Not at all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection:'row', justifyContent:'space-around'}}>
                <View style = {{width:'50%'}}>
                    {(Question > 1) &&
                    <TouchableOpacity style={styles.prevButton} onPress={() => prevClick()}>
                        <Text style={styles.bottomButtonsText}>Previous</Text>
                    </TouchableOpacity>
                    }
                </View>
                <View style = {{width: '50%'}}>
                    {(Question < 10) &&
                    <TouchableOpacity style={styles.nextButton} onPress={() => nextClick()}>
                        <Text style={styles.bottomButtonsText}>Next</Text>
                    </TouchableOpacity>
                    }
                    {(Question == 10) &&
                    <TouchableOpacity style={styles.nextButton} onPress={() => finishedClick()}>
                        <Text style={styles.bottomButtonsText}>Finished</Text>
                    </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '2.5%',
        marginHorizontal:'2.5%',
    },
    prevButton: {
        marginTop: '15%',
        backgroundColor: '#646464',
        alignItems: 'center',
        borderRadius: 10,
        width: '98%',
        // marginRight: '1%'
    },
    nextButton: {
        marginTop: '15%',
        backgroundColor: '#38c413',
        alignItems: 'center',
        borderRadius: 10,
        width: '98%',
        marginLeft: '1%'
    },
    bottomButtonsText:{
        fontSize:40,
        marginVertical:10,
        color: 'white',
    },
    text:{
        textAlign: 'center',
        fontSize:20,
        alignItems: 'center',
    },
    optionButton:{
        alignItems: "center",
        borderRadius: 10,
        marginBottom:'2.5%',
    },
    optionsText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",

    marginVertical: 10,
    },


});

export default SurveyScreen2;
