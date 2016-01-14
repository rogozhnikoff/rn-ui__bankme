const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');


class SignupFinancial extends React.Component {
  render() {
    console.log('render of SignupFinancial', this.props, this.state);

    return (<View style={this.props.style}>

      <View style={$$('form-group')}>
        <UI.H2>How would you describe your investment strategy</UI.H2>
        <UI.Radio>
          <UI.Option value="1">Make as much money as possible</UI.Option>
          <UI.Option value="2">Steady growth over time</UI.Option>
          <UI.Option value="3">Minimizing my losses</UI.Option>
          <UI.Option value="4">Generating extra monthly income</UI.Option>
        </UI.Radio>
      </View>

      <View style={$$('form-group')}>
        <UI.H2>What is your primary source of income?</UI.H2>
        <UI.Radio>
          <UI.Option value="1">Salary</UI.Option>
          <UI.Option value="2">Salary and commission</UI.Option>
          <UI.Option value="3">Comission only</UI.Option>
          <UI.Option value="4">Investment only</UI.Option>
          <UI.Option value="5">I have no income</UI.Option>
        </UI.Radio>
      </View>

      <UI.Button>Next</UI.Button>
    </View>)
  }
}
SignupFinancial.title = 'Keep it up';

SignupFinancial.defaultProps = {};
SignupFinancial.propTypes = {};

module.exports = SignupFinancial;