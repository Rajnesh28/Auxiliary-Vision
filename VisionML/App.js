import React, {useState, useEffect} from 'react';
//import { NavigationContainer} from "@react-navigation/native";
//import { HomeScreenStack } from "./Screens/HomeStack";
import { StyleSheet, Text, View, Button, Image, Pressable  } from 'react-native';
import {TakePicture} from './TakePicture';


export default function App() {
  return (
    <View style={styles.container}>
      <TakePicture/>
    </View>
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
