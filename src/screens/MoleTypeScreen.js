import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

const MoleTypeScreen = ({navigation}) => {
    const [moleChoice, setChoice] = useState(null);
    const [name, setName] = useState(null);
    const [comments, setComments] = useState(null);

    return (
        <View style = {styles.container}>
            <Text style = {styles.question}>Is this a new mole?</Text>
            <DropDownPicker
                items = {[
                    {label: 'Yes', value: 1},
                    {label: 'No', value: 0},
                ]}
                containerStyle = {styles.dropDownContainer}
                labelStyle = {styles.dropDownLabel}
                onChangeItem = {item => setChoice(item.value)}
            />
            {(moleChoice == 1) && 
                <>
                    <Text style = {styles.question1}>Mole name:</Text>
                    <TextInput
                        value = {name}
                        onChangeText = {value => setName(value)}
                        placeholder = "Mole name"
                        style = {styles.input}
                    />
                    <Text style = {styles.question2}>Mole comments:</Text>
                    <TextInput
                        value = {comments}
                        onChangeText = {value => setComments(value)}
                        placeholder = "Mole comments"
                        style = {styles.input}
                    />
                </>
            }
            {(moleChoice == 0) && 
                <Text>PRESS YES. Space to add images if an existing mole. Can be done after we have diary screen done as page is similar </Text>
            }
            <TouchableOpacity style = {styles.doneBox} onPress={() =>
                {moleChoice
                    ? navigation.navigate("HelpFarShot", { name: name, comments: comments })
                    : navigation.navigate("HelpNearShot", { name: name, comments: comments })
                }}
            >
                <Text style = {styles.doneText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10
    },
    dropDownContainer: {
        height: 40,
        marginTop: 5,
        marginRight: 10,
        fontSize: 20,
    },
    dropDownLabel: {
        fontSize: 20,
    },
    question: {
        fontSize: 20
    },
    question1: {
        marginTop: 20,
        fontSize: 20
    },
    question2: {
        marginTop: 20,
        fontSize: 20
    },
    input: {
        backgroundColor: "#E2E2E2",
        height: 50,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 7.5,
        paddingLeft: 10,
        fontSize: 20,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "97.5%",
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default MoleTypeScreen;
