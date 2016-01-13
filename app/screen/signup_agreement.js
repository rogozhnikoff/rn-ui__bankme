const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');
const UI = require('../ui');

class SignupAgreement extends React.Component {
  render() {
    console.log('render of SignupAgreement', this.props, this.state);

    return (<View style={this.props.style}>
        <Text>SignupAgreement</Text>
    </View>)
  }
}
SignupAgreement.title = 'Make it official';

SignupAgreement.defaultProps = {};
SignupAgreement.propTypes = {};

module.exports = SignupAgreement;