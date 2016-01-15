const React = require('react-native');
const {
    Text, View, PropTypes, Dimensions, Image
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const multi = require('../stylesheet').multi;
const {width} = Dimensions.get('window');
const UI = require('../ui');

class SignupWhosyourbank extends React.Component {
  render() {
    console.log('render of SignupWhosyourbank', this.props, this.state);

    const optionWidth = parseInt((width * 0.85) / 2);
    const logoWidth = optionWidth * .8;

    const $$optionsStyle = assign({}, $$('choosebank-option'),
        {width: optionWidth});
    const $$logoStyle = assign({}, $$('choosebank-logo'),
        {width: logoWidth, height: logoWidth, borderRadius: logoWidth * .5});


    return (<View style={this.props.style}>

      <UI.Radio style={$$('choosebank')}>
        <UI.Option value="1" style={$$optionsStyle}>
          <Image style={$$logoStyle} source={require('../assets/logo/1.png')} />
        </UI.Option>
        <UI.Option value="2" style={$$optionsStyle}>
          <Image style={$$logoStyle} source={require('../assets/logo/1.png')} />
        </UI.Option>

        <UI.Option value="3" style={$$optionsStyle}>
          <Image style={$$logoStyle} source={require('../assets/logo/1.png')} />
        </UI.Option>
        <UI.Option value="4" style={$$optionsStyle}>
          <Image style={$$logoStyle} source={require('../assets/logo/1.png')} />
        </UI.Option>

        <UI.Option value="5" style={$$optionsStyle}>
          <Image style={$$logoStyle} source={require('../assets/logo/1.png')} />
        </UI.Option>
        <UI.Option value="6" style={$$optionsStyle}>
          <UI.H2 style={$$('choosebank-label')}>Other bank</UI.H2>
        </UI.Option>

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