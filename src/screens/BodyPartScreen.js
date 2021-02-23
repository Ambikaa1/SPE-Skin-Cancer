import React from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity, View, Text, Switch, Button} from 'react-native';

const checkSwitch = (m) => {
    switch(m) {
        case 'Head':
            return (
                <Image style={styles.feet} source={require('../../assets/Head.png')}/>
                //closeClickHandler(m)
            )
        break;
        case 'Neck':
            return (<Image style={styles.feet} source={require('../../assets/Neck.png')}/>)
        // this.Two();
        //break;
    }
}

const BodyPartScreen = ({route, navigation }) => {
    const a = route.params.paramKey
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 2, justifyContent: 'center'}}>
                <Text style={styles.titleText} >Your mole is located in this area: </Text>
            </View>
            <View style={{flex: 6, justifyContent: 'center', backgroundColor: 'white'}}>
                {checkSwitch(a)}
            </View>
            <View style={{flex: 2.5, width: 200, justifyContent: 'center'}}>
                {/*<Button title="Click here if this is the correct area" />*/}
                <Button
                    title="Click here if this is the correct area"
                    color="#71A1D1"
                    onPress={() => navigation.navigate("CameraFar")} />
            </View>
        </View>
    )





    {/*    // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>*/}
    {/*    //     <View style={{flex: 6, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>*/}
    {/*    //*/}
    {/*    //     </View>*/}
    {/*    //     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>*/}
    {/*    //         <TouchableOpacity onPress={() => closeClickHandler(navigation.params.paramKey)}>*/}
    {/*    //             <Image style={styles.feet} source={require('../../assets/TopFoot.png')}/>*/}
    {/*    //         </TouchableOpacity>*/}
    {/*    //     </View>*/}
    {/*    //     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>*/}
    {/*    //         <TouchableOpacity onPress={() => navigation.navigate("CameraFar")}>*/}
    {/*    //             <Image style={styles.feet} source={require('../../assets/MiddleFoot.png')}/>*/}
    {/*    //         </TouchableOpacity>*/}
    {/*    //     </View>*/}
    {/*    //     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>*/}
    {/*    //         <TouchableOpacity onPress={() => navigation.navigate("CameraFar")}>*/}
    {/*    //             <Image style={styles.feet} source={require('../../assets/BottomFoot.png')}/>*/}
    {/*    //         </TouchableOpacity>*/}
    {/*    //     </View>*/}
    {/*    //     <View style={{flex: 6, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>*/}
    {/*    //*/}
    {/*    //     </View>*/}
    {/*    // </View>*/}
    {/*// );*/}
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    feet: {
        flex:10,
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

//https://www.geeksforgeeks.org/switch-vs-else/ ---- may be useful for explaining decisions in portfolio
export default BodyPartScreen;