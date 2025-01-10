import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router/stack';
import NavBar from '../components/Navbar';
import App from './App';



export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <Stack >
        <Stack.Screen name="app" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

