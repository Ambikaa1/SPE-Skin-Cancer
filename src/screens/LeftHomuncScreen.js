// import React from "react";
// import {View, StyleSheet, ScrollView, TouchableOpacity, Image, Text} from "react-native";
//
// const LeftHomuncScreen = ({navigation}) => {
//     const clickHandler = (bodyPart) => {
//         navigation.navigate("SideBodyPart", {bodyPart: bodyPart})
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
//                 <TouchableOpacity onPress={() => navigation.navigate("BackHomunc")}>
//                     <Image style={styles.rotate} source={require('../../assets/Back/Back3.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.navigate("FrontHomunc")}>
//                     <Image style={styles.rotate} source={require('../../assets/Back/Front3.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.navigate("RightHomunc")}>
//                     <Image style={styles.rotate} source={require('../../assets/Back/Right3.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Left Head or Neck")}>
//                     <Image style={styles.head} source={require('../../assets/Side/LHead.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Left Torso")}>
//                     <Image style={styles.torso} source={require('../../assets/Side/LTorso.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.flexbox}>
//                 <TouchableOpacity onPress={() => clickHandler("Left Legs")}>
//                     <Image style={styles.legs} source={require('../../assets/Side/LLegs.png')} />
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
//         width: 350,
//         height: 99,
//         resizeMode: 'contain',
//     },
//     torso: {
//         width: 300,
//         height: 220,
//         resizeMode: 'contain',
//     },
//     legs: {
//         width: 360,
//         height: 245,
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
// export default LeftHomuncScreen;
