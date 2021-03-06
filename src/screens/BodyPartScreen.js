import React, {useState} from 'react';
import {Image, StyleSheet, View, Text,TouchableOpacity, ScrollView} from 'react-native';

const checkFrontSwitch = (bodyPart) => {
    switch(bodyPart) {
        case 'Top of the head':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/HeadTop.png')}/>)
        case 'Face':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/ZoomFace.png')}/>)
        case 'Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/FrontNeck.png')}/>)
        case 'Head or Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseHead2.png')}/>)
        case 'Torso':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseTorso.png')}/>)
        case 'Left Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLUA.png')}/>)
        case 'Right Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRUA.png')}/>)
        case 'Left Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLLA.png')}/>)
        case 'Right Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRLA.png')}/>)
        case 'Volar Left Hand':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/LeftHand.png')}/>)
        case 'Volar Right Hand':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/RightHand.png')}/>)
        case 'Left Upper Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLUL.png')}/>)
        case 'Right Upper Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRUL.png')}/>)
        case 'Left Lower Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLLL.png')}/>)
        case 'Right Lower Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRLL.png')}/>)
        case 'Dorsum Left Foot':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseLeftFoot2.png')}/>)
        case 'Dorsum Right Foot':
            return (<Image style={styles.closeUp} source={require('../../assets/Front/CloseRightFoot.png')}/>)
    }
}

const BodyPartScreen = ({route, navigation }) => {
    const bodyPart = route.params.bodyPart;
    const bool = route.params.highlight;

    return (
        <ScrollView persistentScrollbar = {true}
                    contentContainerStyle = {styles.container}
                    style = {styles.scrollView}>
            <View style = {styles.textContainer}>
                <Text style={styles.titleText}>Your mole is located on the: {bodyPart} </Text>
                <Text style={styles.subText}>{bool}</Text>
            </View>
                    {checkFrontSwitch(bodyPart)}
            <View>
                <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType", {
                    bodyPart: `${bodyPart} ${route.params.side}`,
                })}>
                    <Text style = {styles.doneText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

        // <View style={{flex: 1, flexDirection:e 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        //     <View style={{flex: 3, width: 250, justifyContent: 'center'}}>
        //         <Text style={styles.titleText} >Your mole is located on the: {bodyPart} </Text>
        //     </View>
        //     <View style={{flex: 6, justifyContent: 'center', backgroundColor: 'white'}}>
        //         {checkFrontSwitch(bodyPart)}
        //     </View>
        //     <View style={{flex: 2.5, width: 300, justifyContent: 'center'}}>
        //         <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
        //             <Text style = {styles.doneText}>Confirm</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>
    )
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    container: {
        flexGrow: 1,
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    titleText: {
        fontSize: 20,
        textAlign: "center"
    },
    subText: {
        marginTop: 10,
        fontSize: 17,
        textAlign: "center"
    },
    closeUp: {
        resizeMode: 'contain',
        width: 250,
        height: 250,
        alignSelf: "center",
        flex: 1,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10,
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