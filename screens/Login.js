import React from 'react';
import { TextInput, View, Text, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { corPrimaria, corButtonChurrascar } from '../config/styles';

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
                <View style={styles.containerImage}>
                    <Image
                        style={styles.imagemLogin}
                        source={require('../imagens/simboloPorcao.png')}
                    />
                </View>
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
                        style={styles.loginButtons}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.loginButtonText}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButtons}
                        onPress={() => Alert.alert('Registrar')}
                    >
                        <Text style={styles.loginButtonText}> REGISTRE-SE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Alert.alert('Esqueci a senha')}

                    >
                        <Text style={styles.textSenha}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
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
    containerImage: {
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
        backgroundColor: corButtonChurrascar,
        justifyContent: 'center',
        marginBottom: 20
    },
    loginButtonText: {
        color: 'white'
    },
    imagemLogin: {
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        backgroundColor: corPrimaria,
        borderRadius: 75    ,
    },
    textSenha: {
        color: 'blue',
        fontSize: 15
    }
})