const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');

class Bluepage extends React.Component {
  render() {
    console.log('render of Bluepage', this.props, this.state);

    return (<View style={this.props.style}>
      
    </View>)
  }
}

Bluepage.defaultProps = {};
Bluepage.propTypes = {};

module.exports = Bluepage;