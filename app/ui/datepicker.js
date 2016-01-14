const React = require('react-native');
const {
    Text, View, PropTypes, DatePickerIOS
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const Input = require('./input');


class Datepicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.date || new Date(),
      focus: false
    }
  }

  onDateChange(date) {
    this.props.onDateChange && this.props.onDateChange(date);
    this.setState({date});
  }

  render() {
    console.log('render of Datepicker', this.state.date);

    const picker = this.state.focus ? <DatePickerIOS
        date={this.state.date}
        mode="date"
        onDateChange={this.onDateChange.bind(this)}
    /> : null;
    console.log(123123123, picker)

    return (<View style={this.props.style}>
      {picker}
      <Input {...this.props}
          value={this.state.date.toLocaleDateString()}
          onFocus={() => this.setState({focus: true})}
          onBlur={() => this.setState({focus: false})}
      />
    </View>)
  }
}

Datepicker.defaultProps = {};
Datepicker.propTypes = {};

module.exports = Datepicker;