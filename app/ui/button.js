/*
 * анимация хороша на https://github.com/larsvinter/react-native-awesome-button/blob/master/src/AwesomeButton.js
 *
 * попроще:
 * https://github.com/ide/react-native-button/blob/master/Button.js
 *
 * с индикатором:
 * https://github.com/APSL/react-native-button/blob/master/Button.js
 *
 * */

const React = require('react-native');
const {
    Text, View, PropTypes, TouchableOpacity
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;


module.exports = (props) => {

  //const onEvents = reduce(props, function (memo, method, key) {
  //  // todo: it's dirty
  //  if (key.slice(0, 2) === 'on') {
  //    memo[key] = method;
  //  }
  //  return memo;
  //}, {});

  return (<TouchableOpacity {...props} style={[$$('button'), {
      backgroundColor: props.color ? props.color : 'transparent',
    }, props.style]}>
      <Text style={[$$('button-label'), {color: props.color ? 'white' : '#0c99e2'}, props.labelStyle]}>{props.children}</Text>
  </TouchableOpacity>)
};