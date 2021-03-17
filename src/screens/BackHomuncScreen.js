import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";

const BackHomuncScreen = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("BodyPart", {paramKey: bodyPart})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Back/LeftView.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Head or Neck")}>
                    <Image style={styles.head} source={require('../../assets/Back/Head.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Back/RightView.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/Back/LeftUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.chest} source={require('../../assets/Back/BackTorso.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/Back/RightUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/Back/LeftLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.body} source={require('../../assets/Back/LowerTorso.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/Back/RightLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Volar Right Hand")}>
                    <Image style={styles.hand} source={require('../../assets/Back/LeftHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.leg} source={require('../../assets/Back/LeftUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.leg} source={require('../../assets/Back/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Volar Left Hand")}>
                    <Image style={styles.hand} source={require('../../assets/Back/RightHand.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/Back/LeftLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/Back/RightLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Right Foot")}>
                    <Image style={styles.foot} source={require('../../assets/Back/LeftFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Left Foot")}>
                    <Image style={styles.foot} source={require('../../assets/Back/RightFoot.png')} />
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

export default BackHomuncScreen;