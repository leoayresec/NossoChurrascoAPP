import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Tabs from './config/Routes';
import { createAppContainer } from 'react-navigation';
const AppContainer = createAppContainer(Tabs)
export default class App extends Component {
  render() {
    return <AppContainer/>


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});