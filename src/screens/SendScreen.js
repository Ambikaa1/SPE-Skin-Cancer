import React from "react";
import {Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

const SendScreen = ({ navigation}) => {

    const selected = () => {
        navigation.navigate("SelectMole");
    }


    return (
            <ScrollView>
                <Text style={styles.mainBodyText}>
                    Here you can select the images you want to send to your GP. Once selected, you will be transported to our email page where you can send your moles.
                </Text>
                <TouchableOpacity
                    style={styles.doneBox}
                    onPress = {() => selected()}
                >
                    <Text style={styles.doneText}>Select images</Text>
                </TouchableOpacity>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 50,
        flex: 1,
    },
    topButtonView:{
        marginLeft: 55,
        marginRight: 55,
        marginBottom:10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
        alignSelf: 'center',
    },
    topButtonStyle:{
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        alignItems: 'center',
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignSelf: "center",
        borderRadius: 10,
        width: "97.5%",
        marginTop: 25,
        bottom: 10
    },
    bottomButtonView:{
        marginTop: 35,
        marginLeft: 50,
        marginRight: 50,
    },
    textInputStyle:{
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    commentBox:{
        zIndex: 1,
        marginLeft: 30,
        marginRight: 30,

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
});

export default SendScreen;
