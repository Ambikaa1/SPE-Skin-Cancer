import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";

import UserQuestion from "../components/UserQuestion";

const UserProfile = ({}) => {
    const [questionNo, setQuestionNo] = useState(0);

    return (
        <View>

            <Text>hi</Text>
            <UserQuestion/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default UserProfile;