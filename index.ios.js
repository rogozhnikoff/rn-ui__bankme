/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  //StyleSheet,
  //Text,
  //View,
} = React;

var Root = require('./app/root');

AppRegistry.registerComponent('bankme', () => Root);
