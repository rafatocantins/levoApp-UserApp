import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import firebase from 'firebase'

export default function LoadingScreen() {
  
  const { navigate } = useNavigation()

  useEffect(() => this.checkIfLoggedIn());

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate('HomeScreen')
      }
        console.log('its there')
        navigate('LoginScreen')
    })
  }    

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFA500" />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });