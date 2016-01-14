const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');

class SignupAgreement extends React.Component {
  render() {
    console.log('render of SignupAgreement', this.props, this.state);

    return (<View style={this.props.style}>
        <UI.H2>TERMS OF SERVICE</UI.H2>

        <View style={$$('quote quote-yellow')}>
          BY AGREEING...
        </View>
        <View style={$$('quote quote-yellow')}>
          AAAA
        </View>
        <View style={$$('quote quote-yellow')}>
          BBBB
        </View>

        <View style={$$('paragraph')}>
            aksjdhfk;ajsdhf;kadhjsf;asdfhj
        </View>
        <View style={$$('paragraph')}>
            aksjdhfk;ajsdhf;kadhjsf;asdfhj
        </View>
        <View style={$$('insider1')}>
          <View style={{flex: 1}}>
            <UI.Button style={{}}>I Disagree</UI.Button>
          </View>
          <View style={{flex: 1}}>
            <UI.Button color="orange" style={{}}>SIGN AGREEMENT</UI.Button>
          </View>
        </View>
    </View>)
  }
}
SignupAgreement.title = 'Make it official';

SignupAgreement.defaultProps = {};
SignupAgreement.propTypes = {};

module.exports = SignupAgreement;