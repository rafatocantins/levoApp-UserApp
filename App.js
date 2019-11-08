import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Import Screens 
import LoadingScreen from './screens/loading/LoadingScreen'
import LoginScreen from './screens/login-area/LoginScreen'
import WelcomeScreen from './screens/login-area/WelcomeScreen'
import Register from './screens/login-area/Register'

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
