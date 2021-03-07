import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native'

const DrawingHelpScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Circle Mole Guidance</Text>

            <Text style={styles.mainBodyText}>Now is the time to circle the mole you are documenting on your
                photograph</Text>

            <Text style={styles.mainBodyText}>On the next page you will see the photograph you have just taken and in
            the top left corner there will be a red circle. You can move this circled around the photograph with your
            finger. You want to move this circle so that it contains the mole.</Text>

            <Text style={styles.mainBodyText}>On the right of the screen there is a slider. Moving the slider towards
            the top of the screen will increase the size of the circle. Moving the slider towards the bottom of the screen
            will decrease the size of the circle. Use this slider to make sure it is clear what mole you are taking a
            picture of.</Text>

            <Text style={styles.mainBodyText}>Once you are happy with the circle placement and size, you can continue by
            pressing the 'done' button at the bottom of the screen.</Text>

            <TouchableOpacity style={styles.doneBox}
                              onPress={() => {
                              }}>
                <Text style={styles.doneText}>Continue</Text>
            </TouchableOpacity>

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

export default DrawingHelpScreen;
