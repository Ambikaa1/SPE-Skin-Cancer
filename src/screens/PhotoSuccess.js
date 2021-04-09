import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

const PhotoSuccess = ({navigation}) => {
    return (
        <ScrollView>
            <Text style={styles.headingText}>Your mole photos are saved! </Text>
            <Text></Text>
            <Text style={styles.headingText}>Would you now like to complete the SCQOLIT survey? </Text>
            <Text style={styles.bodyText}>{'\n'} The SCQOLIT is an optional questionnaire for people who have been
                diagnosed with skin cancer. </Text>
                {/*{'\n\n'}This questionnaire is*/}
                {/*strictly optional and you can change your answers by answering it again.*/}
                {/*{'\n\n'}Your latest answers will be attached to any email you send through the app.*/}
            {/*</Text>*/}
            <TouchableOpacity style = {styles.doneBox} onPress={() => navigation.navigate("Survay")}>
                <Text style = {styles.doneText}>
                    Yes, take me to the questionnaire
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("Swiping")}>
                <Text style = {styles.doneText}>No, take me to the body outline</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    headingText: {
        color: "black",
        fontSize: 25,
        paddingHorizontal:5,
        alignSelf: 'center',
    },
    bodyText:{
        color: "black",
        fontSize: 18,
        paddingHorizontal:5,
        paddingVertical:5,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
        width: "97.5%",
    },
    doneText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
        alignSelf:'center',
    }
});

export default PhotoSuccess;
