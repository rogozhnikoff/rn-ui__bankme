const React = require('react-native');
const {
    Text, View, PropTypes, PickerIOS
    } = React;

const PickerItemIOS = PickerIOS.Item;

const _ = require('lodash');
const {reduce, assign, map} = _;

const Input = require('./input');

const countries = require('../assets/countries.json');



// https://facebook.github.io/react-native/docs/pickerios.html

class Countrypicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.value || 'UA'
    }
  }
  render() {
    console.log('render of Countrypicker', this.props, this.state);

    return (<View style={this.props.style}>
      <PickerIOS
          selectedValue={this.state.value}
          onValueChange={(value) => this.setState({value})}
      >
      {map(countries, (c) => <PickerItemIOS key={c.code} value={c.code} label={c.name} />)}
      </PickerIOS>
    </View>)
  }
}

//<Input {...this.props}/>
Countrypicker.defaultProps = {};
Countrypicker.propTypes = {};

module.exports = Countrypicker;