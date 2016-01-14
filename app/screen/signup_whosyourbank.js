const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');

const UI = require('../ui');

class SignupWhosyourbank extends React.Component {
  render() {
    console.log('render of SignupWhosyourbank', this.props, this.state);
    //<ScrollView style={{flex: 1, marginLeft: 20, marginRight: 20, marginTop: 25, marginBottom: 25}}>
    //</ScrollView>

    return (<View style={this.props.style}>
        <View style={STYLES['form-group']}>
          <UI.H2>Where do you live</UI.H2>
          <UI.Input placeholder="Adress" autoFocus />
          <UI.Input placeholder="City" />
          <UI.Input placeholder="Postal Code" keyboardType="number-pad"/>
        </View>

        <View style={STYLES['form-group']}>
          <UI.H2>Date of Birth</UI.H2>
          <UI.Datepicker placeholder="Tap to select birth date" />
        </View>

        <View style={STYLES['form-group']}>
          <UI.H2>Citizenship</UI.H2>
          <UI.Countrypicker placeholder="Tap to select country" />
          <UI.Input placeholder="SIN" keyboardType="number-pad" />
          <UI.Input placeholder="SIN" keyboardType="number-pad" />
          <UI.Input placeholder="SIN" keyboardType="number-pad" />
          <UI.Input placeholder="SIN" keyboardType="number-pad" />
        </View>

        <View style={STYLES['form-group']}>
          <UI.H2>Are you US citizen</UI.H2>
            <UI.RadioGroup>
                <UI.Radio>Yes</UI.Radio>
                <UI.Radio>No</UI.Radio>
            </UI.RadioGroup>
        </View>

    </View>)
  }
}
SignupWhosyourbank.title = 'Choose your bank'
SignupWhosyourbank.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupWhosyourbank.propTypes = {};

module.exports = SignupWhosyourbank;