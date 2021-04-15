import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("28.db");

const UserProfile = ({ navigation }) => {
    const [history, setHistory] = useState(null);
    const [familyHistory, setFamilyHistory] = useState(null);
    const [sunburn, setSunburn] = useState(null);
    const [sunbed, setSunbed] = useState(null);
    const [workOutside, setWorkOutside] = useState(null);
    const [immunosuppressed, setImmunosuppressed] = useState(null);
    const [moleNo, setMoleNo] = useState(null);
    const [chemicalExposure, setChemicalExposure] = useState(null);
    const [radiationExposure, setRadiationExposure] = useState(null);

    useEffect(() => { //this one selects the values???
        db.transaction(
            tx => {
                tx.executeSql("select * from user;", [], (_, { rows }) => {
                        setHistory(rows._array[0].history);
                        setFamilyHistory(rows._array[0].family_history);
                        setSunburn(rows._array[0].sunburn);
                        setSunbed(rows._array[0].sunbed);
                        setWorkOutside(rows._array[0].work_outside);
                        setImmunosuppressed(rows._array[0].immunosuppressed);
                        setMoleNo(rows._array[0].number_of_moles);
                        setChemicalExposure(rows._array[0].chemical_exposure);
                        setRadiationExposure(rows._array[0].radiation_exposure);
                    }
                );
            }
        );
    }, []);

    const addToDatabase = () => { //updates the values
        db.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE user SET history = ?, family_history = ?, sunburn = ?, sunbed = ?, work_outside = ?, immunosuppressed = ?, number_of_moles = ?, chemical_exposure = ?, radiation_exposure = ? WHERE user_id = 1;`,
                    [history, familyHistory, sunburn, sunbed, workOutside, immunosuppressed, moleNo, chemicalExposure, radiationExposure],
                    null,
                    (t, error) => {console.log(error);}
                );
            }
        );
        navigation.navigate("HomeScreen")
    };

    const [questionOne, setQuestionOne] = useState(true)
    const [questionTwo, setQuestionTwo] = useState(false)
    const [questionThree, setQuestionThree] = useState(false)
    const [questionFour, setQuestionFour] = useState(false)
    const [questionFive, setQuestionFive] = useState(false)
    const [questionSix, setQuestionSix] = useState(false)
    const [questionSeven, setQuestionSeven] = useState(false)
    const [questionEight, setQuestionEight] = useState(false)
    const [questionNine, setQuestionNine] = useState(false)

    return (
        <View>
            <Text style = {styles.title}>Have you got any risk factors for skin cancer? </Text>
            <Text style = {styles.title}>Go through the questions indicating ‘yes’, ‘no’, 'unsure' or 'rather not say'.</Text>
            <Text style = {styles.title}>This information will only be stored on your phone unless you opt to send it with your images to a clinician. </Text>
            {questionOne
                ?
                <>
                    <Text style = {styles.progress}>Question 1 out of 9</Text>
                    <Text style = {styles.questions}>Have you ever had a skin cancer?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setHistory(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionTwo(true); setQuestionOne(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionTwo
                ?
                <>
                    <Text style = {styles.progress}>Question 2 out of 9</Text>
                    <Text style = {styles.questions}>Has anyone in your family had a skin cancer?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setFamilyHistory(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionThree(true), setQuestionTwo(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionThree
                ?
                <>
                    <Text style = {styles.progress}>Question 3 out of 9</Text>
                    <Text style = {styles.questions}> Have you ever had sunburn?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setSunburn(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionFour(true); setQuestionThree(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionFour
                ?
                <>
                    <Text style = {styles.progress}>Question 4 out of 9</Text>
                    <Text style = {styles.questions}>Have you ever used a sun bed?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setSunbed(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionFive(true); setQuestionFour(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionFive
                ?
                <>
                    <Text style = {styles.progress}>Question 5 out of 9</Text>
                    <Text style = {styles.questions}>Have you ever had a job that involved working outside?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setWorkOutside(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionSix(true), setQuestionFive(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionSix
                ?
                <>
                    <Text style = {styles.progress}>Question 6 out of 9</Text>
                    <Text style = {styles.questions}>Are you immunosuppressed? (Suppression of the immune response, as by drugs or radiation)</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setImmunosuppressed(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionSeven(true); setQuestionSix(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionSeven
                ?
                <>
                    <Text style = {styles.progress}>Question 7 out of 9</Text>
                    <Text style = {styles.questions}>Have you got a large number of moles on your skin surface?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setMoleNo(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionEight(true); setQuestionSeven(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionEight
                ?
                <>
                    <Text style = {styles.progress}>Question 8 out of 9</Text>
                    <Text style = {styles.questions}>Have you ever been exposed to any chemicals during your occupation?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setChemicalExposure(item.value)}
                    />
                    <TouchableOpacity style = {styles.doneBox} onPress = {() => {setQuestionNine(true), setQuestionEight(false)}}>
                        <Text style = {styles.doneText}>Next question</Text>
                    </TouchableOpacity>
                </>
                : null
            }
            {questionNine
                ?
                <>
                    <Text style = {styles.progress}>Question 9 out of 9</Text>
                    <Text style = {styles.questions}>Have you ever been exposed to any radiation during your occupation?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Yes', value: "yes"},
                            {label: 'No', value: "no"},
                            {label: 'Unsure', value: "unsure"},
                            {label: 'Rather not say', value: "not say"},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => setRadiationExposure(item.value)}
                    />
                    <Text></Text>
                    <Text style = {styles.title}>Thank you, now it's time to assess your skin. </Text>
                    <TouchableOpacity style = {styles.doneBox} onPress = {addToDatabase}>
                        <Text style = {styles.doneText}>Finish</Text>
                    </TouchableOpacity>
                </>
                : null
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
        height: 40,
        marginTop: 5,
        marginRight: 10,
        marginHorizontal: 10,
    },
    dropDownLabel: {
        fontSize: 17,
    },
    questions:{
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 10,
    },
    title:{
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 10,
    },
    progress:{
        fontSize: 17,
        marginTop: 30,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
});

export default UserProfile;