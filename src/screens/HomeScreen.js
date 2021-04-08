import React, { useEffect, useState, useRef } from "react";
import { View, SafeAreaView, Text, StyleSheet, Linking, TouchableOpacity, Image,
    Dimensions, ScrollView, Platform, FlatList } from "react-native";
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

const db = SQLite.openDatabase("24.db");

const HomeScreen = ({ navigation }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

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

    const [moles, setMoles] = useState([])

    const isFocused = useIsFocused();

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT name, nextUpdate, mole_id FROM mole ORDER BY nextUpdate;",
                    [],
                    (_, { rows }) => setMoles(rows._array));
            }
        );
    }, [isFocused]);

    console.log(moles)

    return (
        <SafeAreaView style = {styles.container}>

            <Text style = {styles.countdownText}>Upcoming mole photographs</Text>
            <FlatList
                data = {moles}
                renderItem = {MoleCountdown}
                keyExtractor = {item => `${item.mole_id}`}
                style = {styles.countdowns}
            />

            {/* <ScrollView> */}
                {/* <View style = {styles.circleContainer}>
                    <View style = {styles.circle} />
                    <Text style = {styles.circleText}>10 days until mole ARM 1</Text>
                </View> */}

                <TouchableOpacity style={{fontSize: 200, marginLeft: 10}} onPress={async () => {await schedulePushNotification();}}>
                    <Text style={{fontSize: 20, paddingVertical: 5}}>Press to schedule a notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: '2.5%', alignItems:'center', backgroundColor: "#71A1D1", borderRadius: 10}} onPress = {() => navigation.navigate("WhySCQOLITScreen")}>
                    <Text style={{fontSize: 20, paddingVertical: 5, color:'white'}}>Press to complete SCQOLIT survey</Text>
                </TouchableOpacity>

                <View style = {styles.logosContainer}>
                    <TouchableOpacity onPress = {() => Linking.openURL("https://www.skincancerresearch.org/what-we-do")}>
                        {/* <Text style = {styles.textAboveLogo}>About SCaRF</Text> */}
                        <Image style = {styles.scarfLogo} source = {require('../../assets/scarf_logo.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Linking.openURL("https://www.justgiving.com/scrf/donate/?utm_campaign=donate_purple&utm_content=scrf&utm_medium=buttons&utm_source=website_cid52056")}>
                        {/* <Text style = {styles.textAboveLogo}>Donate</Text> */}
                        <Image style = {styles.scarfLogo} source = {require('../../assets/justgiving_logo.png')} />
                    </TouchableOpacity>
                </View>
                {/*<View>*/}
                {/*        <TouchableOpacity onPress = {() => {*/}
                {/*            db.transaction(*/}
                {/*                tx => {*/}
                {/*                    tx.executeSql("select * from user;", [], (_, { rows }) =>*/}
                {/*                        console.log(rows)*/}
                {/*                    );*/}
                {/*                }*/}
                {/*            );*/}
                {/*        }}>*/}
                {/*        <Text>VIEW_USER</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            {/* </ScrollView> */}
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
        fontWeight: "bold"
    },
    countdowns: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    logosContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        paddingVertical: 10,
    },
    scarfLogo: {
        marginTop: 2,
        width: Dimensions.get("window").width / 2 - 15,
        height: Dimensions.get("window").width / 2 - 15,
        marginHorizontal: 5,
        borderRadius: 10
    }
});

export default HomeScreen;

// circleContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     paddingVertical: 10,
// },
// circle: {
//     marginTop: 10,
//     height: Dimensions.get("window").width - 120,
//     width: Dimensions.get("window").width - 120,
//     borderRadius: (Dimensions.get("window").width - 100) / 2,
//     borderColor: "#71A1D1",
//     borderWidth: 25,
// },
// circleText: {
//     fontSize: 30,
//     textAlign: "center",
//     width: Dimensions.get("window").width - 200,
//     position: "absolute"
// },
// textAboveLogo: {
//     marginTop: 15,
//     marginLeft: 5,
//     fontSize: 17,
//     // alignSelf: "center"
// },
