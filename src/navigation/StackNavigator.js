import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SendScreen from "../screens/SendScreen";

import Homunc4 from "../screens/Homunc4";
import CloseHomunc from "../screens/CloseHomunc";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Send" component={SendScreen} />
        </Stack.Navigator>
    );
};

const BodyStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Body" component={Homunc4} />
            <Stack.Screen name="RightFoot" component={CloseHomunc}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator, BodyStackNavigator };
