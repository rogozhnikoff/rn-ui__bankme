const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');
const UI = require('../ui');

class SignupFinancial extends React.Component {
  render() {
    console.log('render of SignupFinancial', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>SignupFinancial</Text>
    </View>)
  }
}
SignupFinancial.title = 'Keep it up';

SignupFinancial.defaultProps = {};
SignupFinancial.propTypes = {};

module.exports = SignupFinancial;