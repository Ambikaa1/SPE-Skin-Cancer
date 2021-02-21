import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Alert, Dimensions} from 'react-native';

const Homunc4 = ({navigation}) => {
    //global.MyVar = "hello"
    const [bodyPart, setBodyPart] = useState(null);
    // const onPress = () => Alert.alert("Mole area: " + bodyPart)
    const clickHandler = (e) => {
        setBodyPart(e)
        Alert.alert("Mole area: " + e)
    }
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{width: Dimensions.get('window').width, height: 25, backgroundColor: 'white'}} />
            <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("head")}>
                    <Image style={styles.tinyHead} source={require('../../assets/Head.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.25, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("neck")}>
                    <Image style={styles.tinyNeck} source={require('../../assets/Neck.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("left upper arm ")}>
                    <Image style={styles.upperArm} source={require('../../assets/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("upper body")}>
                    <Image style={styles.upperBody} source={require('../../assets/UpperB.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("right upper arm")}>
                    <Image style={styles.upperArm} source={require('../../assets/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.8, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("left lower arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/LeftLowerArm.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("lower body")}>
                    <Image style={styles.lowerBody} source={require('../../assets/LowerBody.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("right lower arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/RightLowerArm.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("left hand")}>
                    <Image style={styles.hands} source={require('../../assets/LHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("left thigh")}>
                    <Image style={styles.upperLeg} source={require('../../assets/LeftThigh.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("right thigh")}>
                    <Image style={styles.upperLeg} source={require('../../assets/RightThigh.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("right hand")}>
                    <Image style={styles.hands} source={require('../../assets/RHand.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.4, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("left knee")}>
                    <Image style={styles.knees} source={require('../../assets/LeftKnee.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("right knee")}>
                    <Image style={styles.knees} source={require('../../assets/RightKnee.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("left lower leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/LeftLowerLeg.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("right lower leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/RightLowerLeg.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.4, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => clickHandler("left foot")}>
                    <Image style={styles.feet} source={require('../../assets/LeftFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("RightFoot")}>
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

export default Homunc4;
