const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const Input = require('./input');

class Countrypicker extends React.Component {
  render() {
    console.log('render of Countrypicker', this.props, this.state);

    return (<View style={this.props.style}>
      <Input {...this.props}/>
    </View>)
  }
}

Countrypicker.defaultProps = {};
Countrypicker.propTypes = {};

module.exports = Countrypicker;