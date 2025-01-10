import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const HomeScreen = () => {
  const router=useRouter()
  const redirct=()=>{

  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Pressable onPress={redirct}>
        <Text>Click</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
