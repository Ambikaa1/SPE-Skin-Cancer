import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MoleTypeScreen = ({ route, navigation }) => {
    const [moleChoice, setChoice] = useState(true);
    const [name, setName] = useState(null);
    const [comments, setComments] = useState(null);
    const bodyPart = route.params.paramKey

    return (
        <View style = {styles.container}>
            <Text style = {styles.question}>Is this a new mole?</Text>
            <Picker
                selectedValue = {moleChoice}
                onValueChange = {(itemValue) => setChoice(itemValue)}
                style = {styles.picker}
                itemStyle = {styles.pickerItem}
            >
                <Picker.Item label = "Yes" value = {true} />
                <Picker.Item label = "No" value = {false} />
            </Picker>
            {moleChoice
                ?
                    <>
                        <Text style = {styles.question}>Mole name:</Text>
                        <TextInput
                            value = {name}
                            onChangeText = {value => setName(value)}
                            placeholder = "Mole name"
                            style = {styles.input}
                        />
                        <Text style = {styles.question}>Mole comments:</Text>
                        <TextInput
                            value = {comments}
                            onChangeText = {value => setComments(value)}
                            placeholder = "Mole comments"
                            style = {styles.input}
                        />
                    </>
                : <Text>PRESS YES. Space to add images if an existing mole. Can be done after we have diary screen done as page is similar </Text>
            }
            <TouchableOpacity style = {styles.doneBox} onPress={() =>
                {moleChoice
                    ? navigation.navigate("HelpFarShot", { name: name, comments: comments })
                    : null
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
    question: {
        fontSize: 20
    },
    picker: {
        marginRight: 10,
        height: 125,
        // borderColor: "black",
        // borderWidth: 1

    },
    pickerItem: {
        height: 125,
        // borderColor: "black",
        // borderWidth: 1
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
