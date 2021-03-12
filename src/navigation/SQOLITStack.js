import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import WhySCQOLIT from "../screens/SCQOLIT survay/WhySCQOLIT";
import infoAboutQuestions from "../screens/SCQOLIT survay/infoAboutQuestions";
import Question1Screen from "../screens/SCQOLIT survay/Question1Screen";
import Question2Screen from "../screens/SCQOLIT survay/Question2Screen";
import Question3Screen from "../screens/SCQOLIT survay/Question3Screen";
import Question4Screen from "../screens/SCQOLIT survay/Question4Screen";
import Question5Screen from "../screens/SCQOLIT survay/Question5Screen";
import Question6Screen from "../screens/SCQOLIT survay/Question6Screen";
import Question7Screen from "../screens/SCQOLIT survay/Question7Screen";
import Question8Screen from "../screens/SCQOLIT survay/Question8Screen";
import Question9Screen from "../screens/SCQOLIT survay/Question9Screen";
import Question10Screen from "../screens/SCQOLIT survay/Question10Screen";
import LastSCQOLITScreen from "../screens/SCQOLIT survay/LastSCQOLITScreen";
const Stack = createStackNavigator()

const SCQOLITStack = () => {
    return(
        <Stack.Navigator
            // screenOptions = {{
            //     headerStyle: styles.header,
            //     headerTintColor: "white",
            // }}
        >
            <Stack.Screen
                name = "SCQOLIT"
                component = {WhySCQOLIT}
                options = {{
                    title: "SCQOLIT",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />

            <Stack.Screen
                name = "InfoSCQOLIT"
                component = {infoAboutQuestions}
                options = {{
                    title: "Info SCQOLIT",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />

            <Stack.Screen
                name = "Question1"
                component = {Question1Screen}
                options = {{
                    title: "Question 1",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question2"
                component = {Question2Screen}
                options = {{
                    title: "Question 2",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question3"
                component = {Question3Screen}
                options = {{
                    title: "Question 3",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question4"
                component = {Question4Screen}
                options = {{
                    title: "Question 4",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question5"
                component = {Question5Screen}
                options = {{
                    title: "Question 5",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question6"
                component = {Question6Screen}
                options = {{
                    title: "Question 6",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question7"
                component = {Question7Screen}
                options = {{
                    title: "Question 7",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question8"
                component = {Question8Screen}
                options = {{
                    title: "Question 8",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question9"
                component = {Question9Screen}
                options = {{
                    title: "Question 9",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "Question10"
                component = {Question10Screen}
                options = {{
                    title: "Question 10",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />
            <Stack.Screen
                name = "ThankyouPage"
                component = {LastSCQOLITScreen}
                options = {{
                    title: "Thank you",
                    headerTitle: props => <HeaderText {...props} />,
                    headerRight: props => <HeaderButton {...props} />,
                }}
            />

        </Stack.Navigator>

    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#71A1D1",
    }
});

export default SCQOLITStack;
