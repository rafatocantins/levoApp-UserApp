import React, { useState, useEffect, createContext, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'

const LoginScreen = () => {

  const { navigate } = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // use Effect

  useEffect(() => this.checkIfUser());


  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding" enabled>
      <View style={styles.top}>
        <Image style={styles.image} source={require('../../assets/images/logo.png')} />
      </View>
      <View style={styles.bottom}>
        {/* <TouchableOpacity style={styles.buttonGoogle} onPress={() => this.signInWithGoogleAsync()}>
          <Image source={require('../../assets/images/google-plus-3-32.png')} />
          <Text style={styles.buttonText}>Log in with Google</Text>
        </TouchableOpacity> */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.buttonEmail} onPress={() => navigate('LoginEmail')}>
          <Image source={require('../../assets/images/email-13-32.png')} />
          <Text style={styles.buttonText}>Sign in with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFacebook} onPress={() => this.signInWithFacebook()}>
          <Image source={require('../../assets/images/facebook-3-32.png')} />
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgot}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.register}>
          <Text style={styles.forgot}>Do not have an account?</Text>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
  },
  top: {
   paddingVertical: 10
  },
  image: {
  width: 150,
  height: 150,
  marginBottom: 30
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
  paddingBottom: 20,
  width: '100%',
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
  buttonEmail: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: 300,
  backgroundColor: '#FF7400',
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
  register: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: 300,
  marginTop: 10,
  },  
  buttonText: {
  color: 'white',
  fontSize: 20,
  },
  forgot: {
    alignItems: 'center'
  }
  });

  export default LoginScreen;