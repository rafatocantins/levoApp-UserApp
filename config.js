import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';

const firebaseConfig = {
  apiKey: "AIzaSyD1_BZUxMSetvD-_RGfPLTGsJXlSt5Vp0U",
  authDomain: "levo-app-8a3d0.firebaseapp.com",
  databaseURL: "https://levo-app-8a3d0.firebaseio.com",
  projectId: "levo-app-8a3d0",
  storageBucket: "levo-app-8a3d0.appspot.com",
  messagingSenderId: "347576947041",
  appId: "1:347576947041:web:e3e7f8b501c90741ff3520",
  measurementId: "G-N95CCDRQ0C"
  };

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth()
  }

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
      this.auth.signInWithCredential(credential).then(function(){
        console.log(user)
      }).catch(error => {
        console.log(error);
      })
    }
 
  }

  checkIfUser = () => {
    this.auth.onAuthStateChanged(user => {
      if (user != null) {
        console.log('this is my', user)
      }
    })
  }

  isInitialized () {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }
}

export default new Firebase;