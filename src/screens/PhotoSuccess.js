import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

const PhotoSuccess = ({navigation}) => {
    return (
        <ScrollView>
            <Text style={styles.headingText}> Your mole photos are saved! </Text>
            <Text style={styles.bodyText}> Press finish below to go back to the body diagram. </Text>
            <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("Swiping")}>
                <Text style = {styles.doneText}>Finish</Text>
            </TouchableOpacity>
            <Text style={styles.bodyText}>{'\n'}Alternatively, you can now complete an optional questionnaire by
                pressing take questionnaire below.
                {'\n\n'}Your answers will be attached to any email you send through the app.
            It is made for people who have, or have had, a diagnosis of skin cancer.{'\n\n'}This questionnaire is
            strictly optional and you can change your answers by answering it again.</Text>
            <TouchableOpacity style = {styles.doneBox} onPress={() => navigation.navigate("Survay")}>
                <Text style = {styles.doneText}>
                    Take questionnaire
                </Text>

            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    headingText: {
        color: "black",
        fontSize: 25,
        paddingHorizontal:5,
        paddingVertical: 10,
        alignSelf: 'center',
    },
    bodyText:{
        color: "black",
        fontSize: 20,
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
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
        alignSelf:'center',
    }
});

export default PhotoSuccess;
