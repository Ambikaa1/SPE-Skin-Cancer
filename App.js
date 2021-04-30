import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";

import HomeStack from "./src/navigation/HomeStack";
import InfoStack from "./src/navigation/InfoStack";
import PhotoStack from "./src/navigation/PhotoStack"
import DiaryStack from "./src/navigation/DiaryStack";
import SendStack from "./src/navigation/SendStack";

const db = SQLite.openDatabase("30.db");
db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    console.log('Foreign keys turned on')
);

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Info') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    } else if (route.name === "Photo") {
                        iconName = focused
                            ? 'camera'
                            : 'camera-outline'
                    } else if (route.name === "Diary") {
                        iconName = focused
                            ? 'ios-book'
                            : 'ios-book-outline'
                    } else if (route.name === "Send") {
                        iconName = focused
                            ? 'ios-mail'
                            : 'ios-mail-outline'
                    }
                    return <Ionicons name = {iconName} size = {size} color = {color} />;
                },
            }
        )}
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: "#71A1D1"
            }
        }}
            >
            <Tab.Screen name = "Home" component = {HomeStack} />
            <Tab.Screen name = "Info" component = {InfoStack} />
            <Tab.Screen name = "Photo" component = {PhotoStack} />
            <Tab.Screen name = "Diary" component = {DiaryStack} />
            <Tab.Screen name = "Send" component = {SendStack} />
        </Tab.Navigator>
    );
};

const App = () => {
    db.transaction(tx => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS user (user_id INTEGER PRIMARY KEY NOT NULL UNIQUE, first_name TEXT, last_name TEXT, date_of_birth TEXT, welcome_seen INTEGER, history TEXT, family_history TEXT, sunburn TEXT, sunbed TEXT, work_outside TEXT, immunosuppressed TEXT, number_of_moles TEXT, chemical_exposure TEXT, radiation_exposure TEXT);",
            [],
            null,
            (t, error) => {console.log(error);}
        );
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS mole (mole_id INTEGER PRIMARY KEY NOT NULL UNIQUE, name TEXT, comments TEXT, far_shot TEXT, sub_body_part TEXT, lastUpdated TEXT, nextUpdate INTEGER);",
            [],
            null,
            (t, error) => {console.log(error);}
        );
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS mole_entry (entry_id INTEGER PRIMARY KEY NOT NULL UNIQUE, date TEXT NOT NULL, near_shot TEXT, mole_id INTEGER REFERENCES mole(mole_id) NOT NULL);",
            [],
            null,
            (t, error) => {console.log(error);}
        );
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS survey (survey_id INTEGER PRIMARY KEY NOT NULL UNIQUE, score INTEGER);",
            [],
            null,
            (t, error) => {console.log(error);}
        );
        tx.executeSql("INSERT INTO user (first_name, last_name, date_of_birth, welcome_seen) VALUES (null, null, null, 0);", []);
        tx.executeSql("INSERT INTO survey (score) VALUES (0);", []);
    });
    console.log("Database test");

    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

export default App;

