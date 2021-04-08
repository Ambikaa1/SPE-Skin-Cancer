import React from 'react'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'

const RightBody = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("SideBodyPart", {bodyPart: bodyPart, side: "Right"})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
            <Text style = {styles.title}>Swipe left or right to navigate to the different views. </Text>
            {/*<View style={styles.flexbox}>*/}
            {/*    <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>*/}
            {/*        <Image style={styles.rotate} source={require('../../assets/Back/Left3.png')} />*/}
            {/*    </TouchableOpacity>*/}
            {/*    <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>*/}
            {/*        <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />*/}
            {/*    </TouchableOpacity>*/}
            {/*    <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>*/}
            {/*        <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
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
    )
}

const LeftBody = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        navigation.navigate("SideBodyPart", {bodyPart: bodyPart, side: "Left"})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
            <Text style = {styles.title}>Swipe left or right to navigate to the different views. </Text>
            {/*<View style={styles.flexbox}>*/}
            {/*    <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>*/}
            {/*        <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />*/}
            {/*    </TouchableOpacity>*/}
            {/*    <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>*/}
            {/*        <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />*/}
            {/*    </TouchableOpacity>*/}
            {/*    <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>*/}
            {/*        <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
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
    )
}

const FrontBody = ({navigation}) => {
    const clickHandler = (bodyPart, highlight) => {
        navigation.navigate("BodyPart", {bodyPart: bodyPart, highlight: highlight, side: "Front"})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
            <Text style = {styles.title}>Swipe left or right to navigate to the different views. </Text>
            <Text></Text>
            {/*<View style={styles.flexbox}>*/}
                {/*<TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>*/}
                {/*    <Image style={styles.rotate} source={require('../../assets/Back/Left3.png')} />*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>*/}
                {/*    <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>*/}
                {/*    <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />*/}
                {/*</TouchableOpacity>*/}
            {/*</View>*/}
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => navigation.navigate("CloseHeadScreen")}>
                    <Image style={styles.fronthead} source={require('../../assets/Front/Head.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.frontarm} source={require('../../assets/Front/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso", "This is the area highlighted in blue")}>
                    <Image style={styles.frontchest} source={require('../../assets/Front/ChestTop.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.frontarm} source={require('../../assets/Front/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.frontlowerArm} source={require('../../assets/Front/RightLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso", "This is the area highlighted in blue")}>
                    <Image style={styles.frontbody} source={require('../../assets/Front/FrontMiddle.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.frontlowerArm} source={require('../../assets/Front/LeftLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Volar Right Hand")}>
                    <Image style={styles.fronthand} source={require('../../assets/Front/RightHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso", "This is the area highlighted in blue")}>
                    <Image style={styles.frontbody} source={require('../../assets/Front/FrontLower.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Volar Left Hand")}>
                    <Image style={styles.fronthand} source={require('../../assets/Front/LeftHand.png')} />
                </TouchableOpacity>
            </View>
            <View style = {styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.frontleg} source={require('../../assets/Front/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.frontleg} source={require('../../assets/Front/LeftUL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.frontlowerLeg} source={require('../../assets/Front/RightLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.frontlowerLeg} source={require('../../assets/Front/LeftLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Right Foot")}>
                    <Image style={styles.frontfoot} source={require('../../assets/Front/RightFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Left Foot")}>
                    <Image style={styles.frontfoot} source={require('../../assets/Front/LeftFoot.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const BackBody = ({navigation}) => {
    const clickHandler = (bodyPart, highlight) => {
        navigation.navigate("BackBodyPart", {bodyPart: bodyPart, highlight: highlight, side: "Back"})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
            <Text style = {styles.title}>Swipe left or right to navigate to the different views. </Text>
            <Text></Text>
            {/*<View style={styles.flexbox}>*/}
            {/*    <Image style={styles.rotate} source={require('../../assets/Back/Left3.png')} />*/}
            {/*    <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />*/}
            {/*    <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />*/}
            {/*</View>*/}
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Head or Neck")}>
                    <Image style={styles.backhead} source={require('../../assets/Back/Head.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.backarm} source={require('../../assets/Back/LeftUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Back")}>
                    <Image style={styles.backchest} source={require('../../assets/Back/BackTorso2.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.backarm} source={require('../../assets/Back/RightUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.backlowerArm} source={require('../../assets/Back/LeftLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Back")}>
                    <Image style={styles.backbody} source={require('../../assets/Back/LowerTorso2.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm", "This is the area highlighted in blue")}>
                    <Image style={styles.backlowerArm} source={require('../../assets/Back/RightLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Left Hand")}>
                    <Image style={styles.backhand} source={require('../../assets/Back/LH3.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.backleg} source={require('../../assets/Back/LeftUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.backleg} source={require('../../assets/Back/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Right Hand")}>
                    <Image style={styles.backhand} source={require('../../assets/Back/RH3.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.backlowerLeg} source={require('../../assets/Back/LeftLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg", "This is the area highlighted in blue")}>
                    <Image style={styles.backlowerLeg} source={require('../../assets/Back/RightLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Plantar Surface Left Foot")}>
                    <Image style={styles.backfoot} source={require('../../assets/Back/LeftFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Plantar Surface Right Foot")}>
                    <Image style={styles.backfoot} source={require('../../assets/Back/RightFoot.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const SwipingHomuncScreen = ({navigation}) => {
    return (
        <Swiper style={styles.wrapper}
                showsButtons loop={true}
                showsPagination = {true}>
            <View>
                <FrontBody navigation = {navigation} />
            </View>
            <View>
                <RightBody navigation = {navigation} />
            </View>
            <View>
                <LeftBody navigation = {navigation} />
            </View>
            <View>
                <BackBody navigation = {navigation} />
            </View>
        </Swiper>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: "white"
    },
    wrapper: {
        backgroundColor: "white",
    },
    // slide1: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#9DD6EB'
    // },
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
        paddingLeft: 5,
    },
    fronthead: {
        width: 115,
        height: 95,
        resizeMode: 'contain',
    },
    frontarm: {
        width: 75,
        height: 100,
        resizeMode: 'contain',
    },
    frontchest: {
        width: 110,
        height: 100,
        resizeMode: 'contain',
    },
    frontlowerArm: {
        width: 76,
        height: 58,
        resizeMode: 'contain',
    },
    frontbody: {
        width: 109,
        height: 57,
        resizeMode: 'contain',
    },
    fronthand: {
        width: 69,
        height: 55,
        resizeMode: 'contain',
    },
    frontleg: {
        width: 137,
        height: 87,
        resizeMode: 'contain',
    },
    frontlowerLeg: {
        width: 133,
        height: 90,
        resizeMode: 'contain',
    },
    frontfoot: {
        width: 138,
        height: 50,
        resizeMode: 'contain',
    },
    backhead: {
        width: 115,
        height: 100,
        resizeMode: 'contain',
    },
    backarm: {
        width: 90,
        height: 100,
        resizeMode: 'contain',
    },
    backchest: {
        width: 94,
        height: 100,
        resizeMode: 'contain',
    },
    backlowerArm: {
        width: 82,
        height: 48,
        resizeMode: 'contain',
    },
    backbody: {
        width: 103,
        height: 49,
        resizeMode: 'contain',
    },
    backhand: {
        width: 80,
        height: 59,
        resizeMode: 'contain',
    },
    backleg: {
        width: 55,
        height: 130,
        resizeMode: 'contain',
    },
    backlowerLeg: {
        width: 130,
        height: 70,
        resizeMode: 'contain',
    },
    backfoot: {
        width: 140,
        height: 67,
        resizeMode: 'contain',
    },
});

export default SwipingHomuncScreen;