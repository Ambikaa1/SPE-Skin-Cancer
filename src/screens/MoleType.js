import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const OptionalRender = (moleChoice) => {
    switch(moleChoice) {
        case 'Yes':
            return (<Text> yes</Text>)

        case 'No':
            return (<Text> Space to add images if an existing mole. Can be done after we have diary screen done as page is similar </Text>)
    }
}


const MoleType = ({navigation}) => {
    const [moleChoice, setChoice] = useState(null);
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
                <Text> {moleChoice}</Text>
                {OptionalRender(moleChoice)}
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