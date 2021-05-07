import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView, Linking, View, Alert} from 'react-native';

const FarShotTipsScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView persistentScrollbar = {true}>

                <Text style = {styles.tips}>Far Shot Tips:</Text>
                <Text style = {styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> It is best if someone else takes the photograph
                        whilst you stand still</Text>
                </Text>
                <Text style = {styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Use good lighting—ideally, natural daylight at midday</Text>
                </Text>
                <Text style = {styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Take the photograph approximately 10–15cm away from the skin
                        (the width of 1–2 hands)</Text>
                </Text>
                <Text style = {styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Try to get a good contrast (green or blue background is good)</Text>
                </Text>
                <Text style = {styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Touch the screen to focus the image</Text>
                </Text>
                <Text style = {styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> If you are not happy with the image, retake it</Text>
                </Text>
                <TouchableOpacity onPress = {() => Linking.openURL("https://www.youtube.com/")}>
                    <Text style = {styles.bulletPoints}>
                        <Text>{'\u2022'}</Text>
                        <Text style = {styles.link}> For more help, click here to watch a YouTube video</Text>
                    </Text>
                </TouchableOpacity>

                <Text style = {styles.mainBodyText}>Press 'Continue' below to take your far shot picture.</Text>

                <TouchableOpacity style={styles.doneBox}
                                  onPress = {() => {
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
    },
    mainBodyText: {
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 10,
    },
    tips: {
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 10,
        fontWeight: "bold"
    },
    bulletPoints: {
        fontSize: 17,
        marginTop: 10,
        // paddingLeft: 5,
        marginHorizontal: 10,
    },
    link: {
        color: "#3366ff",
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 10,
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

export default FarShotTipsScreen;
