import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image, Text} from "react-native";

const FrontHomuncScreen = ({navigation}) => {
    const clickHandler = (bodyPart, highlight) => {
        navigation.navigate("BodyPart", {bodyPart: bodyPart, highlight: highlight})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
            <Text style = {styles.title}>Swipe left or right, or click on the buttons to navigate to the different views. </Text>
            <Text></Text>
            <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("Swiping")}>
                <Text style = {styles.doneText}>Click here to swipe between views</Text>
            </TouchableOpacity>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Back/Left3.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("CloseHeadScreen")}>
                    <Image style={styles.head} source={require('../../assets/Front/Head.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.arm} source={require('../../assets/Front/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso", "This is the area highlighted in blue")}>
                    <Image style={styles.chest} source={require('../../assets/Front/ChestTop.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.arm} source={require('../../assets/Front/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.lowerArm} source={require('../../assets/Front/RightLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso", "This is the area highlighted in blue")}>
                    <Image style={styles.body} source={require('../../assets/Front/FrontMiddle.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.lowerArm} source={require('../../assets/Front/LeftLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Volar Right Hand")}>
                    <Image style={styles.hand} source={require('../../assets/Front/RightHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso", "This is the area highlighted in blue")}>
                    <Image style={styles.body} source={require('../../assets/Front/FrontLower.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Volar Left Hand")}>
                    <Image style={styles.hand} source={require('../../assets/Front/LeftHand.png')} />
                </TouchableOpacity>
            </View>
            <View style = {styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.leg} source={require('../../assets/Front/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.leg} source={require('../../assets/Front/LeftUL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/Front/RightLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/Front/LeftLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Right Foot")}>
                    <Image style={styles.foot} source={require('../../assets/Front/RightFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Left Foot")}>
                    <Image style={styles.foot} source={require('../../assets/Front/LeftFoot.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

//although some of the values are similar, they are very accurate so the body flows completely.
//so they can't be merged together!
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    flexbox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    head: {
        width: 115,
        height: 95,
        resizeMode: 'contain',
    },
    arm: {
        width: 75,
        height: 100,
        resizeMode: 'contain',
    },
    chest: {
        width: 110,
        height: 100,
        resizeMode: 'contain',
    },
    lowerArm: {
        width: 76,
        height: 58,
        resizeMode: 'contain',
    },
    body: {
        width: 109,
        height: 57,
        resizeMode: 'contain',
    },
    hand: {
        width: 69,
        height: 55,
        resizeMode: 'contain',
    },
    leg: {
        width: 137,
        height: 87,
        resizeMode: 'contain',
    },
    lowerLeg: {
        width: 133,
        height: 90,
        resizeMode: 'contain',
    },
    foot: {
        width: 138,
        height: 50,
        resizeMode: 'contain',
    },
    rotate: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    title:{
        fontSize: 15,
        fontWeight: "bold",
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10,
    },
    doneText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default FrontHomuncScreen;