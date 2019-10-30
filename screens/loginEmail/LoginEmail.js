import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'

export default function LoginEmail() {

  const { navigate } = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log(email)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.buttonLogin} onPress={this.handleLogin()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={styles.forgot}>Do not have an account?</Text>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    buttonLogin: {
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
    padding: 10
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