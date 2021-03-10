import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions} from "react-native";

const clickHandler = (bodyPart) => {
    //setBodyPart(e)
    console.log(bodyPart, "homunc log")
    //navigation.navigate("FrontHomunc", {paramKey: bodyPart})
}

const FrontHomuncScreen = ({}) => {
    return (
        <ScrollView persistentScrollbar={true}>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Head and Neck")}>
                    <Image style={styles.rotate} source={require('../../assets/New/Rotate.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Head and Neck")}>
                    <Image style={styles.head} source={require('../../assets/New/Head.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Head and Neck")}>
                    <Image style={styles.rotate} source={require('../../assets/New/Rotate.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/New/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Front")}>
                    <Image style={styles.chest} source={require('../../assets/New/ChestTop.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/New/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/New/RightLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Front")}>
                    <Image style={styles.body} source={require('../../assets/New/FrontMiddle.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/New/LeftLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Volar Right Hand")}>
                    <Image style={styles.hand} source={require('../../assets/New/RightHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Front")}>
                    <Image style={styles.lowerBody} source={require('../../assets/New/FrontLower.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Volar Left Hand")}>
                    <Image style={styles.hand} source={require('../../assets/New/LeftHand.png')} />
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Leg")}>
                    <Image style={styles.leg} source={require('../../assets/New/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Leg")}>
                    <Image style={styles.leg} source={require('../../assets/New/LeftUL.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/New/RightLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/New/LeftLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Right Foot")}>
                    <Image style={styles.foot} source={require('../../assets/New/RightFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Left Foot")}>
                    <Image style={styles.foot} source={require('../../assets/New/LeftFoot.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    head: {
        width: 115,
        //width: Dimensions.get("window").width,
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
        width: 110,
        height: 58,
        resizeMode: 'contain',
    },
    lowerBody: {
        width: 110,
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