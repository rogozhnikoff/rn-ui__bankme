const React = require('react-native');
const {
    Text, View, PropTypes, Dimensions, Image
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const {width} = Dimensions.get('window');
const UI = require('../ui');

class SignupWhosyourbank extends React.Component {
  render() {
    console.log('render of SignupWhosyourbank', this.props, this.state);


    return (<View style={this.props.style}>
      <UI.Radio style={$$('choosebank')}>
        <View style={$$('choosebank-row')}>
          <UI.Option value="1" style={$$('choosebank-option')}>
            <Image style={$$('choosebank-logo')} source={require('../assets/logos/1.png')} />
          </UI.Option>
          <UI.Option value="2" style={$$('choosebank-option')}>
            <Image style={$$('choosebank-logo')} source={require('../assets/logos/2.png')} />
          </UI.Option>
        </View>

        <View style={$$('choosebank-row')}>
          <UI.Option value="3" style={$$('choosebank-option')}>
            <Image style={$$('choosebank-logo')} source={require('../assets/logos/3.png')} />
          </UI.Option>
          <UI.Option value="4" style={$$('choosebank-option')}>
            <Image style={$$('choosebank-logo')} source={require('../assets/logos/4.png')} />
          </UI.Option>
        </View>

        <View style={$$('choosebank-row')}>
          <UI.Option value="5" style={$$('choosebank-option')}>
            <Image style={$$('choosebank-logo')} source={require('../assets/logos/5.png')} />
          </UI.Option>
          <UI.Option value="6" style={$$('choosebank-option')}>
            <UI.H2 style={$$('choosebank-label choosebank-label')}>Other bank</UI.H2>
          </UI.Option>
        </View>

      </UI.Radio>

      <UI.Button style={{}}>Next</UI.Button>
    </View>)
  }
}
SignupWhosyourbank.title = 'Choose your bank'
SignupWhosyourbank.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupWhosyourbank.propTypes = {};

module.exports = SignupWhosyourbank;