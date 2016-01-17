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

    return (<View style={[this.props.style,
      {paddingLeft: 35, paddingRight: 35, paddingTop: 24, marginLeft: 0, marginRight: 0, paddingBottom: 7}]}>

      <View style={[$$('form-group')]}>
        <Text style={$$('form-head')}>Where do you live?</Text>
        <UI.Input placeholder="Adress" />
        <UI.Input placeholder="City" />
        <UI.Input placeholder="Postal Code" keyboardType="number-pad"/>
      </View>

      <View style={$$('form-group')}>
        <Text style={$$('form-head')}>Date of Birth</Text>
        <UI.Input placeholder="Postal Code" keyboardType="number-pad"/>
        {/*<UI.Datepicker placeholder="Tap to select birth date" />*/}
      </View>

      <View style={$$('form-group')}>
        <Text style={$$('form-head')}>Citizenship</Text>
        {/*<UI.Countrypicker placeholder="Tap to select country" />*/}
        <UI.Input placeholder="SIN" keyboardType="number-pad" />
      </View>

      <View style={[$$('form-group')]}>
        <Text style={$$('form-head')}>Are you a US citizen?</Text>
        <UI.Radio style={{marginTop: 15, marginBottom: 15}}>
          <UI.Option value="yes">Yes</UI.Option>
          <UI.Option value="no">No</UI.Option>
        </UI.Radio>
      </View>

      <UI.Button style={{marginTop: 20}}>Next</UI.Button>

    </View>)
  }
}
SignupWhoareyou.title = 'Lets get to know you';

SignupWhoareyou.defaultProps = {};
SignupWhoareyou.propTypes = {};

module.exports = SignupWhoareyou;