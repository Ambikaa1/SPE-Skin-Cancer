import React, { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoItem from "../components/InfoItem";

// This is temporary
const data = [{title: "What is skin cancer?", children: [{title: "The common types of skin cancer", children: [{title: "Basal cell carcinoma"}, {title: "Squamous cell carcinoma"}, {title: "Malignant melanoma"}]}, {title: "How skin cancers are triggered"}, {title: "What skin cancer looks like"}, {title: "Treatments for skin cancer"}]},{title: "How do I monitor my moles?",},{title: "What is the charity SCaRF?",},{title: "How do I donate?",},{title: "Who to talk to about skin cancer",}]

const InfoListScreen = ({ navigation, route }) => {
    // This is temporary
    let toDisplay
    if (typeof route.params == "undefined") {
        toDisplay = data
    } else {
        toDisplay = route.params.children
    }

    const calculateNavigationFunction = ({ title, children }) => {
        if (typeof children == "undefined") {
            return navigation.navigate("InfoScreen", {title,})
        }
        return navigation.push("InfoList", {children,})
    };

    const [term, setTerm] = useState("")
    return (
        <View style = {styles.container}>
            <SearchBar
                term = {term}
                onTermChange = {setTerm}
                onTermSubmit = {() => {}}
            />
            <FlatList
                data = {toDisplay}
                keyExtractor = {(item) => item.title}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity onPress = {() => calculateNavigationFunction(item)}>
                            <InfoItem name = {item.title}/>
                        </TouchableOpacity>
                    );
                }}
            />
            <TouchableOpacity onPress = {() => navigation.navigate("WhySCQOLITScreen")}>
                    <InfoItem name = {"Complete the SCQOLIT survey"}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate("StorageScreen")}>
                <InfoItem name = {"STORAGE"}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default InfoListScreen;
