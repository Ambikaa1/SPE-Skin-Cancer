import React, { useEffect, useState, useRef } from "react";
import { View, SafeAreaView, Text, StyleSheet, Linking, TouchableOpacity, Image,
    Dimensions, ScrollView, Platform, Button} from "react-native";
import { useIsFocused } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});


const db = SQLite.openDatabase("17.db");

const HomeScreen = ({ navigation }) => {
    const [currentDate, setCurrentDate] = useState("");
    const [name, setName] = useState("");

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

    const isFocused = useIsFocused();

    useEffect(() => {
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = daysOfWeek[new Date().getDay()]
        let date = new Date().getDate();
        let month = months[new Date().getMonth()];
        setCurrentDate(day + " " + date + " " + month);

        db.transaction(
            tx => {
                tx.executeSql("select first_name from user;", [], (_, { rows }) =>
                    setName(" " + rows._array[0].first_name)
                );
            }
        );
    }, [isFocused]);

    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <View style = {styles.top}>
                    <View style = {styles.toptext}>
                        <Text style = {styles.date}>{currentDate}</Text>
                        <Text style = {styles.welcome}>Welcome{name}!</Text>
                    </View>
                    <TouchableOpacity onPress = {() => navigation.navigate("UserScreen")}>
                        <Ionicons name = "person-circle" size = {50} />
                    </TouchableOpacity>
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
                {/*Button that triggers a notification.*/}
                <TouchableOpacity style={{fontSize: 200}}
                                  onPress={async () => {await schedulePushNotification();}}>
                    <Text style={{fontSize: 20, paddingVertical: 5}}>Press to schedule a notification</Text>
                </TouchableOpacity>
            </ScrollView>
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
    top: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    date: {
        fontSize: 25,
        marginLeft: 10,
        marginTop: 10,
        paddingVertical: 10,
    },
    welcome: {
        fontSize: 30,
        marginLeft: 10
    },
    circleContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingVertical: 10,
    },
    circle: {
        marginTop: 10,
        height: Dimensions.get("window").width - 120,
        width: Dimensions.get("window").width - 120,
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
        paddingVertical: 10,
    },
    textAboveLogo: {
        marginTop: 15,
        marginLeft: 5,
        fontSize: 25,
        alignSelf: "center"
    },
    scarfLogo: {
        marginTop: 2,
        width: Dimensions.get("window").width / 2 - 15,
        height: Dimensions.get("window").width / 2 - 15,
        marginHorizontal: 5,
    }
});

export default HomeScreen;
