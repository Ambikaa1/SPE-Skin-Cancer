import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, TextInput, Linking, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const defaultValues = (bodyPart) => {
    const date = new Date().getDate(); //To get the Current Date
    const month =  new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const fullDate = date + "/" + month + "/" + year

    return (
        //Needs editing, pretty much copied from SendScreen
        <View style={styles.container}>
            <Text style={styles.normalText}>Mole name</Text>

            <View style={styles.textInputStyle}>
                <TextInput
                    placeholder = "Please enter the name of the mole"
                    placeholderTextColor = "#838b8b"
                    // onChangeText = {}
                    // Need to add functionality that actually does something with inputs
                />
            </View>

            <Text style={styles.normalText}>Mole location</Text>
            <View style={styles.pickerViewStyle1}>
                <DropDownPicker
                    items={[
                        {label: bodyPart},
                    ]}
                    defaultValue={''}
                    containerStyle={{height: 40}}
                />
            </View>

            <Text style={styles.normalText}>Mole Date</Text>

            <View style={styles.pickerViewStyle2}>
                <DropDownPicker
                    items={[
                        {label: fullDate},
                    ]}
                    defaultValue={''}
                    containerStyle={{height: 40}}
                />
            </View>

            <Text style={styles.normalText}>Mole comments</Text>

            <View style={styles.textInputStyle}>
                <TextInput
                    placeholder = "Comments about the mole"
                    placeholderTextColor = "#838b8b"
                    // onChangeText = {}
                    // Need to add functionality that actually does something with inputs
                />
            </View>
        </View>
    )
}

const OptionalRender = (moleChoice, bodyPart) => {
    switch(moleChoice) {
        case 'Yes':
            return defaultValues(bodyPart)
        case 'No':
            return (<Text>PRESS YES. Space to add images if an existing mole. Can be done after we have diary screen done as page is similar </Text>)
    }
}

const MoleType = ({route, navigation }) => {
    const [moleChoice, setChoice] = useState(null);
    const bodyPart = route.params.paramKey
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "white"}}>
            <View style={{flex: 2, justifyContent: 'center', width:Dimensions.get("window").width -100}}>
                <Text> Is this a new mole? </Text>
                <DropDownPicker
                    items={[
                        {label: 'Yes'},
                        {label: 'No'},
                    ]}
                    containerStyle={{height: 40}}
                    defaultIndex={0}
                    //onChangeItem={item => console.log(item.label)}
                    onChangeItem={item => setChoice(item.label)}
                />
            </View>
            <View style={{flex: 6, justifyContent: 'center', width:Dimensions.get("window").width -50}}>
                {OptionalRender(moleChoice, bodyPart)}
            </View>
            <View style={{flex: 3, width: 200, justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CameraFar")}>
                    <Text style = {styles.text}> Confirm choice</Text>
                 </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#71A1D1",
        padding: 15,
    },
    text: {
        color: "white",
    },
    textInputStyle:{
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    textInputViewStyle:{
        zIndex: 1,
        marginLeft: 30,
        marginRight: 30,
    },
    normalText:{
        marginTop:10,
        fontSize: 14,
    },
});

export default MoleType;