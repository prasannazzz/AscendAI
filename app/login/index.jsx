import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function LoginScreen() {
     return (
         <Stack screenOptions={{
             headerShown: false
         }}>

            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name="login"/>
        </Stack>
     )
}