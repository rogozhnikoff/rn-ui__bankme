const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const Input = require('./input');


class Datepicker extends React.Component {

  render() {
    console.log('render of Datepicker', this.props, this.state);

    return (<View style={this.props.style}>
      <Input {...this.props}/>
    </View>)
  }
}

Datepicker.defaultProps = {};
Datepicker.propTypes = {};

module.exports = Datepicker;