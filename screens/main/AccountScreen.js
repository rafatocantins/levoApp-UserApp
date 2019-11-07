import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';

// get user

const AccountScreen = () => {

    const [user, setUser] = useState({})
    const {currentUser} = firebase.auth()

    useEffect(() => {
        setUser(currentUser)
        
    }, []);

    getUser = () => {
        console.log(user)
    }
    
  return (
    <View style={styles.screen}>
        <View style={styles.top}>
            <Image style={styles.profilePic} source={{ uri: user.photoURL }}></Image>
            <View style={ styles.profileInfo }>
                <Text style={styles.profileName}>{ user.displayName }</Text>
                <Text style={ styles.profileEmail }>{ user.email }</Text>
                {/* <Button title="my button" onPress={() => this.getUser()}></Button> */}
            </View>
        </View>
        <View style={styles.screenNavigation}>
            <TouchableOpacity style={styles.navigation}>
                <Icon name="address-card" size={35} color="#939393"></Icon>
                <Text style={styles.title}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Icon name="copy" size={35} color="#939393"></Icon>
                <Text style={styles.title}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Icon name="coins" size={35} color="#939393"></Icon>
                <Text style={styles.title}>Balance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Icon name="university" size={35} color="#939393"></Icon>
                <Text style={styles.title}>Bank data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Icon name="hands-helping" size={35} color="#939393"></Icon>
                <Text style={styles.title}>moves</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Icon name="box" size={35} color="#939393"></Icon>
                <Text style={styles.title}>My products</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    top: {
        backgroundColor: 'orange',
        paddingTop: 40,
        height: 130,
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'relative'
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'white',
        position: 'absolute',
        left: '8%',
        top: '40%',
    },
    profileInfo: {
        marginLeft: 100,
        width: '55%',
        top: '45%',
        paddingBottom: 20,
        position: 'absolute',
        right: 0,
    },
    profileName: {
        fontSize: 22,
        color: 'white',
    },
    profileEmail: {
        color: 'white',
    },
    screenNavigation: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingVertical: 20
    },
    navigation: {
        width: '50%',
        height: '33.33%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AccountScreen;