import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'

const SwipingTestScreen = ({navigation}) => {
    return (
        <Swiper style={styles.wrapper} showsButtons loop={false}>
            <View style={styles.slide1}>
                <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
                    <Image source={require('../../assets/Back/Front3.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.slide1}>
                <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>
                    <Image source={require('../../assets/Back/Left3.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.slide1}>
                <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
                    <Image source={require('../../assets/Back/Back3.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.slide1}>
                <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
                    <Image source={require('../../assets/Back/Right3.png')} />
                </TouchableOpacity>
            </View>
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
});

export default SwipingTestScreen;