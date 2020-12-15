 import React, {useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const SendScreen = () => {
    const [value1, onChangeText1] = React.useState('Placeholder');
    const [value2, onChangeText2] = React.useState('Placeholder');
  return (
    <View style={styles.container}>

        <View style={{flexDirection:'row', width: '100%'}}>
            <Text style={styles.titleText}>Send your mole</Text>

            <TouchableOpacity
                style={styles.helpButton}
            >
                <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.topButtonView}>
            <TouchableOpacity
                style={styles.topButtonStyle}
            >
                <Text style={styles.ButtonText}>Select images</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.normalText}>Mole location</Text>

        <View style={styles.pickerViewStyle1}>
            <DropDownPicker
                items={[
                    {label: 'mole1', value: 'mole1', hidden: true},
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
                    {label: 'Today', value: 'today', hidden: true},
                    {label: 'Yesterday', value: 'yesterday'},
                    {label: 'Some other day', value: 'day3'},
                ]}
                defaultValue={'today'}
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
            >
                <Text style={styles.ButtonText}>SEND</Text>
            </TouchableOpacity>
        </View>




    </View>
  );
};

const styles = StyleSheet.create({
    titleText:{
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 35,


    },
    container:{
        width: '100%',
        marginTop: 50
    },
    helpButton:{
        marginLeft: 60,
        backgroundColor: '#000000',
        borderRadius: 50,
        width: 45,
        alignItems: 'center'

    },
    helpButtonText:{
        color: '#ffffff',
        fontSize: 35,
    },

    topButtonView:{
        marginTop: 60,
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
        zIndex:2,
        marginLeft:30,
        marginRight:30,
    },

    textInputStyle:{
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius:5,
        backgroundColor: 'white',
    },

    textInputViewStyle:{
        zIndex:1,
        marginLeft:30,
        marginRight:30,

    }

});

export default SendScreen;