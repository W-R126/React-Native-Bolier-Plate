import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/Home";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}