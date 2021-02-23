import React from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const closeClickHandler = (a) => {
    //setBodyPart(e)
    console.log(a, "hi")
    //Alert.alert("Close up area: " + a)
}

const BodyPartScreen = ({route, navigation }) => {
    return (
        <View>
            <Text> {route.params.paramKey} </Text>
        </View>
        // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        //     <View style={{flex: 6, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
        //
        //     </View>
        //     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
        //         <TouchableOpacity onPress={() => closeClickHandler(navigation.params.paramKey)}>
        //             <Image style={styles.feet} source={require('../../assets/TopFoot.png')}/>
        //         </TouchableOpacity>
        //     </View>
        //     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
        //         <TouchableOpacity onPress={() => navigation.navigate("CameraFar")}>
        //             <Image style={styles.feet} source={require('../../assets/MiddleFoot.png')}/>
        //         </TouchableOpacity>
        //     </View>
        //     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
        //         <TouchableOpacity onPress={() => navigation.navigate("CameraFar")}>
        //             <Image style={styles.feet} source={require('../../assets/BottomFoot.png')}/>
        //         </TouchableOpacity>
        //     </View>
        //     <View style={{flex: 6, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
        //
        //     </View>
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    feet: {
        flex:1,
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    feet1: {
        flex:1,
        resizeMode: 'contain',
        width: 120,
        height: 120,
    },
});

export default BodyPartScreen;