const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');
const UI = require('../ui');

class SignupHoneymoney extends React.Component {
  render() {
    console.log('render of SignupHoneymoney', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>SignupHoneymoney</Text>
    </View>)
  }
}
SignupHoneymoney.title = 'Lets get yo know you';

SignupHoneymoney.defaultProps = {};
SignupHoneymoney.propTypes = {};

module.exports = SignupHoneymoney;