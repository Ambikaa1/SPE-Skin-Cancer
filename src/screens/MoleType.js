import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MoleType = ({navigation}) => {
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
                    // onChangeItem={item => console.log(item.label)}
                />
            </View>
            <View style={{flex: 6, justifyContent: 'center', width:250}}>
                <Text> Space to add images if an existing mole.</Text>
                <Text> If it is we need to ask them for info about it e.g. mole name </Text>
                <Text> Can be done after we have diary screen done as page is similar </Text>
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