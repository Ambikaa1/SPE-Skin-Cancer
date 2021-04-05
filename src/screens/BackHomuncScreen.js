// import React from "react";
// import {View, StyleSheet, ScrollView, TouchableOpacity, Image, Text} from "react-native";
//
// const BackHomuncScreen = ({navigation}) => {
//     const clickHandler = (bodyPart, highlight) => {
//         navigation.navigate("BackBodyPart", {bodyPart: bodyPart, highlight: highlight})
//     }
//     return (
//         <ScrollView persistentScrollbar={true} style={styles.scrollView}>
//             <Text style = {styles.title}>Please scroll down to click on the body part where your mole is located. </Text>
//             <Text style = {styles.title}>Swipe left or right, or click on the buttons to navigate to the different views. </Text>
//             <Text></Text>
//             <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("Swiping")}>
//                 <Text style = {styles.doneText}>Click here to swipe between views</Text>
//             </TouchableOpacity>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => navigation.navigate("LeftHomunc")}>
//                     <Image style={styles.rotate} source={require('../../assets/Back/Left3.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
//                     <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
//                     <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Head or Neck")}>
//                     <Image style={styles.head} source={require('../../assets/Back/Head.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Left Upper Arm", "This is the area highlighted in blue")}>
//                     <Image style={styles.arm} source={require('../../assets/Back/LeftUA.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Back")}>
//                     <Image style={styles.chest} source={require('../../assets/Back/BackTorso2.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Right Upper Arm", "This is the area highlighted in blue")}>
//                     <Image style={styles.arm} source={require('../../assets/Back/RightUA.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Left Lower Arm", "This is the area highlighted in blue")}>
//                     <Image style={styles.lowerArm} source={require('../../assets/Back/LeftLA.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Back")}>
//                     <Image style={styles.body} source={require('../../assets/Back/LowerTorso2.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Right Lower Arm", "This is the area highlighted in blue")}>
//                     <Image style={styles.lowerArm} source={require('../../assets/Back/RightLA.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Dorsum Left Hand")}>
//                     <Image style={styles.hand} source={require('../../assets/Back/LH3.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Left Upper Leg", "This is the area highlighted in blue")}>
//                     <Image style={styles.leg} source={require('../../assets/Back/LeftUL.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Right Upper Leg", "This is the area highlighted in blue")}>
//                     <Image style={styles.leg} source={require('../../assets/Back/RightUL.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Dorsum Right Hand")}>
//                     <Image style={styles.hand} source={require('../../assets/Back/RH3.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Left Lower Leg", "This is the area highlighted in blue")}>
//                     <Image style={styles.lowerLeg} source={require('../../assets/Back/LeftLL.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Right Lower Leg", "This is the area highlighted in blue")}>
//                     <Image style={styles.lowerLeg} source={require('../../assets/Back/RightLL.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Plantar Surface Left Foot")}>
//                     <Image style={styles.foot} source={require('../../assets/Back/LeftFoot.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => clickHandler("Plantar Surface Right Foot")}>
//                     <Image style={styles.foot} source={require('../../assets/Back/RightFoot.png')} />
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// };
//
// //although some of the values are similar, they are very accurate so the body flows completely.
// //so they can't be merged together!
// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: 'white',
//     },
//     flexbox: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     head: {
//         width: 115,
//         height: 100,
//         resizeMode: 'contain',
//     },
//     arm: {
//         width: 90,
//         height: 100,
//         resizeMode: 'contain',
//     },
//     chest: {
//         width: 94,
//         height: 100,
//         resizeMode: 'contain',
//     },
//     lowerArm: {
//         width: 82,
//         height: 48,
//         resizeMode: 'contain',
//     },
//     body: {
//         width: 103,
//         height: 49,
//         resizeMode: 'contain',
//     },
//     hand: {
//         width: 80,
//         height: 59,
//         resizeMode: 'contain',
//     },
//     leg: {
//         width: 55,
//         height: 130,
//         resizeMode: 'contain',
//     },
//     lowerLeg: {
//         width: 130,
//         height: 70,
//         resizeMode: 'contain',
//     },
//     foot: {
//         width: 140,
//         height: 67,
//         resizeMode: 'contain',
//     },
//     rotate: {
//         width: 120,
//         height: 120,
//         resizeMode: 'contain',
//     },
//     title:{
//         fontSize: 15,
//         fontWeight: "bold",
//     },
//     doneBox: {
//         backgroundColor: "#71A1D1",
//         alignItems: "center",
//         alignSelf: "center",
//         borderRadius: 10,
//         // position: "absolute",
//         width: "95%",
//         bottom: 10,
//     },
//     doneText: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "white",
//         marginVertical: 10,
//     }
// });
//
// export default BackHomuncScreen;