//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { corPrimaria, corButtonChurrascar } from '../config/styles';
import CryptoJS from "crypto-js";
import axios from 'axios';
import { decryptMessage } from '../config/crypto'




// create a component
class MeuChurrasco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: ""
        }
    }
    componentDidMount() {

        axios.get('http://30b265e7.ngrok.io/api/users')
            .then(function (response) {

                let bytesNome = decryptMessage(response.data.username)
                let bytesEmail = decryptMessage(response.data.email)
                this.setState({ nome: bytesNome, email: bytesEmail })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Bem Vindo, {this.state.nome}</Text>
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
export default MeuChurrasco;
