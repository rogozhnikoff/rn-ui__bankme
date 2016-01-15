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

  const onEvents = reduce(props, function (memo, method, key) {
    // todo: it's dirty
    if (key.slice(0, 2) === 'on') {
      memo[key] = method;
    }
    return memo;
  }, {});

  return (<TouchableOpacity {...onEvents}>
    <View {...props} style={[{
      flex: 1, alignItems: 'center', marginTop: 8, marginBottom: 8,
      paddingTop: 17, paddingBottom: 17, paddingLeft: 17, paddingRight: 17,
      backgroundColor: props.color ? props.color : 'transparent',
      borderRadius: 1
    }, props.style]}>
      <Text style={[{
        //flex: 1,
        color: props.color ? 'white' : '#0c99e2',
        fontSize: 23,
        //fontFamily: props.color ? 'Circe Thin' : 'Lato Light Regular',
        //fontFamily: props.color ? 'CRC15' : 'lato_light',
        //fontFamily: 'lato_light',
      }, props.labelStyle]}>{props.children}</Text>
    </View>
  </TouchableOpacity>)
};