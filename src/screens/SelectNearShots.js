import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable, Image } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("31.db");

const SelectNearShots = ({route, navigation }) => {
    const selectedFarShot                            = route.params.mole
    const [allNearShots      , setAllNearShots]      = useState([]);
    const [selectedNearShots , setSelectedNearShots] = useState([])
    const [selectedNum       , setSelectedNum]       = useState(0)

    //Get a list of all the near shot images for a particular mole entry
    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "SELECT near_shot, date FROM mole_entry WHERE mole_id = ?;",
                    [selectedFarShot.mole_id],
                    (_, { rows }) => setAllNearShots(rows._array)
                );
            }
        );
    }, []);

    const displayNearShots = ({ item }) => {
        let uri = item.near_shot
        let selected = selectedNearShots.includes(item)

        return(
            <View style = {styles.flatListRow}>
                <Pressable
                    style = {styles.image}
                    onPress     = {() => HandleMultipleSelection(item)}
                    onLongPress = {() => navigation.navigate("Image", { uri: item.near_shot })}
                >
                    <Image
                        style = {[styles.image, {borderWidth: 5}, selected ?  {opacity : 0.5, borderColor:  "#c708ff"} : {opacity: 1, borderColor:  "transparent"}]}
                        source = {{ uri: uri}}
                    />
                </Pressable>

                <View style = {styles.moleInfo}>
                    <Text style = {styles.dateText}>
                        Date Taken: {"\n"}{item.date}
                    </Text>
                </View>

            </View>
        );
    };

    const HandleMultipleSelection = (item) => {
        let nextSelectedImages = selectedNearShots

        if (nextSelectedImages.includes(item)) {
            nextSelectedImages = nextSelectedImages.filter(_item => _item !== item)
        }else {
            nextSelectedImages.push(item)
        }
        setSelectedNum(nextSelectedImages.length)
        setSelectedNearShots([...nextSelectedImages])

    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Select some images and continue!</Text>
            <Text style = {styles.subtitle}>Tap on a near shot to select it{'\n'}Hold your finger on an image to enlarge it</Text>
            <Text style={styles.selectCountText}>Currently selected: {selectedNum}</Text>

            <FlatList
                data = {allNearShots}
                extraData = {selectedNearShots}
                renderItem = {displayNearShots}
                keyExtractor = {() => `${Math.floor(Math.random() * 10000)}`}
            />

            <TouchableOpacity
                style={[styles.continueButtonStyle, selectedNum === 0 ?{backgroundColor: "#d3d3d3"} : {backgroundColor: "#76fd00"}]}
                onPress ={selectedNum === 0 ? null :() =>  {
                    navigation.navigate("SendEmail", {selectedNearShots: selectedNearShots, selectedFarShot: selectedFarShot})
                }}>
                <Text style = {styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.continueButtonStyle, {backgroundColor: "#fc0202"}]}
                onPress = {() => navigation.goBack()}
            >
                <Text style={styles.continueButtonText}>{"Go Back"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        height: 300,
       //width: 175,
    },
    dateText : {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    flatListRow: {
        flexDirection: "row",
        marginHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderTopColor: "#71A1D1",
        borderTopWidth: 5,
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 16,
    },
    selectCountText: {
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#71A1D1",
    },
    descriptionText: {
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    continueButtonStyle:{
        backgroundColor: "#71A1D1",
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    continueButtonText:{
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontSize: 20,
    },
    enlargeImage :{
        flex:1,
        resizeMode : 'cover',
        position : 'absolute'
    }
});

export default SelectNearShots;
