const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const UI = require('../ui')
const STYLES = require('../stylesheet');

class _PageList extends React.Component {
  render() {
    console.log('render of _PageList', this.props, this.state);

    return (<View style={this.props.style}>

      <UI.H2>Hey bro, it's a list of screens of bankMe application</UI.H2>

      <UI.Button onPress={() => this.props.toRoute('signup/agreement')}>signup/agreement</UI.Button>

      <UI.Button onPress={() => this.props.toRoute('signup/financial')}>signup/financial</UI.Button>

      <UI.Button onPress={() => this.props.toRoute('signup/honeymoney')}>signup/honeymoney</UI.Button>

      <UI.Button onPress={() => this.props.toRoute('signup/linkbank')}>signup/linkbank</UI.Button>

      <UI.Button onPress={() => this.props.toRoute('signup/whoareyou')}>signup/whoareyou</UI.Button>

      <UI.Button onPress={() => this.props.toRoute('signup/whosyourbank')}>signup/whosyourbank</UI.Button>
    </View>)
  }
}

_PageList.defaultProps = {};
_PageList.propTypes = {};

module.exports = _PageList;