import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView, Linking, View, Alert} from 'react-native'


const HelpFarShotScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView persistentScrollbar={true}>
                <Text style={styles.title}>Far Shot Guidance</Text>

                <Text style={styles.mainBodyText}>Now is the time to photograph the part of
                    your body you just selected.</Text>

                <Text style={styles.mainBodyText}>There will be an outline available of the body part
                to help you line up the camera. This will be accessible
                by pressing the ghost shaped button, to the right of the picture
                    button on the next page.</Text>

                <Text style={styles.mainBodyText}>Once you have taken a photo you will be able to drag a red circle with
                your finger to circle the mole. You can use the slider on the right to increase and decrease the size of the
                circle. If you need more help at that stage, click the question mark in the top right.</Text>

                <Text style={styles.mainBodyText}>Tips:</Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> It is best if someone takes the photograph
                        whilst you stay still.</Text>
                </Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Use good lighting - ideally, natural daylight at mid-day.</Text>
                </Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Take the photograph approximately 10-15cm away from the skin
                    (the width of 1-2 hands).</Text>
                </Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Try to get a good contrast (green or blue is good).</Text>
                </Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Touch the screen to focus the image.</Text>
                </Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> If you are not happy with the image, retake it.</Text>
                </Text>
                <TouchableOpacity onPress = {() => Linking.openURL("https://www.youtube.com/")}>
                    <Text style={styles.bulletPoints}>
                        <Text>{'\u2022'}</Text>
                        <Text style = {styles.link}> For more advice see this YouTube video.</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.doneBox}
                    onPress={() => {
                        navigation.navigate("CameraFar", { name: route.params.name, comments: route.params.comments, bodyPart: route.params.bodyPart })
                    }}>
                    <Text style={styles.doneText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10
    },
   title: {
       fontSize: 40,
       alignSelf: 'center',
       paddingTop: 10,
       textDecorationLine: 'underline'
   },
   mainBodyText: {
       fontSize: 17,
       paddingTop: 10,
       paddingBottom: 10,
       paddingLeft: 10,
       paddingRight: 10,
   },
    bulletPoints: {
        fontSize: 17,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 10,
    },
    link: {
        color: "#3366ff",
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        width: "97.5%",
        marginTop: 25,
        bottom: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default HelpFarShotScreen;
