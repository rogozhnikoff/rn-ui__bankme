const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const $$ = require('../stylesheet').get;


module.exports = {
  'H2': (props) => {
    return (<View style={[$$('h2'), props.boxStyle]}>
      <Text style={[$$('h2-text'), props.style]}>{props.children}</Text>
    </View>)
  },
};