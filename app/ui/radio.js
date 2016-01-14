const React = require('react-native');
const {
    Text, View, PropTypes, cloneElement, TouchableOpacity
    } = React;

const _ = require('lodash');
const {reduce, assign, filter, map} = _;

const Option = require('./option');

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || null
    }
  }

  render() {
    console.log('render of Radio', this.props, this.state);

    const selectedValue = this.state.value;

    const items = map(
        filter(this.props.children, (el) => el.type === Option),
        function (option) {
          const value = option.props.value;

          return <TouchableOpacity onPress={() => this.setState({value})} key={value} style={{flex: 1}}>
          {cloneElement(option, {
            isSelected: (value === selectedValue)
          })}
          </TouchableOpacity>
        }.bind(this)
    );

    return (<View style={this.props.style}>
      {items}
    </View>)
  }
}

Radio.defaultProps = {};
Radio.propTypes = {};


module.exports = Radio;