import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Alert, ImageBackground, Text} from 'react-native';

const Homunc3 = () => {
    global.MyVar = "hello"
    const [bodyPart, setBodyPart] = useState(null);
   // const onPress = () => Alert.alert("Mole area: " + bodyPart)
    const clickHandler = (e) => {
        setBodyPart(e)
        Alert.alert("Mole area: " + e)
    }
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => clickHandler("head")}>
                    <Image style={styles.tinyHead}
                           source={require('../../assets/Head.png')}
                    />
                </TouchableOpacity>
                {/*style={{width: 60, height: 60, backgroundColor: 'red',}}*/}
            </View>

            <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center'}}>
                {/*<View style={{width: 100, height: 60, backgroundColor: 'green'}} />*/}
                <TouchableOpacity onPress={() => clickHandler("neck")}>
                    <Image style={styles.tinyNeck}
                           source={require('../../assets/Neck.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{width: 25, height: 50, backgroundColor: 'blue'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'powderblue'}} />
                <TouchableOpacity>
                    <Image style={styles.upperBody}
                           source={require('../../assets/UpperBody.png')}
                           resizeMode= 'contain'
                    />
                </TouchableOpacity>
                {/*<View style={{width: 100, height: 50, backgroundColor: 'purple'}} />*/}
                <View style={{width: 30, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'blue'}} />
                <View style={{width: 25, height: 50, backgroundColor: 'powderblue'}} />

            </View>
            {/*<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>*/}
            {/*    <TouchableOpacity>*/}
            {/*        <Image style={styles.upperBody}*/}
            {/*               source={require('../../assets/Middle_Back.png')}*/}
            {/*               resizeMode= 'contain'*/}
            {/*        />*/}
            {/*    </TouchableOpacity>*/}
            {/*    /!*<View style={{width: 100, height: 60, backgroundColor: 'yellow'}} />*!/*/}
            {/*</View>*/}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity>
                    <Image style={styles.lowerBody}
                           source={require('../../assets/LowerBody.png')}
                           resizeMode= 'contain'
                    />
                </TouchableOpacity>
                {/*<View style={{width: 100, height: 50, backgroundColor: 'pink'}} />*/}
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: 30, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'white'}} />
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{width: 30, height: 50, backgroundColor: 'blue'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'blue'}} />
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: 30, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 20, height: 50, backgroundColor: 'white'}} />
                <View style={{width: 30, height: 50, backgroundColor: 'skyblue'}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyHead: {
        width: 60,
        height: 65,
    },
    tinyNeck: {
        width: 45,
        height: 25,
    },
    upperBody: {
        width: 100,
        height: 100,
    },
    lowerBody: {
        width: 100,
        height: 50,
    },

});

export default Homunc3;