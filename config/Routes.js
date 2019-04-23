import React from "react";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Login from "../screens/Login";
import MeuChurrasco from "../screens/MeuChurrasco";
import Perfil from "../screens/Perfil";
import { corSecundaria } from "./styles";

const HomeTab = createBottomTabNavigator(
    {
        Churrasco: {
            screen: MeuChurrasco,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        color={tintColor}
                    />
                )
            }
        },
        Perfil: {
            screen: Perfil,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon                        
                        color={tintColor}
                    />)
            }
        }

    },
    {
        tabBarOptions: {
            activeTintColor: corSecundaria,
            tintColor: 'white',

            labelStyle: {
                fontSize: 11,
            }
        }, swipeEnabled: true
    }
);

/*const detalhesTurmaTab = createBottomTabNavigator({


    Provas: {
        screen: Provas,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="library-books"
                    size={25}
                    type="Foundation"
                    color={tintColor}
                />)
        }

    },
    Alunos: {
        screen: Alunos,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="group"
                    size={25}
                    type="FontAwesome"
                    color={tintColor}
                />)
        }
    },

}, {
        tabBarOptions: {
            activeTintColor: "white",
            tabStyle: { backgroundColor: corSecundaria },
            labelStyle: {
                fontSize: 11,
            }
        },

    }
);*/
const HomeRoot = createStackNavigator({

    Home: {
        screen: HomeTab,
        navigationOptions: () => ({
            header: null
        })
    },
    /*detalhesTurma: {
        screen: detalhesTurmaTab,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.nome.toUpperCase()}`,
        }),
    },
    Provas: {
        screen: Provas,
        navigationOptions: () => ({
            header: null
        })
    },
    CriarProva: {
        screen: CriarProva,
        navigationOptions: ({ navigation }) => ({
            title: 'Criar Prova',

        }),
    },
    Turmas: {
        screen: Turmas,
        navigationOptions: () => ({
            header: null
        })

    },
    NovaTurma: {
        screen: NovaTurma,
        navigationOptions: ({ navigation }) => ({
            title: 'Nova Turma',
        }),

    },
    AdicionarAluno: {
        screen: AdicionarAluno,
        navigationOptions: ({ navigation }) => ({
            title: 'Adicionar Aluno',
        }),
    }*/
}
);

const stackLoginRegistro = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
   /* Registro: {
        screen: Registro,
        navigationOptions: ({ navigation }) => ({
            header: null
        })

    }*/
});

export default createSwitchNavigator({
   Login: {
        screen: stackLoginRegistro
    },
    Home: {
        screen: HomeRoot
    },
},
    {
        initialRouteName: 'Login'
    }

);
