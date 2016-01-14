const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');

class SignupLinkbank extends React.Component {
  render() {
    console.log('render of SignupLinkbank', this.props, this.state);

    return (<View style={this.props.style}>
      <Image source={require('../assets/icon-guard.png')} style={{}}/>

      <Text style={{}}>All bankMe accounts are insured against 1$ million of fraud and theft</Text>

      <View style={$$('input-wrap')}>
        <Text style={$$('input-wrap-label')}>Bank username</Text>
        <UI.Input style={$$('input-wrap-field')} placeholder="Username" />
      </View>

      <View style={$$('input-wrap')}>
        <Text style={$$('input-wrap-label')}>Bank password</Text>
        <UI.Input style={$$('input-wrap-field') placeholder="Password" />
      </View>

      <UI.Button>Next</UI.Button>
    </View>)
  }
}
SignupLinkbank.title = 'Link accounts for roundups';

SignupLinkbank.defaultProps = {};
SignupLinkbank.propTypes = {};

module.exports = SignupLinkbank;