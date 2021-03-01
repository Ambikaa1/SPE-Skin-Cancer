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

const db = SQLite.openDatabase("11.db")
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
              ? 'ios-send'
              : 'ios-send-outline'
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
      "CREATE TABLE IF NOT EXISTS user (user_id INTEGER PRIMARY KEY NOT NULL UNIQUE, first_name TEXT, last_name TEXT, date_of_birth TEXT);",
      [],
      null,
      (t, error) => {console.log(error);}
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS sub_body_part (name TEXT PRIMARY KEY NOT NULL UNIQUE, body_part TEXT NOT NULL);",
      [],
      null,
      (t, error) => {console.log(error);}
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS mole (mole_id INTEGER PRIMARY KEY NOT NULL UNIQUE, name TEXT, sub_body_part TEXT REFERENCES sub_body_part(name) NOT NULL);",
      [],
      null,
      (t, error) => {console.log(error);}
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS mole_entry (entry_id INTEGER PRIMARY KEY NOT NULL UNIQUE, date TEXT NOT NULL, mole_id INTEGER REFERENCES mole(mole_id) NOT NULL);",
      [],
      null,
      (t, error) => {console.log(error);}
    );
    tx.executeSql("INSERT INTO user (first_name, last_name, date_of_birth) VALUES (null, null, null);", []);
    tx.executeSql("insert into sub_body_part (name, body_part) values ('top_left_foot', 'left_foot');", []);
    tx.executeSql("insert into sub_body_part (name, body_part) values ('middle_left_foot', 'left_foot');", []);
    tx.executeSql("insert into sub_body_part (name, body_part) values ('toes_left_foot', 'left_foot');", []);
  });
  console.log("Database test");

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

