import React, { useState } from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Alert, View} from "react-native";
import Homunculous from "./Homunculous";

const DATA = [
    {
        id: "Left Head",
        title: "Left Head",
    },
    {
        id: "Right Head",
        title: "Right Head",
    },
    {
        id: "Left upper body",
        title: "Left Body",
    },
    {
        id: "Right upper body",
        title: "Right Body",
    },
    {
        id: "Left lower body",
        title: "Left Lower",
    },
    {
        id: "Right lower body",
        title: "Right Lower",
    },
    {
        id: "Left leg",
        title: "Left Leg",
    },
    {
        id: "Right leg",
        title: "Right Leg",
    },
    {
        id: "Left foot",
        title: "Left Foot",
    },
    {
        id: "Right foot",
        title: "Right Foot",
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const Homunc2 = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <>
            {/*<View style = {styles.head}>*/}
            {/*    <Text style = {styles.base}>*/}
            {/*        <Text style = {styles.titleText}> Select a body part </Text>*/}
            {/*    </Text>*/}
            {/*</View>*/}
            <Item
                item={item}
                //onPress={() => setSelectedId(item.id)}
                onPress={() => Alert.alert("Mole area: " + item.id)}
                style={{ backgroundColor }}
            />
            </>
        );
    };

    return (

        <SafeAreaView style={styles.container}>
            <FlatList
                //columnWrapperStyle={styles.tagView}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                numColumns="2"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        //marginVertical: 8,
        //marginHorizontal: 16,

    },
    title: {
        fontSize: 32,
    },
//  tagView: {
//  flexWrap: "wrap"
//},
});

export default Homunc2;