import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions} from "react-native";

const clickHandler = (bodyPart) => {
    //setBodyPart(e)
    console.log(bodyPart, "homunc log")
    //navigation.navigate("FrontHomunc", {paramKey: bodyPart})
}

const FrontHomuncScreen = ({}) => {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => clickHandler("Neck")}>
                <Image style={styles.tinyNeck} source={require('../../assets/New/Head.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clickHandler("Neck")}>
                <Image style={styles.tinyNeck} source={require('../../assets/New/ChestTop.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clickHandler("Neck")}>
                <Image style={styles.chest} source={require('../../assets/New/FrontMiddle.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clickHandler("Neck")}>
                <Image style={styles.chest} source={require('../../assets/New/FrontBottom.png')} />
            </TouchableOpacity>
            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{flex: 0.35}}>
                    <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                        <Image style={styles.leg} source={require('../../assets/New/RightUL.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.35}}>
                    <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                        <Image style={styles.leg} source={require('../../assets/New/LeftUL.png')} />
                    </TouchableOpacity>
                </View>
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
        //alignSelf: 'flex-end',
        //width: Dimensions.get("window").width,
        width: 120,
        height: 75,
        resizeMode: 'contain',
    },

});

export default FrontHomuncScreen;