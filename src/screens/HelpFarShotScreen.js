import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView, Linking, View, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HelpFarShotScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView persistentScrollbar = {true}>
                <Text style = {styles.title}>Far Shot Guidance</Text>

                <Text style = {styles.mainBodyText}>Now is the time to photograph the part of
                    your body you just selected.</Text>

                <Text style = {styles.mainBodyText}>There will be an outline available of the body part
                to help you align the camera. This will be accessible
                by pressing the ghost shaped button ({<MaterialCommunityIcons name="ghost" size={17} color="black" />}), to the right of the picture
                    button on the next page. </Text>

                <Text style = {styles.mainBodyText}>Once you have taken a photo you will be able to drag a red circle with
                your finger to circle the mole. You can use the slider on the right to increase and decrease the size of the
                circle. Adjust the size of the circle until the location of the mole is clear. If you need more help at that
                stage, click the question mark in the top right.</Text>

                <Text style = {styles.mainBodyText}>Press continue below to see some tips for taking your photograph.</Text>

                <TouchableOpacity style={styles.doneBox}
                    onPress = {() => {
                        navigation.navigate("HelpFarShotTips", { name: route.params.name, comments: route.params.comments, bodyPart: route.params.bodyPart })
                    }}>
                    <Text style={styles.doneText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        marginHorizontal: 10,
        marginTop: 10,
        fontWeight: "bold"
        // textDecorationLine: 'underline'
    },
    mainBodyText: {
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 10,
    },
    tips: {
        fontSize: 17,
        marginTop: 20,
        marginHorizontal: 10,
        fontWeight: "bold"
    },
    bulletPoints: {
        fontSize: 17,
        marginTop: 10,
        // paddingLeft: 5,
        marginHorizontal: 10,
    },
    link: {
        color: "#3366ff",
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 25,
        bottom: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default HelpFarShotScreen;
