const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');

class SignupHoneymoney extends React.Component {
  render() {
    return (<View style={this.props.style}>

      <View style={$$('form-group')}>
        <UI.H2>Employer</UI.H2>
        <UI.Input placeholder="Company Name" />
        <UI.Input placeholder="Job title" />
      </View>

      <View style={$$('form-group')}>
        <UI.H2>Annual income</UI.H2>

        <UI.Radio>
          <UI.Option value="1">{'< 30k'}</UI.Option>
          <UI.Option value="2">{'30k-50k'}</UI.Option>
          <UI.Option value="3">{'50k-70k'}</UI.Option>
          <UI.Option value="4">{'> 70k'}</UI.Option>
        </UI.Radio>
      </View>

      <View style={$$('form-group')}>
        <UI.H2>Will bankMe account for more than 10% of your net worth?</UI.H2>

        <UI.Radio>
          <UI.Option value="yes">Yes</UI.Option>
          <UI.Option value="no">No</UI.Option>
        </UI.Radio>
      </View>

      <UI.Button>Next</UI.Button>

    </View>)
  }
}
SignupHoneymoney.title = 'Lets get yo know you';

SignupHoneymoney.defaultProps = {};
SignupHoneymoney.propTypes = {};

module.exports = SignupHoneymoney;