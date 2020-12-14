import React, {Component} from "react";
import { View, Text, StyleSheet, Button, Linking, TouchableOpacity, Image} from "react-native";

    // ShowDate = () => {
    //     var date = new Date().getDate();
    // }
    const HomeScreen = () => {
        return (
            <>
            <View style = {styles.head}>
                <Text style={styles.base}>
                    <Text style={styles.titleText}> Welcome Joe! </Text>
                </Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.base}>
                    <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
                        <Text style={{color: 'blue'}}>
                            Donate to SCaRF
                        </Text>
                    </TouchableOpacity>
                </Text>
                <Image source={require('../SCaRF_Logo.png')} />
            </View>
            </>
        );
    };

const styles = StyleSheet.create({
    head : {
        padding: 35, //instead of this we should find out the size of status bar
        alignItems: 'center',
    },
    body : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText : {
        fontSize: 20
    },
    base :{
        fontFamily: "monospace"
    }
});
 export default HomeScreen;
