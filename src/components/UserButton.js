import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const UserButton = () => {
    const navigation = useNavigation();

    return (
        <View style = {styles.top}>
            <TouchableOpacity onPress = {() => navigation.navigate("UserScreen")}>
                <Ionicons name = "person-circle" size = {35} style = {styles.button} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        color: "white",
        marginLeft: 5
    }
});

export default UserButton;

