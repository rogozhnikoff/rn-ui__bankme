const React = require('react-native');
const {
    Text, View, PropTypes, Image
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');

class SignupLinkbank extends React.Component {
  constructor(props) {
    super(props);

    assign(this, require('./signup').insideMixin)
  }
  render() {
    const iconStyle = {
      width: 142 * .8,
      height: 179 * .8,
      alignSelf: 'center',
      marginBottom: 30
    }

    return (<View style={this.props.style}>
      <Image source={require('../assets/icon-guard.png')} style={iconStyle}/>

      <Text style={{
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 15,
        fontSize: 19,
        color: 'gray',
        marginBottom: 25
      }}>All bankMe accounts are insured against 1$ million of fraud and theft</Text>

      <View style={$$('input-wrap')}>
        <Text style={$$('input-wrap-label')}>Bank username</Text>
        <UI.Input style={$$('input-wrap-field')} placeholder="Username" />
      </View>

      <View style={$$('input-wrap')}>
        <Text style={$$('input-wrap-label')}>Bank password</Text>
        <UI.Input style={$$('input-wrap-field')} placeholder="Password" />
      </View>

      <UI.Button onPress={() => this.gotoRoute('signup/honeymoney')}>Next</UI.Button>
    </View>)
  }
}
SignupLinkbank.title = 'Link accounts for roundups';

SignupLinkbank.defaultProps = {};
SignupLinkbank.propTypes = {};

module.exports = SignupLinkbank;