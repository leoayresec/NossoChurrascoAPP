import React from 'react';
import { TextInput, View, Text, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { corPrimaria } from '../config/styles';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ''
            , password: '',
            isLoading: false
        };

    }

    render() {
        return (
           <View style={styles.container}>
                
                <View>
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
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: corPrimaria,
        paddingHorizontal: 20
    },
    countainerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    containerButtons: {
        alignItems: 'center',
        marginTop: 20,

    },
    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    loginButtons: {
        width: 160,
        height: 45,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        marginBottom: 20
    },
    loginButtonText: {
        color: 'black'
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
    textSenha: {
        color: 'blue',
        fontSize: 15
    }
})