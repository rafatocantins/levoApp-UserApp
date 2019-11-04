import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import * as Facebook from 'expo-facebook';

const LoginScreen = () => {

  const { navigate } = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // use Effect

  useEffect(() => this.checkIfUser());


  // Facebook Login
  signInWithFacebook = async () => {
  const appId = '545047676329983';
  const permissions = [ 'public_profile', 'email' ];

  const {
    type,
    token
  } = await Facebook.logInWithReadPermissionsAsync(
    appId,
    {permissions}
  );

  if (type == "success") {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential).then(function(){
    console.log('Loading')
    }).catch(error => {
    console.log(error);
    })
  }
 
  }

  checkIfUser = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
    console.log('this is my', user)
    }
  })
  }

  // Google Login

  // onSignIn = googleUser => {
  // console.log('Google Auth Response', googleUser);
  // // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  // var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
  //   unsubscribe();
  //   // Check if we are already signed-in Firebase with the correct user.
  //   if (!this.isUserEqual(googleUser, firebaseUser)) {
  //   // Build Firebase credential with the Google ID token.
  //   console.log('it is passing here');
  //   var credential = firebase.auth.GoogleAuthProvider.credential(
  //   googleUser.idToken,
  //   googleUser.accessToken
  //   );
  //   // Sign in with credential from the Google user.
  //   firebase.auth().signInWithCredential(credential).then(function(){
  //   console.log('user signed in')
  //   }).catch(function(error) {
  //   // Handle Errors here.
  //   console.log(error)
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  //   });
  //   } else {
  //   console.log('User already signed-in Firebase.');
  //   }
  // }.bind(this)
  // );
  // }

  // isUserEqual = (googleUser, firebaseUser) => {
  // if (firebaseUser) {
  //   var providerData = firebaseUser.providerData;
  //   for (var i = 0; i < providerData.length; i++) {
  //   if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //     providerData[i].uid === googleUser.getBasicProfile().getId()) {
  //     // We don't need to reauth the Firebase connection.
  //     return true;
  //   }
  //   }
  // }
  // return false;
  // }

  // signInWithGoogleAsync = async () => {
  // try {
  //   const result = await Google.logInAsync({
  //   androidClientId: '147588342891-u36jgq25l4jcmj783uc2tpmvl793e70s.apps.googleusercontent.com',
  //   iosClientId: '147588342891-fe849iusjn8l3pmk2comttlbmfusoj54.apps.googleusercontent.com',
  //   scopes: ['profile', 'email'],
  //   });
  
  //   if (result.type === 'success') {
  //   console.log('success')
  //   this.onSignIn(result)
  //   return result.accessToken;
  //   } else {
  //   return { cancelled: true };
  //   }
  // } catch (e) {
  //   return { error: true };
  // }
  // };

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