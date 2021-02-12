import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Linking, TouchableOpacity, Image, Dimensions } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

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

            <View style = {styles.circleContainer}>
                <View style = {styles.circle} />
                <Text style = {styles.circleText}>10 days until mole ARM 1</Text>
            </View>
            
            <View style = {styles.logosContainer}>
                <TouchableOpacity onPress = {() => Linking.openURL("https://www.skincancerresearch.org/what-we-do")}>
                    <Text style = {styles.textAboveLogo}>About SCaRF</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/scarf_logo.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => Linking.openURL("https://www.justgiving.com/scrf/donate/?utm_campaign=donate_purple&utm_content=scrf&utm_medium=buttons&utm_source=website_cid52056")}>
                <Text style = {styles.textAboveLogo}>Donate</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/justgiving_logo.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator()

const HomeStack = () => {
    return(
      <Stack.Navigator
        screenOptions = {{
          headerStyle: styles.header,
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
            name = "HomeScreen"
            component = {HomeScreen}
            options = {{
                title: "Home",
            }}
        />
      </Stack.Navigator>
    );
  };

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#71A1D1",
    },
    container: {
        flex: 1
    },
    date: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: 10
    },
    welcome: {
        fontSize: 30,
        marginLeft: 10
    },
    circleContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    circle: {
        height: Dimensions.get("window").width - 100,
        width: Dimensions.get("window").width - 100,
        borderRadius: (Dimensions.get("window").width - 100) / 2,
        borderColor: "#71A1D1",
        borderWidth: 25,
    },
    circleText: {
        fontSize: 30,
        textAlign: "center",
        width: Dimensions.get("window").width - 200,
        position: "absolute"
    },
    logosContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        bottom: 10,
    },
    textAboveLogo: {
        marginLeft: 5,
        fontSize: 25,
        alignSelf: "center"
    },
    scarfLogo: {
        width: Dimensions.get("window").width / 2 - 15,
        height: Dimensions.get("window").width / 2 - 15,
        marginHorizontal: 5,
    }
});

export default HomeStack;
