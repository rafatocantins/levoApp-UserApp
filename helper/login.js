import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
firebase.initializeApp(firebaseConfig);


async function signInWithFacebook () {
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

const checkIfLoggedIn = () => {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
        return true
        } else {
        return false
        }
    })
}

function checkIfUser () {
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

  export {
    signInWithFacebook,
    checkIfUser,
    checkIfLoggedIn
  }
