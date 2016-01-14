const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');

class SignupWhoareyou extends React.Component {
  render() {
    console.log('render of SignupWhoareyou', this.props, this.state);

    return (<View style={this.props.style}>

      <View style={$$('form-group')}>
        <UI.H2>Are you US citizen</UI.H2>
        <UI.Radio>
          <UI.Option value="yes">Yes</UI.Option>
          <UI.Option value="no">No</UI.Option>
        </UI.Radio>
      </View>


      <View style={$$('form-group')}>
        <UI.H2>Where do you live</UI.H2>
        <UI.Input placeholder="Adress" />
        <UI.Input placeholder="City" />
        <UI.Input placeholder="Postal Code" keyboardType="number-pad"/>
      </View>

      <View style={$$('form-group')}>
        <UI.H2>Date of Birth</UI.H2>
        <UI.Datepicker placeholder="Tap to select birth date" />
      </View>

      <View style={$$('form-group')}>
        <UI.H2>Citizenship</UI.H2>
        <UI.Countrypicker placeholder="Tap to select country" />
        <UI.Input placeholder="SIN" keyboardType="number-pad" />
      </View>

      <UI.Button style={{}}>Next</UI.Button>

    </View>)
  }
}
SignupWhoareyou.title = 'Lets get to know you';

SignupWhoareyou.defaultProps = {};
SignupWhoareyou.propTypes = {};

module.exports = SignupWhoareyou;