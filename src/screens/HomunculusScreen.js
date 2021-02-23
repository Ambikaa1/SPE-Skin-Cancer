import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Alert, Dimensions} from 'react-native';

const HomunculusScreen = ({ navigation }) => {
    //global.MyVar = "hello"
    const [bodyPart, setBodyPart] = useState(null);
    // const onPress = () => Alert.alert("Mole area: " + bodyPart)
    const clickHandler = (e) => {
        //setBodyPart(e)
        console.log(e)
        //console.log(setBodyPart)
        navigation.navigate("BodyPart")
        //Alert.alert("Mole area: " + e)
    }
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            {/*<View style={{width: Dimensions.get('window').width, height: 25, backgroundColor: 'white'}} />*/}
            <View style={{flex: 0.7, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                {/*<TouchableOpacity onPress={() => navigation.navigate("BodyPart")}>*/}
                <TouchableOpacity onPress={() => clickHandler("Head")}>
                    <Image style={styles.tinyHead} source={require('../../assets/Head.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.25, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Neck")}>
                    <Image style={styles.tinyNeck} source={require('../../assets/Neck.png')} />
                </TouchableOpacity>
            </View>

            {/*<TouchableOpacity onPress={() => clickHandler("right upper arm")}>*/}
            <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm")}>
                    <Image style={styles.upperArm} source={require('../../assets/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Upper Body")}>
                    <Image style={styles.upperBody} source={require('../../assets/UpperB.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm")}>
                    <Image style={styles.upperArm} source={require('../../assets/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.85, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/LeftLowerArm.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Lower Body")}>
                    <Image style={styles.lowerBody} source={require('../../assets/LowerBody.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/RightLowerArm.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.9, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Hand")}>
                    <Image style={styles.hands} source={require('../../assets/LHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Thigh")}>
                    <Image style={styles.upperLeg} source={require('../../assets/LeftThigh.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Thigh")}>
                    <Image style={styles.upperLeg} source={require('../../assets/RightThigh.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Hand")}>
                    <Image style={styles.hands} source={require('../../assets/RHand.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Knee")}>
                    <Image style={styles.knees} source={require('../../assets/LeftKnee.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Knee")}>
                    <Image style={styles.knees} source={require('../../assets/RightKnee.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.9, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/LeftLowerLeg.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/RightLowerLeg.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("Left Foot")}>
                    <Image style={styles.feet} source={require('../../assets/LeftFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Right Foot")}>
                    <Image style={styles.feet} source={require('../../assets/RightFoot.png')} />
                </TouchableOpacity>
            </View>
            {/*<View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>*/}

            {/*</View>*/}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyHead: {
        width: 60,
        height: 65,
    },
    tinyNeck: {
        width: 40,
        height: 25,
        resizeMode: 'contain',
    },
    upperBody: {
        flex:1,
        resizeMode: 'contain',
        width: 80,
        height: 89,
    },
    upperArm: {
        flex:1,
        resizeMode: 'contain',
        width: 25,
        height: 25,
    },
    lowerBody: {
        flex:1,
        resizeMode: 'contain',
        width: 80,
        height: 69,
    },
    lowerArm: {
        flex:1,
        resizeMode: 'contain',
        width: 45,
        height: 48,
    },
    hands: {
        flex:1,
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
    upperLeg: {
        flex:1,
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    knees: {
        flex:1,
        resizeMode: 'contain',
        width: 35,
        height: 25,
    },
    lowerLeg: {
        flex:1,
        resizeMode: 'contain',
        width: 45,
        height: 45,
    },
    feet: {
        flex:1,
        resizeMode: 'contain',
        width: 30,
        height: 20,
    },
});

export default HomunculusScreen;
