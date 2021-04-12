import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const PhotoSuccess = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.success}>Your mole photos have been saved!</Text>
            <Text style={styles.questionBold}>Would you now like to complete the SCQOLIT survey? </Text>
            <Text style={styles.question}>The SCQOLIT is an optional questionnaire for people who have been
                diagnosed with skin cancer. </Text>
                {/*{'\n\n'}This questionnaire is*/}
                {/*strictly optional and you can change your answers by answering it again.*/}
                {/*{'\n\n'}Your latest answers will be attached to any email you send through the app.*/}
            {/*</Text>*/}
            <TouchableOpacity style = {styles.doneBoxYes} onPress={() => navigation.navigate("Survay")}>
                <Text style = {styles.doneText}>
                    Yes, take me to the SCQOLIT survey
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.doneBoxNo} onPress={() => navigation.navigate("Swiping")}>
                <Text style = {styles.doneText}>No, take me back to the body outline</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    success: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 10,
    },
    questionBold: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 17,
        fontWeight: "bold"
    },
    question: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 17,
    },
    bodyText:{
        color: "black",
        fontSize: 18,
        paddingHorizontal:5,
        paddingVertical:5,
    },
    doneBoxYes: {
        backgroundColor: "#71A1D1",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        width: "95%",
        position: "absolute",
        bottom: 70,
    },
    doneBoxNo: {
        backgroundColor: "#71A1D1",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        width: "95%",
        position: "absolute",
        bottom: 10,
    },
    doneText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
        marginVertical: 15,
        alignSelf:'center',
    }
});

export default PhotoSuccess;
