//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { corPrimaria, corButtonChurrascar } from '../config/styles';

// create a component
class Calculadora extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CalculadoraChurrasco')}
                    >
                        <Image
                            style={styles.imagemLogin}
                            source={require('../imagens/simboloPorcao.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CalculadoraCerveja')}

                    >
                        <Image
                            style={styles.imagemLogin}
                            source={require('../imagens/simboloPorcao.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerDados}>
                </View>

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

    }, containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        flexDirection: 'row'

    },
    containerDados: {
        flex: 1,
        alignItems: 'center'
    },
    imagemLogin: {
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: corPrimaria,
        borderRadius: 60,
    }, viewTexNome: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

//make this component available to the app
export default Calculadora;
