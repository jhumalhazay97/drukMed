/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default class App extends Component{
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1C1328"
        barStyle="light-content"
        />
        <Text style={styles.welcome}>Druk Med</Text>
        <Text style={styles.instructions}>All medicine in one App.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1328',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
