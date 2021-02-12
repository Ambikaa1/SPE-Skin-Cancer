import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homunculous from "./Homunculous";

//import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";

// ShowDate = () => {
//     var date = new Date().getDate();
// }



const HomeScreen = () => {
    return (
        <>
            {/*<Button*/}
            {/*    title="Go to homunculous"*/}
            {/*    onPress={() => navigation.navigate('Homunculous')}*/}
            {/*/>*/}
            {/*<NavigationContainer>*/}

            {/*</NavigationContainer>*/}

            <View style = {styles.head}>
                <Text style = {styles.base}>
                    <Text style = {styles.titleText}> Welcome Joe! </Text>
                </Text>
            </View>
            <View style = {styles.body}>
                <Text style = {styles.base}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.skincancerresearch.org/what-we-do')}>
                        <Text style = {{color: 'blue'}}> Donate to SCaRF </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source = {require('../../assets/SCaRF_Logo.png')} />
                    </TouchableOpacity>
                </Text>
            </View>
            {/*<View>*/}
            {/*    <Image source={require('../../assets/SCaRF_Logo.png')}  />*/}
            {/*</View>*/}
        </>
    );
};

const styles = StyleSheet.create({
    head: {
        padding: 35, //instead of this we should find out the size of status bar
        alignItems: 'center',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20
    },
    base: {
    }
});

export default HomeScreen;
