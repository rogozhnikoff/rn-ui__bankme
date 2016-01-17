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
    return (<View style={this.props.style}>
        <Text style={[$$('h2 font-lato'), {textAlign: 'center', fontSize: 18, marginTop: 12, marginBottom: 14}]}>TERMS OF SERVICE</Text>

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