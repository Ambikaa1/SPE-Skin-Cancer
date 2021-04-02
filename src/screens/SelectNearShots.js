import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable, Image } from "react-native";
import * as SQLite from "expo-sqlite";



const db = SQLite.openDatabase("22.db");

const SelectNearShots = ({route, navigation }) => {
  /*  console.log("hello")
    console.log(route.params.currentSelection)*/
    const [entries, setEntries] = useState([]);
    //Get a list of all the near shot images for a particular mole entry
    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "SELECT near_shot, date FROM mole_entry WHERE mole_id = ?;",
                    [route.params.id],
                    (_, { rows }) => setEntries(rows._array)
                );
            }
        );
    }, []);

    const [selectedImages , setSelectedImages] = useState(route.params.currentSelection === undefined ? [] : route.params.currentSelection)
    const [selectedNum    , setSelectedNum]    = useState(selectedImages.length)
    const [enlargedImage  , setEnlargedImage ] = useState(null)


    const displayFarShots = ({ item }) => {
        let uri = item.near_shot
        let selected = selectedImages.includes(uri)

        return(
            <View style = {styles.flatListRow}>
                <Pressable
                    style = {styles.image}
                    onPress     = {() => HandleMultipleSelection(uri)}
                    onLongPress = {() => setEnlargedImage(uri)}
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

    const HandleMultipleSelection = (uri) => {
        let nextSelectedImages = selectedImages

        if (nextSelectedImages.includes(uri)) {
            nextSelectedImages = nextSelectedImages.filter(_uri => _uri !== uri)
        }else {
            nextSelectedImages.push(uri)
        }
        setSelectedNum(nextSelectedImages.length)
        setSelectedImages([...nextSelectedImages])

    }

    return (

        <View style={styles.container}>
            <Text style = {styles.title}>Tap the images to select them</Text>
            <Text style={styles.selectCountText}>Currently selected: {selectedNum}</Text>

            <FlatList
                data = {entries}
                extraData = {selectedImages}
                renderItem = {displayFarShots}
                keyExtractor = {() => `${Math.floor(Math.random() * 10000)}`}
            />

            <TouchableOpacity

                style={[styles.continueButtonStyle, selectedNum === 0 ?{backgroundColor: "#d3d3d3"} : null]}
                onPress = {() =>
                {route.params.updateSelection.updateSelection(route.params.id, selectedImages);
                    navigation.goBack()}
                }
            >
                <Text style={styles.continueButtonText}>{selectedNum ===0 ? "Select an image to continue" : "Continue"}</Text>
            </TouchableOpacity>

            {!(enlargedImage === null) && console.log("Image enlarged")}
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
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 22,
        fontWeight: "bold",
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
