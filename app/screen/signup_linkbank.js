const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');
const UI = require('../ui');

class SignupLinkbank extends React.Component {
  render() {
    console.log('render of SignupLinkbank', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>SignupLinkbank</Text>
    </View>)
  }
}
SignupLinkbank.title = 'Link accounts for roundups';

SignupLinkbank.defaultProps = {};
SignupLinkbank.propTypes = {};

module.exports = SignupLinkbank;