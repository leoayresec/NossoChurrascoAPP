//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { corPrimaria, corButtonChurrascar } from '../config/styles';
import CryptoJS from "react-native-crypto-js";
import axios from 'axios';



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
        /*const { nome, email } = this.state
        let bytesNome = CryptoJS.AES.decrypt(encryptNome, '102031');
        let bytesEmail = CryptoJS.AES.decrypt(encryptEmail, '102031');
        */axios.get('https://877fa923.ngrok.io/api/users')
            .then(function (response) {

                let bytesNome = CryptoJS.AES.decrypt(response.data.username, '102031');
                let bytesEmail = CryptoJS.AES.decrypt(response.data.email, '102031');
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
                <Text>Leonardo Ayres</Text>
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
