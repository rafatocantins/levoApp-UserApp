import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!this.isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            console.log('it is passing here');
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
            );
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).then(function(){
                console.log('user signed in')
            }).catch(function(error) {
              // Handle Errors here.
              console.log(error)
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        }.bind(this)
        );
      }

      isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }

    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '147588342891-u36jgq25l4jcmj783uc2tpmvl793e70s.apps.googleusercontent.com',
            iosClientId: '147588342891-fe849iusjn8l3pmk2comttlbmfusoj54.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            console.log('success')
            this.onSignIn(result)
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      };

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.top}>
                    <Image style={styles.image} source={require('../assets/images/logo.png')} />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.buttonGoogle} onPress={() => this.signInWithGoogleAsync()}>
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