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
            <View style={{backgroundColor: 'pink'}}>
                <TouchableOpacity onPress={() => clickHandler("Neck")}>
                    <Image style={styles.tinyNeck} source={require('../../assets/New/Head.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("chest")}>
                    <Image style={styles.tinyNeck} source={require('../../assets/New/ChestTop.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("front")}>
                    <Image style={styles.chest} source={require('../../assets/New/FrontMiddle.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("bottom")}>
                    <Image style={styles.chest} source={require('../../assets/New/FrontBottom.png')} />
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                    <Image style={styles.leg} source={require('../../assets/New/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                    <Image style={styles.leg} source={require('../../assets/New/LeftUL.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                    <Image style={styles.leg} source={require('../../assets/New/RightLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Knee")}>
                    <Image style={styles.leg} source={require('../../assets/New/LeftLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                    <Image style={styles.foot} source={require('../../assets/New/RightFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Knee")}>
                    <Image style={styles.foot} source={require('../../assets/New/LeftFoot.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tinyNeck: {
        width: Dimensions.get("window").width,
        height: 100,
        resizeMode: 'contain',
    },
    chest: {
        width: Dimensions.get("window").width,
        height: 59,
        resizeMode: 'contain',
    },
    leg: {
        width: 140,
        height: 93,
        resizeMode: 'contain',
    },
    foot: {
        width: 138,
        height: 49,
        resizeMode: 'contain',
    },

});

export default FrontHomuncScreen;