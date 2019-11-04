import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// get user

const SendScreen = () => {
  return (
    <View style={styles.container}>
    <Text>Send</Text> 
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

export default SendScreen;