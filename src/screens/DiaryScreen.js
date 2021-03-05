import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase("17.db");

const DiaryScreen = () => {
    const [moles, setMoles] = useState([]);
    const [refresh, setRefresh] = useState(0);

    const displayImages = ({ item }) => {
        console.log(item);
        return(
            <View style = {styles.nearFarShot}>
                <Image 
                    style = {styles.image}
                    source = {{ uri: item.far_shot }} 
                />
                <Text>{item.name}</Text>
            </View>
        );
    };

    // const getIdsFromEntries = entries => {
    //     let ids = [];
    //     for (let i = 0; i < entries.length; i++) {
    //         ids.push(entries[i].entry_id);
    //     }
    //     return ids;
    // }

    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT name, far_shot FROM mole;", [], (_, { rows }) => setMoles(rows._array));
            }
        );
    }, [refresh]);

    return (
        <View style = {styles.container}>
            <Text style={styles.subtitle}>Choose a mole to view pictures:</Text>
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('Mole 1 Pressed')}>
                    <Text>
                        <Text style={styles.buttonText}>Mole 1</Text>
                        <Text>
                            <Feather style={styles.imageContainer} name="image" size={24} color="black" />
                        </Text>
                    </Text>
                </TouchableOpacity>
                <Text>

                </Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('Mole 2 Pressed')}>
                    <Text>
                        <Text style={styles.buttonText}>Mole 2</Text>
                        <Text>
                            <Feather style={styles.imageContainer} name="image" size={24} color="black" />
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress = {() => setRefresh(refresh + 1)}>
                <Text style = {{ fontSize: 30 }}>Refresh</Text>
            </TouchableOpacity>
            <FlatList 
                data = {moles}
                renderItem = {displayImages}
                keyExtractor = {() => `${Math.floor(Math.random() * 10000)}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subtitle: {
        marginTop: 16,
        paddingVertical: 8,
        paddingLeft: 10,
        borderRadius: 6,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#71A1D1",
    },
    buttonText: {
        fontSize: 20,
    },
    imageContainer: {
        fontSize: 50,
        textAlign: 'right',
    },
    image: {
        height: 200,
        width: 100
    },
    nearFarShot: {
        flexDirection: "row"
    }
});

export default DiaryScreen;
