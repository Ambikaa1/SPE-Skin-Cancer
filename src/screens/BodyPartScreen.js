import React from 'react';
import {Image, StyleSheet, View, Text,TouchableOpacity, ScrollView} from 'react-native';

const checkFrontSwitch = (bodyPart) => {
    switch(bodyPart) {
        case 'Head or Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseHead.png')}/>)
        case 'Torso':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseTorso2.png')}/>)
        case 'Left Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLeftUA2.png')}/>)
        case 'Right Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRightUA2.png')}/>)
        case 'Left Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLeftLA2.png')}/>)
        case 'Right Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRightLA2.png')}/>)
        case 'Volar Left Hand':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/LeftHand.png')}/>)
        case 'Volar Right Hand':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/RightHand.png')}/>)
        case 'Left Upper Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/LeftUL2.png')}/>)
        case 'Right Upper Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/RightUL2.png')}/>)
        case 'Left Lower Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLeftLL2.png')}/>)
        case 'Right Lower Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRightLL2.png')}/>)
        case 'Dorsum Left Foot':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLeftFoot.png')}/>)
        case 'Dorsum Right Foot':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRightFoot.png')}/>)
    }
}

// const checkViewSwitch = (view, bodyPart) => {
//     switch(view) {
//         case 'Left':
//             return <Text> hi 4</Text>
//         case 'Right':
//             return <Text> hi3 </Text>
//         case 'front':
//            // console.log(bodyPart)
//             checkFrontSwitch(bodyPart)
//             break
//         case 'Back':
//             return <Text> hi 2 </Text>
//     }
// }

const BodyPartScreen = ({route, navigation }) => {
    const bodyPart = route.params.bodyPart;
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <View style={{flex: 3, width: 250, justifyContent: 'center'}}>
                <Text style={styles.titleText} >Your mole is located on the: {bodyPart} </Text>
            </View>
            <View style={{flex: 6, justifyContent: 'center', backgroundColor: 'white'}}>
                {checkFrontSwitch(bodyPart)}
            </View>
            <View style={{flex: 2.5, width: 300, justifyContent: 'center'}}>
                <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
                    <Text style = {styles.doneText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "white",
        alignItems: 'center',
    },
    closeUp: {
        flex:10,
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center'
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "97.5%",
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

//https://www.geeksforgeeks.org/switch-vs-else/ ---- may be useful for explaining decisions in portfolio
export default BodyPartScreen;