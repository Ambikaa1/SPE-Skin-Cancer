import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

const checkSideSwitch = (bodyPart) => {
    switch(bodyPart) {
        case 'Right Head or Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Side/CloseRightHead.png')}/>)
        case 'Right Torso':
            return (<Image style={styles.closeUp} source={require('../../assets/Side/CloseRightTorso.png')}/>)
        case 'Right Legs':
            return (<Image style={styles.closeUp} source={require('../../assets/Side/CloseRightLeg.png')}/>)
        case 'Left Head or Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Side/CloseLeftHead.png')}/>)
        case 'Left Torso':
            return (<Image style={styles.closeUp} source={require('../../assets/Side/CloseLeftTorso.png')}/>)
        case 'Left Legs':
            return (<Image style={styles.closeUp} source={require('../../assets/Side/CloseLeftLeg.png')}/>)
    }
}

const SideBodyPartScreen = ({route, navigation }) => {
    const bodyPart = route.params.bodyPart;
    return (
        <ScrollView persistentScrollbar={true}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column'}}
                    style={styles.scrollView}>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text style={styles.titleText}>Your mole is located on the: {bodyPart} </Text>
            </View>
            <View  style={{ flex: 1, justifyContent: 'center' }}>
                <View style = {{alignItems: 'center'}}>
                    {checkSideSwitch(bodyPart)}
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
                    <Text style = {styles.doneText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        //     <View style={{flex: 3, width: 250, justifyContent: 'center'}}>
        //         <Text style={styles.titleText} >Your mole is located on the: {bodyPart} </Text>
        //         <Text>This is the bit highlighted in blue. </Text>
        //     </View>
        //     <View style={{flex: 6, justifyContent: 'center', backgroundColor: 'white'}}>
        //         {checkSideSwitch(bodyPart)}
        //     </View>
        //     <View style={{flex: 2.5, width: 300, justifyContent: 'center'}}>
        //         <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
        //             <Text style = {styles.doneText}>Confirm</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    closeUp: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10,
        paddingRight: 7,
        paddingLeft: 7,
        paddingTop: 15,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

//https://www.geeksforgeeks.org/switch-vs-else/ ---- may be useful for explaining decisions in portfolio
export default SideBodyPartScreen;