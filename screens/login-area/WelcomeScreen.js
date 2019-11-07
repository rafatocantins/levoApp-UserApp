import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SupportScreen from '../main/SupportScreen'
import AccountScreen from '../main/AccountScreen'
import DeliveryScreen from '../main/DeliveryScreen'
import SendScreen from '../main/SendScreen'

const WelcomeScreen = () => {
  return (
    <HomeNavigator />
  )
}

// change later to https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html

const AppTabNavigator = createBottomTabNavigator({
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="user-cog" size={25} color={tintColor}></Icon>
    })
  },
  DeliveryScreen: {
    screen: DeliveryScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Delivery',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="shipping-fast" size={25} color={tintColor}></Icon>
    })
  },
  SendScreen: {
    screen: SendScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Send',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="box-open" size={25} color={tintColor}></Icon>
    })
  },
  SupportScreen: {
  screen: SupportScreen,
  navigationOptions: () => ({
    tabBarLabel: 'Support',
    tabBarIcon: ({ tintColor }) => 
      <Icon name="envelope" size={25} color={tintColor}></Icon>
  })
  }
},
{
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 14,
      marginTop: 5,
    },
    style: {
      height: 70,
      paddingTop: 15,
      borderTopColor: 'black',
      borderTopWidth: 2,
      marginHorizontal: 20,
      paddingBottom: 5,
    }
  }
})


const HomeNavigator = createAppContainer(AppTabNavigator)

export default WelcomeScreen;