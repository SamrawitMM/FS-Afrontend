import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import RootStackScreen from './screens/Rootstackscreen';
import Notification from './screens/Notification';
import Tabscreen from './screens/Tabscreen';

export default function App() {
  return (
  <NavigationContainer>
     <RootStackScreen/>
  </NavigationContainer>
    //  <Signupscreen/>
    // <Notification/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
