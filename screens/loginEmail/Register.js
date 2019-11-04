import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function Register() {

    const [ registerEmail, setRegisterEmail ] = useState('')
    const [ registerPassword, setRegisterPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')

    handleRegister = () => {
        console.log(registerEmail)
        console.log(registerPassword)
        console.log(repeatPassword)
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>Register</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={(text) => setRegisterEmail(text)}
                value={registerEmail}
                />
                <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={(text) => setRegisterPassword(text)}
                value={registerPassword}
                />
            </View>
            <TouchableOpacity style={styles.buttonRegister} onPress={this.handleRegister()}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      },
      title: {
        fontSize: 22,
      },
      textInput: {
      height: 50,
      width: 300,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8,
      padding: 10,
      borderRadius: 5,
      fontSize: 20
      },
      inputView: {
      marginVertical: 40,
      width: '100%',
      alignItems: 'center'
      },
      buttonRegister: {
      flexDirection: 'row',
      elevation: 3, // Android,
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 300,
      backgroundColor: '#FF7400',
      marginBottom: 15,
      borderRadius: 5,
      padding: 15
      },  
      register: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 300,
      marginTop: 10
      },  
      buttonText: {
      color: 'white',
      fontSize: 20
      }
    }); 