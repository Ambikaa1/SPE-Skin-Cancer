import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";

const FrontHomuncScreen = ({navigation}) => {
    const clickHandler = (bodyPart, view) => {
        navigation.navigate("BodyPart", {bodyPart: bodyPart, view: view,})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Front/RightView.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Head or Neck")}>
                    <Image style={styles.head} source={require('../../assets/Front/Head.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Front/LeftView.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/Front/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.chest} source={require('../../assets/Front/ChestTop.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/Front/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/Front/RightLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.body} source={require('../../assets/Front/FrontMiddle.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/Front/LeftLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Volar Right Hand")}>
                    <Image style={styles.hand} source={require('../../assets/Front/RightHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.body} source={require('../../assets/Front/FrontLower.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Volar Left Hand")}>
                    <Image style={styles.hand} source={require('../../assets/Front/LeftHand.png')} />
                </TouchableOpacity>
            </View>
            <View style = {styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Leg")}>
                    <Image style={styles.leg} source={require('../../assets/Front/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Leg")}>
                    <Image style={styles.leg} source={require('../../assets/Front/LeftUL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/Front/RightLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg")}>
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
        width: 160,
        height: 95,
        resizeMode: 'contain',
    },
});

export default FrontHomuncScreen;