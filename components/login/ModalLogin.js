import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'

class ModalLogin extends Component {

    state = { isVisible: true }

    render () {
        return (
            <Modal visible={this.props.isVisible} animationType="slide">
                <Text>My Text</Text>
            </Modal>
        )
    }
}

export default ModalLogin;