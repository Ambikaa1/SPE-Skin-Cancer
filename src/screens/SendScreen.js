import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, Alert} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const SendScreen = ({ navigation }) => {
    const [value1, onChangeText1] = React.useState('Placeholder');
    const [value2, onChangeText2] = React.useState('Placeholder');

    const Notice = () =>
        Alert.alert(
            "Notice",
            "The email to your GP will not be protected by any extra encryption and your email app is responsible for anything bad happening, not the amazing people that kindly developed this app",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),

                },
                {   text: "OK",
                    onPress: () => Linking.openURL("mailto:yourgp'semal@blahblahblah.com?subject=Update on mole blah&body=Here's some new moles buddy!!!!!!"),
                    style: "cancel",
                }
            ],
            { cancelable: false }
        );

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topButtonView}>
                    <TouchableOpacity
                        style={styles.topButtonStyle}
                        onPress = {() => navigation.navigate("SelectMole")}
                    >
                        <Text style={styles.ButtonText}>Select images</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.normalText}>Mole location</Text>

                <View style={styles.pickerViewStyle1}>
                    <DropDownPicker
                        items={[
                            {label: 'mole1', value: 'mole1'},
                            {label: 'mole2', value: 'mole2'},
                            {label: 'mole3', value: 'mole3'},
                        ]}
                        defaultValue={''}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => {}}
                    />
                </View>

                <Text style={styles.normalText}>Date of photo</Text>

                <View style={styles.pickerViewStyle2}>
                    <DropDownPicker
                        items={[
                            {label: 'Today', value: 'today'},
                            {label: 'Yesterday', value: 'yesterday'},
                            {label: 'Some other day', value: 'day3'},
                        ]}
                        defaultValue={''}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => {}}
                    />
                </View>

                <Text style={styles.normalText}>Mole name</Text>

                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={text => onChangeText1(text)}
                        value={value1}
                    />
                </View>

                <Text style={styles.normalText}>Comments about photo</Text>

                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={text => onChangeText2(text)}
                        value={value2}
                    />
                </View>

                <View style={styles.bottomButtonView}>
                    <TouchableOpacity
                        style={styles.bottomButtonStyle}
                        onPress={() => Notice()}
                    >
                        <Text style={styles.ButtonText}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
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
    ButtonText:{
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        fontSize: 30,
    },
    topButtonStyle:{
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        alignItems: 'center',
    },
    normalText:{
        marginTop:40,
        marginLeft: 30,
        marginBottom:10,
        fontSize: 20,
    },
    bottomButtonStyle: {

        backgroundColor: '#70A9FF',
        borderRadius: 5,
        alignItems: 'center',
    },
    bottomButtonView:{
        marginTop: 35,
        marginLeft: 50,
        marginRight: 50,
    },
    pickerViewStyle1:{
        zIndex:3,
        marginLeft:30,
        marginRight:30,
    },
    pickerViewStyle2:{
        zIndex: 2,
        marginLeft: 30,
        marginRight: 30,
    },
    textInputStyle:{
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    textInputViewStyle:{
        zIndex: 1,
        marginLeft: 30,
        marginRight: 30,
    }
});

export default SendScreen;
