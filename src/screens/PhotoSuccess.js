import React, { useState, useEffect, useRef } from 'react';
import {StyleSheet, Platform, View, Text, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const PhotoSuccess = ({navigation}) => {
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

    return (
        <View style = {styles.container}>
            <Text style = {styles.success}>Your mole photos have been saved!</Text>
            <Text style = {styles.question}>Press the button below if you would like to schedule a notification to remind
            you to take a new picture of this mole in 30 days.</Text>
            <TouchableOpacity style = {styles.doneBox} onPress={async () => {
                await schedulePushNotification();
            }}>
                <Text style = {styles.doneText}>
                    Press to schedule a notification
                </Text>
            </TouchableOpacity>
            <Text style={styles.questionBold}>Would you now like to complete the SCQOLIT survey? </Text>
            <Text style={styles.question}>The SCQOLIT is an optional questionnaire for people who have been
                diagnosed with skin cancer. </Text>
            {/*{'\n\n'}This questionnaire is*/}
            {/*strictly optional and you can change your answers by answering it again.*/}
            {/*{'\n\n'}Your latest answers will be attached to any email you send through the app.*/}
            {/*</Text>*/}
            <TouchableOpacity style = {styles.YesNoBox} onPress={() => navigation.navigate("WhySCQOLITScreen")}>
                <Text style = {styles.doneText}>
                    Yes, take me to the SCQOLIT survey
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.YesNoBox} onPress={() => navigation.navigate("Swiping")}>
                <Text style = {styles.doneText}>No, take me back to the body outline</Text>
            </TouchableOpacity>
        </View>
    )
};


async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Mole Update 🔄",
            body: 'Go to the SCaRF app to take a new picture of your mole.',
        },
        trigger: { seconds : 2592000 },
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
        Notifications.setNotificationChannelAsync('default', {
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
    success: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 10,
    },
    questionBold: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 17,
        fontWeight: "bold"
    },
    question: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 17,
    },
    bodyText:{
        color: "black",
        fontSize: 18,
        paddingHorizontal:5,
        paddingVertical:5,
    },
    YesNoBox: {
        backgroundColor: "#71A1D1",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        width: "95%",
    },
    doneText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
        marginVertical: 15,
        alignSelf:'center',
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 25,
        bottom: 10,
    },
});

export default PhotoSuccess;
