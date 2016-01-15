const React = require('react-native');
const {
    Text, View, PropTypes, Dimensions
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');
const {width} = Dimensions.get('window');

class SignupAgreement extends React.Component {
  render() {
    console.log('render of SignupAgreement', this.props, this.state);

    return (<View style={this.props.style}>
        <UI.H2 style={{alignSelf: 'center'}}>TERMS OF SERVICE</UI.H2>

        <Text style={$$('quote quote-yellow')}>
          BY AGREEING...
        </Text>
        <Text style={$$('quote quote-yellow')}>
          AAAAå
        </Text>
        <Text style={$$('quote quote-yellow')}>
          BBBB
        </Text>

        <Text style={$$('paragraph')}>
            aksjdhfk;ajsdhf;kadhjsf;asdfhj
        </Text>
        <Text style={$$('paragraph')}>
            aksjdhfk;ajsdhf;kadhjsf;asdfhj
        </Text>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <View style={{flex: 1, width: width * .45}}>
            <UI.Button labelStyle={{fontSize: 15, color: 'gray'}}>I Disagree</UI.Button>
          </View>
          <View style={{flex: 1, width: width * .45}}>
            <UI.Button color="orange" labelStyle={{fontSize: 15}}>SIGN AGREEMENT</UI.Button>
          </View>
        </View>
    </View>)
  }
}
SignupAgreement.title = 'Make it official';

SignupAgreement.defaultProps = {};
SignupAgreement.propTypes = {};

module.exports = SignupAgreement;