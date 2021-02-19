import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SQLite from "expo-sqlite";
import HomeStack from "./src/screens/HomeScreen";
import InfoStack from "./src/screens/InfoListScreen";
import CameraScreen from "./src/screens/CameraScreen";
import DiaryScreen from "./src/screens/DiaryScreen";
import SendScreen from "./src/screens/SendScreen";
import PhotoStack from "./src/screens/PhotoScreen"

const Tab = createBottomTabNavigator();

const db = SQLite.openDatabase("6.db")
db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
);

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {HomeStack} />
      <Tab.Screen name = "Info" component = {InfoStack} />
      <Tab.Screen name = "Camera" component = {CameraScreen} />
      <Tab.Screen name = "Diary" component = {DiaryScreen} />
      <Tab.Screen name = "Send" component = {SendScreen} />
      <Tab.Screen name = "Photo" component = {PhotoStack} />
    </Tab.Navigator>
  );
};

const App = () => {
  db.transaction(tx => {
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
      "CREATE TABLE IF NOT EXISTS mole_entry (entry_id INTEGER PRIMARY KEY NOT NULL UNIQUE, date TEXT NOT NULL, far_shot_file TEXT NOT NULL, near_shot_file TEXT NOT NULL, mole_id INTEGER REFERENCES mole(mole_id) NOT NULL);",
      [],
      null,
      (t, error) => {console.log(error);}
    );
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

