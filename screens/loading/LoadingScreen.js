import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import config from '../../config'

const LoadingScreen = () => {
  
  const { navigate } = useNavigation()
  const [firebaseInitialized, setFirebaseInitialized] = useState(null)

  useEffect(() => {
    config.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
    this.initializeScreens()
  });    

  initializeScreens = () => {
    if (firebaseInitialized != null) {
      console.log('user is available')
      navigate('WelcomeScreen')
    } else {
      console.log('user is not available')
      navigate('LoginScreen')
    }
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