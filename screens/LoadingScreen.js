import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import firebase from 'firebase'

const LoadingScreen = () => {
  
  const { navigate } = useNavigation()

  useEffect(() => this.checkIfLoggedIn());

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('im back')
        navigate('HomeScreen')
      } else {
        console.log('i am virtual')
        navigate('LoginScreen')
      }
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

  export default LoadingScreen;