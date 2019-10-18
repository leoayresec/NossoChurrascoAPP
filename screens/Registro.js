import React, { Component } from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import axios from 'axios';
import CryptoJS from "react-native-crypto-js";

export default class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        };
    }
    registroUsuario() {
        const { nome, email, password } = this.state;
        const api = 'https://877fa923.ngrok.io/api/users'
        let encryptNome = CryptoJS.AES.encrypt(nome, '102031').toString();
        let encryptEmail = CryptoJS.AES.encrypt(email, '102031').toString();
        let encryptPassword = CryptoJS.AES.encrypt(password, '102031').toString();


        console.log('AIOS')
        axios.post('https://877fa923.ngrok.io/api/users', {
            user: {
                username: encryptNome,
                email: encryptEmail,
                senha: encryptPassword
            }
        })
            .then(function (response) {
                console.log("Aqui");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTextRegistro}>
                    <Text style={styles.textRegistro}>REGISTRO</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        value={this.state.nome}
                        onChangeText={nome => this.setState({ nome })}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Digite sua senha"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity
                        style={styles.registerButtonCancel}
                        onPress={() => (this.props.navigation.goBack())}
                    >
                        <Text style={styles.registerButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.registerButtonCreate}
                        onPress={() => (this.registroUsuario())}
                    >
                        <Text style={styles.registerButtonText}> Criar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignContent: 'center'
    },
    containerTextRegistro: {
        paddingTop: 45,
        paddingBottom: 20,
        alignItems: 'center',
        marginBottom: 20
    },
    containerButtons: {
        justifyContent: 'space-between',
        marginTop: 35,
        flexDirection: 'row',
        marginHorizontal: 20
    },
    textRegistro: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'

    },
    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    registerButtonCancel: {
        width: 120,
        height: 45,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(204, 0, 0,0.8)',
        borderWidth: 0.5
    },
    registerButtonCreate: {
        width: 120,
        height: 45,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(0, 128, 0, 0.9)',
        borderWidth: 0.5
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16
    },
    imagemLogin: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 2,
    },

});