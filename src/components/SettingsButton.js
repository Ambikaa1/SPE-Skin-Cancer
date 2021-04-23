import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsButton = () => {
    const navigation = useNavigation();

    return (
        <View style = {styles.top}>
            <TouchableOpacity onPress = {() => navigation.navigate("UserScreen")}>
                <FontAwesome5 name = "user-edit" size = {27} style = {styles.button} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        color: "white",
        marginLeft: 10,
    }
});

export default SettingsButton;

