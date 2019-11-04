import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

// Import Screens 
import LoadingScreen from './screens/loading/LoadingScreen'
import LoginScreen from './screens/login-area/LoginScreen'
import WelcomeScreen from './screens/login-area/WelcomeScreen'
import Register from './screens/login-area/Register'

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
