import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>


      <Tabs.Screen name="index"
        optins={{
          tabBarIcon: ({ color, size }) => (

            <FontAwesome name="learn" size={size} color="black" />
          )
        }}
      />

      <Tabs.screen name="community" optins={{
        tabBarIcon: ({ color, size }) => (

          <FontAwesome name="learn" size={size} color="black" />
        )
      }} />


      <Tabs.screen name="Leaderboard" optins={{
        tabBarIcon: ({ color, size }) => (

          <FontAwesome name="learn" size={size} color="black" />
        )
      }} />


      <Tabs.screen name="Leaderboard" optins={{
        tabBarIcon: ({ color, size }) => (

          <FontAwesome name="learn" size={size} color="black" />
        )
      }} />

      <Tabs.screen name="Profile" optins={{
        tabBarIcon: ({ color, size }) => (

          <FontAwesome name="profile" size={size} color="black" />
        )
      }} />

    </Tabs>
  );
}


