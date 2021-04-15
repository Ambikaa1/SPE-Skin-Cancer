import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView} from "react-native";

import UserQuestion from "../components/UserQuestion";
import DropDownPicker from "react-native-dropdown-picker";

// const changeQuestion = (questionNo) => {
//     switch(questionNo) {
//         case '0':
//             return <UserQuestion>case 0 </UserQuestion>
//         case '1':
//             return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseTorso2.png')}/>)
//         case '2':
//             return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLUA.png')}/>)
//     }
// }



// const changeBooleans = (current, next) => {
//     if (current === questionOne) {
//         setQuestionOne(false)
//         setQuestionTwo(true)
//     }
// }


const UserProfile = ({}) => {
    const [questionOne, setQuestionOne] = useState(true)
    const [questionTwo, setQuestionTwo] = useState(false)
    const [questionThree, setQuestionThree] = useState(false)

    return (
        <View>
            {questionOne
                ?
                <>
                    <Text> question 1</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {console.log(questionOne)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionTwo(true); setQuestionOne(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : <Text></Text>
            }
            {questionTwo
                ?
                <>
                    <Text> question 2</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {console.log(questionOne)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionThree(true), setQuestionTwo(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : <Text></Text>
            }
            {questionThree
                ?
                <>
                    <Text> question 3</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {console.log(questionThree)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionOne(true); setQuestionThree(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : <Text></Text>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10,
        marginTop: 20,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },
    dropDownContainer: {
        height: 35,
        marginTop: 5,
        marginRight: 10,
    },
    dropDownLabel: {
        fontSize: 17,
    },
});

export default UserProfile;