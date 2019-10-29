import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.top}>
                    <Image style={styles.image} source={require('../assets/images/logo.png')} />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.buttonGoogle}>
                        <Image source={require('../assets/images/google-plus-3-32.png')} />
                        <Text style={styles.buttonText}>Log in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFacebook}>
                        <Image source={require('../assets/images/facebook-3-32.png')} />
                        <Text style={styles.buttonText}>Log in with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
      padding: 50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    top: {
       marginVertical: 50 
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 50
    },
    buttonGoogle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#DB4437',
        marginBottom: 10,
        borderRadius: 5,
        padding: 10
    },
    buttonFacebook: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#3b5998',
        marginBottom: 10,
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
  });