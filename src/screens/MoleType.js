import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const defaultValues = (bodyPart) => {
    return (
        <View style={styles.container}>
                <Text style={styles.normalText}>Mole location</Text>
                <View style={styles.pickerViewStyle1}>
                    <DropDownPicker
                        items={[
                            {label: bodyPart, value: 'mole1'},
                        ]}
                        defaultValue={''}
                        containerStyle={{height: 40}}
                    />
                </View>

                <Text style={styles.normalText}>Date of photo</Text>

                <View style={styles.pickerViewStyle2}>
                    <DropDownPicker
                        items={[
                            {label: 'Today', value: 'today'},
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

                {/*<View style={styles.textInputViewStyle}>*/}
                {/*    <TextInput*/}
                {/*        style={styles.textInputStyle}*/}
                {/*        onChangeText={text => onChangeText1(text)}*/}
                {/*        value={value1}*/}
                {/*    />*/}
                {/*</View>*/}

                {/*<Text style={styles.normalText}>Comments about photo</Text>*/}

                {/*<View style={styles.textInputViewStyle}>*/}
                {/*    <TextInput*/}
                {/*        style={styles.textInputStyle}*/}
                {/*        onChangeText={text => onChangeText2(text)}*/}
                {/*        value={value2}*/}
                {/*    />*/}
                {/*</View>*/}
        </View>
    )
}


const OptionalRender = (moleChoice, bodyPart) => {
    switch(moleChoice) {
        case 'Yes':
            return defaultValues(bodyPart)
        case 'No':
            return (<Text>Space to add images if an existing mole. Can be done after we have diary screen done as page is similar </Text>)
    }
}


const MoleType = ({route, navigation }) => {
    const [moleChoice, setChoice] = useState(null);
    const bodyPart = route.params.paramKey
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 2, width: 250, justifyContent: 'center'}}>
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
            <View style={{flex: 6, justifyContent: 'center', width:250}}>
                {OptionalRender(moleChoice, bodyPart)}
            </View>
            <View style={{flex: 2.5, width: 200, justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CameraFar")}>
                    <Text style = {styles.text}> Confirm choice</Text>
                 </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#71A1D1",
        padding: 15,
    },
    text: {
        color: "white",
    },
});

export default MoleType;