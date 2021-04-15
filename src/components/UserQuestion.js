import React from "react";
import {Text, StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const UserQuestion = ({}) => {
    return(
        <DropDownPicker
            items = {[
                {label: 'Yes', value: "yes"},
                {label: 'No', value: "no"},
                {label: 'Unsure', value: "unsure"},
                {label: 'Rather not say', value: "not say"},
            ]}
            containerStyle = {styles.dropDownContainer}
            labelStyle = {styles.dropDownLabel}
            onChangeItem = {console.log("item changed")}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        color: "#ffffff",
    },
    dropDownContainer: {
        height: 35,
        marginTop: 5,
        marginRight: 10,
    },
    dropDownLabel: {
        fontSize: 17,
    },
});

export default UserQuestion;