import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ImageScreen = ({ route }) => {

    return (
        <View>
            <Image
                source = {{ uri: route.params.uri }}
                style = {{
                    height: "100%"
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;