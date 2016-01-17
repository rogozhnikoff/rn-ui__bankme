const React = require('react-native');
const {
    Text, View, PropTypes, DatePickerIOS
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const Input = require('./input');
const $$ = require('../stylesheet').get;

class Datepicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.date || new Date(),
      //focus: false
    }
  }

  onDateChange(date) {
    this.props.onDateChange && this.props.onDateChange(date);
    this.setState({date});
  }

  render() {
    return (<View style={this.props.style}>
      <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this.onDateChange.bind(this)}
      />
    </View>)
  }
}
//<Input {...this.props}
//    value={this.state.date.toLocaleDateString()}
//    onFocus={() => this.setState({focus: true})}
//    onBlur={() => this.setState({focus: false})}
///>

Datepicker.defaultProps = {};
Datepicker.propTypes = {};

module.exports = Datepicker;