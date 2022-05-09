import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import apiService from "../../common/consts/apiService";
import { toggleLogin } from "../../redux/actions/authActions";

export default function Login() {
    const dispatch = useDispatch();

    async function fetchSampleData() {
        try {
            const response = apiService.get('todos');
        }
        catch (error) {

        }
    }

    useEffect(() => {
        fetchSampleData();
    }, []);
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => {
                dispatch(toggleLogin(true))
            }}>
                <Text>Press To Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})