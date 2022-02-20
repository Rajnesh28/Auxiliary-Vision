import React, {useState, useEffect} from 'react';
//import { NavigationContainer} from "@react-navigation/native";
//import { HomeScreenStack } from "./Screens/HomeStack";
import { ScanPicture } from "./Screens/ScanPicture";
import { StyleSheet, Text, View, Button, Image, Pressable  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, ImageScan, PdfScan, TextScan} from './Screens'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
export default function App() {
  
  return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={ReadText()}>
          <Text style={styles.text}>{"Read Text"}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={ReadImage()}>
        <Text style={styles.text}>{"Read Image"}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={ScanPdf()}>
          <Text style={styles.text}>{"Scan PDF"}</Text>
        </Pressable>
    </View>
  );
}

function ReadText(){

}

function ReadImage(){

}

function ScanPdf(){

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
  },
  main: {
      justifyContent: 'center',
      flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightseagreen',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
})
*/

export default App;