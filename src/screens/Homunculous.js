import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image, Button, Alert } from "react-native";

const Separator = () => (
    <View style={styles.separator} />
);

const Homunculous = () => {
    return (
        <>
            <View style = {styles.head}>
                <Text style = {styles.base}>
                    <Text style = {styles.titleText}> Select a body part </Text>
                </Text>
            </View>
            <Separator />
            <Text style={styles.bodyText}> When you have selected a body part, a message will show you what you chose! </Text>
            <Separator />
            <View>
            <Button
                title="Face"
                onPress={() => Alert.alert('Selected mole area: Face')}
            />
            <Separator />
            <Button
                title="Arm"
                onPress={() => Alert.alert('Selected mole area: Arm')}
            />
            <Separator />
            <Button
                title="Press me"
                disabled
                // onPress={() => Alert.alert('Cannot press this one')}
            />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    head: {
        padding: 35, //instead of this we should find out the size of status bar
        alignItems: 'center',
    },
    body: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20
    },
    bodyText: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    base: {
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Homunculous;