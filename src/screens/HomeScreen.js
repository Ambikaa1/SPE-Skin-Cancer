import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Linking, TouchableOpacity, Image, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Homunculous from "./Homunculous";

//import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";

// ShowDate = () => {
//     var date = new Date().getDate();
// }


// {/*<Button*/}
// {/*    title="Go to homunculous"*/}
// {/*    onPress={() => navigation.navigate('Homunculous')}*/}
// {/*/>*/}
// {/*<NavigationContainer>*/}
// {/*</NavigationContainer>*/}

const HomeScreen = () => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = daysOfWeek[new Date().getDay()]
        let date = new Date().getDate();
        let month = months[new Date().getMonth()];
        setCurrentDate(day + " " + date + " " + month);
    }, []);

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.toptext}>
                <Text style = {styles.date}>{currentDate}</Text>
                <Text style = {styles.welcome}>Welcome Joe!</Text>
            </View>

            
            <View style = {styles.logosContainer}>
                <TouchableOpacity>
                    <Text style = {styles.textAboveLogo}>About SCaRF</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/scarf_logo.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {styles.textAboveLogo}>Donate</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/justgiving_logo.png')} />
                </TouchableOpacity>
            </View>
            <StatusBar style = "dark" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    date: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 10
    },
    welcome: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 10
    },
    logosContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 5,
        bottom: 10,
        position: "absolute"
    },
    textAboveLogo: {
        marginLeft: 5,
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    },
    scarfLogo: {
        width: Dimensions.get("window").width / 2 - 15,
        height: Dimensions.get("window").width / 2 - 15,
        marginHorizontal: 5,
    }
});

export default HomeScreen;
