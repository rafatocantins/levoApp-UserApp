import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'

const WelcomeScreen = () => {
    return (
      <HomeNavigator />
    )
}

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
})


const HomeNavigator = createAppContainer(AppTabNavigator)

export default WelcomeScreen;