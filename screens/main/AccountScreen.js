import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// get user

const AccountScreen = () => {
  return (
    <View style={styles.container}>
    <Text>Acount</Text> 
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

export default AccountScreen;