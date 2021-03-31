import React from 'react'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'

const SwipingTestScreen = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("SideBodyPart", {bodyPart: bodyPart})
    }
    return (
        <Swiper style={styles.wrapper} showsButtons loop={false}>
            <View style={styles.slide1}>
                <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
                    <Image source={require('../../assets/Back/Front3.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView persistentScrollbar={true} style={styles.scrollView}>
                <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
                <Text style = {styles.title}>Swipe left or right, or click on the buttons to navigate to the different views. </Text>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>
                        <Image style={styles.rotate} source={require('../../assets/Back/Left3.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
                        <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
                        <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => clickHandler("Right Head or Neck")}>
                        <Image style={styles.head} source={require('../../assets/Side/RHead.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => clickHandler("Right Torso")}>
                        <Image style={styles.torso} source={require('../../assets/Side/RTorso.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => clickHandler("Right Legs")}>
                        <Image style={styles.legs} source={require('../../assets/Side/RLegs.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView persistentScrollbar={true} style={styles.scrollView}>
                <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
                <Text style = {styles.title}>Swipe left or right, or click on the buttons to navigate to the different views. </Text>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
                        <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
                        <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
                        <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => clickHandler("Left Head or Neck")}>
                        <Image style={styles.head} source={require('../../assets/Side/LHead.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => clickHandler("Left Torso")}>
                        <Image style={styles.torso} source={require('../../assets/Side/LTorso.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexbox}>
                    <TouchableOpacity onPress={() => clickHandler("Left Legs")}>
                        <Image style={styles.legs} source={require('../../assets/Side/LLegs.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Swiper>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
    },
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    scrollView: {
        backgroundColor: 'white',
    },
    flexbox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    head: {
        width: 350,
        height: 99,
        resizeMode: 'contain',
    },
    torso: {
        width: 300,
        height: 220,
        resizeMode: 'contain',
    },
    legs: {
        width: 360,
        height: 245,
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
});

export default SwipingTestScreen;