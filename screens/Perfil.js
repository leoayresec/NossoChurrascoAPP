//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { corPrimaria, corButtonChurrascar } from '../config/styles';

// create a component
class Perfil extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Perfil</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: corPrimaria,
    },
});

//make this component available to the app
export default Perfil;
