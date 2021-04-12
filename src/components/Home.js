import React, { useEffect, useState, useRef } from "react";
import { View, SafeAreaView, Text, StyleSheet, Linking, TouchableOpacity, Image, Dimensions, Platform, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import * as SQLite from "expo-sqlite";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

import MoleCountdown from "../components/MoleCountdown";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const db = SQLite.openDatabase("28.db");

const Home = ({ navigation }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [moles, setMoles] = useState([])
    const notificationListener = useRef();
    const responseListener = useRef();
    const isFocused = useIsFocused();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });
        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT name, nextUpdate, mole_id FROM mole ORDER BY nextUpdate;",
                    [],
                    (_, { rows }) => setMoles(rows._array));
            }
        );
    }, [isFocused]);

    return (
        <SafeAreaView style = {styles.container}>
            {(moles.length != 0)
            ?
                <>
                    <Text style = {styles.countdownText}>Number of days until you need to take another picture of your mole</Text>
                    <FlatList
                        data = {moles}
                        renderItem = {MoleCountdown}
                        keyExtractor = {item => `${item.mole_id}`}
                        style = {styles.countdowns}
                    />
                </>
            :
                <Text style = {styles.noMoles}>
                    You haven't photographed any moles yet.
                    Click the camera icon at the bottom of the screen to begin photographing your moles.
                </Text>
            }

            <TouchableOpacity style={{fontSize: 200, marginLeft: 10}} onPress={async () => {await schedulePushNotification();}}>
                <Text style={{fontSize: 20, paddingVertical: 5}}>Press to schedule a notification</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity style={{marginHorizontal: '2.5%', alignItems:'center', backgroundColor: "#71A1D1", borderRadius: 10}} onPress = {() => navigation.navigate("WhySCQOLITScreen")}>*/}
            {/*    <Text style={{fontSize: 20, paddingVertical: 5, color:'white'}}>Press to complete SCQOLIT survey</Text>*/}
            {/*</TouchableOpacity>*/}

            <View style = {styles.logosContainer}>
                <TouchableOpacity onPress = {() => Linking.openURL("https://www.skincancerresearch.org/what-we-do")}>
                    <Text style = {styles.textAboveLogo}>About SCaRF</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/scarf_logo.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => Linking.openURL("https://www.justgiving.com/scrf/donate/?utm_campaign=donate_purple&utm_content=scrf&utm_medium=buttons&utm_source=website_cid52056")}>
                    <Text style = {styles.textAboveLogo}>Donate to SCaRF</Text>
                    <Image style = {styles.scarfLogo} source = {require('../../assets/justgiving_logo.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

//Push notification functions - straight from the expo documentation.
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Take another picture of your mole!',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdownText: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "bold",
        marginRight: 10,
    },
    countdowns: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    noMoles: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 17,
        flex: 1,
    },
    logosContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        paddingVertical: 10,
    },
    scarfLogo: {
        width: Dimensions.get("window").width / 2 - 15,
        height: Dimensions.get("window").width / 2 - 15,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    textAboveLogo: {
        fontSize: 17,
        marginHorizontal: 5,
        marginBottom: 5,
        fontWeight: "bold",
        // textAlign: "center"
        // flexWrap: 'wrap',
        // color: "#3366ff",
        // paddingRight: 45,
        // textDecorationLine: 'underline'
    }
});

export default Home;