import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

// Import Screens 
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import Register from './screens/loginEmail/Register'

// import firebase
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <AppNavigator />
  );
}


const AppSwitchNavigator = createStackNavigator({
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  }
})


const AppNavigator = createAppContainer(AppSwitchNavigator)

export default App;
