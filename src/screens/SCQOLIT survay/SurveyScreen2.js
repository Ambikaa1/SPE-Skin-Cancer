import React, { useState } from 'react';
import {StyleSheet, View, Alert, Text, TouchableOpacity,} from 'react-native';



const SurveyScreen2 = ({navigation}) => {
    const [question, setQuestion] = useState(1)
    const [answers, setAnswers] = useState([
        {q: 1, value: null},
        {q: 2, value: null},
        {q: 3, value: null},
        {q: 4, value: null},
        {q: 5, value: null},
        {q: 6, value: null},
        {q: 7, value: null},
        {q: 8, value: null},
        {q: 9, value: null},
        {q: 10, value: null}
        ])

    const defaultColors = {
        btn1: '#71A1D1',
        btn2: '#71A1D1',
        btn3: '#71A1D1',
        btn4: '#71A1D1',
    };
    const [buttonsColor, setButtonsColor] = useState(defaultColors)


    const clickHandler = (values) => {
        const prevAnswers = answers
        prevAnswers[question-1].value = values
        setAnswers(prevAnswers)

        const button = `btn${values+1}`;
        setButtonsColor({
            ...defaultColors,
            [button]: '#38c413',
        })
    }

    const nextClick = () => {
        if (answers[(question-1)].value == null){
            Alert.alert("Alert", "please select an answer")
        }
        else {
            if (answers[question].value != null){
                const button = `btn${answers[question].value + 1}`;
                setButtonsColor({
                    ...defaultColors,
                    [button]: '#38c413',
                })
            } else {
                setButtonsColor(defaultColors);
            }
            setQuestion(question => question + 1)
        }
    }

    const prevClick = () => {
        if (answers[question-2].value != null){
            const button = `btn${answers[question-2].value + 1}`;
            setButtonsColor({
                ...defaultColors,
                [button]: '#38c413',
            })
        }
        setQuestion(question => question - 1)
    }

    const finishedClick = () => {
        if (answers[(question-1)].value == null){
            Alert.alert("Alert", "please select an answer")
        }
        else {
            let total = 0
            for (let i in answers) {
                total = total + answers[i].value
            }
            let data = {
                total,
                answers
            }
            navigation.navigate("LastSCQOLITScreen", data)
        }
    }


    return (
        <View style = {styles.container}>
            <Text style = {styles.questionTop}>Please select an answer then click 'next' to go to the next question, or press 'previous' to go to the previous question</Text>
            <View style = {{height:'40%'}}>
                <View style = {{marginTop:'15%'}}>
                    {(question == 1) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you been concerned that your skin cancer might come back?
                        </Text>
                    </>
                    }
                    {(question == 2) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt that you needed more information on how to recognize skin cancer
                            or prevent it?
                        </Text>
                    </>
                    }
                    {(question == 3) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week how much have you worried about covering up your skin and keeping out of the sun?
                        </Text>
                    </>
                    }
                    {(question == 4) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt a need for reassurance from your doctor or nurse, in respect to your
                            skin cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(question == 5) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt emotional, anxious, depressed, guilty or stressed, in respect to your skin cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(question == 6) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you been bothered about any disfigurement or scarring, in respect to your skin cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(question == 7) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you felt shock or disbelief about having been diagnosed with skin cancer?
                        </Text>
                    </>
                    }
                    {(question == 8) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much skin discomfort or inconvenience have you experienced, in respect to your skin
                            cancer or its treatment?
                        </Text>
                    </>
                    }
                    {(question == 9) &&
                    <>
                        <Text style={styles.text}>
                            Over the last week, how much have you had concerns about dying from your skin cancer?
                        </Text>
                    </>
                    }
                    {(question == 10) &&
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
                <TouchableOpacity style = {[styles.optionButton, {backgroundColor: buttonsColor.btn4}]} onPress = {() => clickHandler(3)}>
                    <Text style = {styles.optionsText}>
                        Very much so
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton,{backgroundColor: buttonsColor.btn3}]} onPress = {() => clickHandler(2)}>
                    <Text style = {styles.optionsText}>
                        Moderately so
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton, {backgroundColor: buttonsColor.btn2}]} onPress = {() => clickHandler(1)}>
                    <Text style = {styles.optionsText}>
                        Somewhat
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {[styles.optionButton,  {backgroundColor: buttonsColor.btn1}]} onPress = {() => clickHandler(0)}>
                    <Text style = {styles.optionsText}>
                        Not at all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection:'row', justifyContent:'space-around'}}>
                <View style = {{width:'50%'}}>
                    {(question > 1) &&
                    <TouchableOpacity style={styles.prevButton} onPress={() => prevClick()}>
                        <Text style={styles.bottomButtonsText}>Previous</Text>
                    </TouchableOpacity>
                    }
                </View>
                <View style = {{width: '50%'}}>
                    {(question < 10) &&
                    <TouchableOpacity style={styles.nextButton} onPress={() => nextClick()}>
                        <Text style={styles.bottomButtonsText}>Next</Text>
                    </TouchableOpacity>
                    }
                    {(question == 10) &&
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
