import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import type { ReduxReducerType } from "../common/consts/types";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const isLoggedIn = useSelector((state: ReduxReducerType) => state.Auth.isLoggedIn)

    if (isLoggedIn)
        return (
            <AppStack />
        );
    else {
        return (
            <AuthStack />
        )
    }
}