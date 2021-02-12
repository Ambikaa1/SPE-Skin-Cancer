import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

const DATA = [
    {
        id: "gh",
        title: "L Head",
    },
    {
        id: "3k",
        title: "R Head",
    },
    {
        id: "g",
        title: "L Body",
    },
    {
        id: "g",
        title: "R Body",
    },
    {
        id: "g",
        title: "L Lower",
    },
    {
        id: "g",
        title: "R Lower",
    },
    {
        id: "g",
        title: "L Leg",
    },
    {
        id: "g",
        title: "R Leg",
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                //onPress={() => setSelectedId(item.id)}
                onPress={() => Alert.alert("hi")}
                style={{ backgroundColor }}
            />
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

export default App;