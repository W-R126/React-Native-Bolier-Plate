import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../components/Login";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}