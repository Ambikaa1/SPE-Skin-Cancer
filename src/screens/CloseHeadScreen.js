import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image, Text} from "react-native";

const CloseHeadScreen = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("BodyPart", {bodyPart: bodyPart})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style = {styles.title}>Please click on the part of the diagram where your mole is located. </Text>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Top of the head")}>
                    <Image style={styles.top} source={require('../../assets/Front/ZoomTopHead.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Face")}>
                    <Image style={styles.head} source={require('../../assets/Front/ZoomFace.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Neck")}>
                    <Image style={styles.neck} source={require('../../assets/Front/ZoomNeck.png')} />
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
    top: {
        width: 350,
        height: 95,
        resizeMode: 'contain',
    },
    head: {
        width: 380,
        height: 212,
        resizeMode: 'contain',
    },
    neck: {
        width: 350,
        height: 85,
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

export default CloseHeadScreen;
