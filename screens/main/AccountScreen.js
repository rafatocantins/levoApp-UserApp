import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'firebase';

// get user

const AccountScreen = () => {

    useEffect(() => {
        console.log(currentUser)
    }, []);
    
    const {currentUser} = firebase.auth()
    
  return (
    <View style={styles.screen}>
        <View>
            <Image></Image>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  });

export default AccountScreen;