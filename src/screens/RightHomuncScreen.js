import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";

const RightHomuncScreen = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("BodyPart", {bodyPart: bodyPart})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Side/FrontView.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Head or Neck")}>
                    <Image style={styles.head} source={require('../../assets/Side/RightHead.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Side/BackView.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => clickHandler("Right Torso")}>
                <Image style={styles.torso} source={require('../../assets/Side/RightTorso.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clickHandler("Right Legs")}>
                <Image style={styles.legs} source={require('../../assets/Side/RightLegs.png')} />
            </TouchableOpacity>
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
        width: 155,
        height: 88,
        resizeMode: 'contain',
    },
    torso: {
        width: 360,
        height: 156,
        resizeMode: 'contain',
    },
    legs: {
        width: 365,
        height: 185,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    rotate: {
        width: 135,
        height: 88,
        resizeMode: 'contain',
    },
});

export default RightHomuncScreen;