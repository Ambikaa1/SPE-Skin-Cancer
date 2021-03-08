import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'

const HelpNearShotScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView persistentScrollbar={true}>
                <Text style={styles.title}>Near Shot Guidance</Text>

                <Text style={styles.mainBodyText}>Now is the time to take a close-up picture of your mole.</Text>

                <Text style={styles.mainBodyText}>The camera should be as close as it can be to the mole, without ruining the
                    quality of the image.</Text>

                <Text style={styles.mainBodyText}>Tips:</Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> Use the ghost image to ensure that it is a similar distance from the camera as your
                        previous pictures. You can toggle the ghost image on and off using the ghost button to right
                        of the picture button.</Text>
                </Text>
                <Text style={styles.bulletPoints}>
                    <Text>{'\u2022'}</Text>
                    <Text> It is best if someone takes the photograph
                        whilst you stay still.</Text>
                </Text>

                <TouchableOpacity style={styles.doneBox}
                                  onPress={() => {
                                      navigation.navigate("CameraNear", { id: route.params.id })
                                  }}>
                    <Text style={styles.doneText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );
};

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
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        //position: "absolute",
        width: "97.5%",
        marginTop: 5,
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default HelpNearShotScreen;
