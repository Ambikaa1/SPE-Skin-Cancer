import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";

const LeftHomuncScreen = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("SideBodyPart", {bodyPart: bodyPart})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Side/BackView.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Head or Neck")}>
                    <Image style={styles.head} source={require('../../assets/Side/LeftHead.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
                    <Image style={styles.rotate} source={require('../../assets/Side/FrontView.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
            <TouchableOpacity onPress={() => clickHandler("Left Torso")}>
                <Image style={styles.torso} source={require('../../assets/Side/LeftTorso.png')} />
            </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
            <TouchableOpacity onPress={() => clickHandler("Left Legs")}>
                <Image style={styles.legs} source={require('../../assets/Side/LeftLegs.png')} />
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
    },
    rotate: {
        width: 135,
        height: 88,
        resizeMode: 'contain',
    },
});

export default LeftHomuncScreen;
