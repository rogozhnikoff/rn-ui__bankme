const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');
const UI = require('../ui');

class SignupWhoareyou extends React.Component {
  render() {
    console.log('render of SignupWhoareyou', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>SignupWhoareyou</Text>
    </View>)
  }
}
SignupWhoareyou.title = 'Lets get to know you';

SignupWhoareyou.defaultProps = {};
SignupWhoareyou.propTypes = {};

module.exports = SignupWhoareyou;