const React = require('react-native');
const {
    Text, View, PropTypes, TouchableOpacity
    } = React;

const _ = require('lodash');
const {reduce, assign, filter, isString} = _;


class Option extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of Option', this.props, this.state);
    const {isSelected} = this.props;

    const children = isString(this.props.children)
        ? <Text style={{color: isSelected ? 'black' : 'gray'}}>{this.props.children}</Text>
        : this.props.children;


    const circleStyle = {
      width: 12, height: 12, borderWidth: .5, borderRadius: 12 / 2,
      alignSelf: 'center',
      borderColor: isSelected ? 'black' : 'gray',
      backgroundColor: isSelected ? 'gray' : 'transparent'
    };
    const optionStyle = [{
      flexDirection: "row", marginTop: 6, marginBottom: 8
    }, this.props.style]

    return (<TouchableOpacity onPress={this.props.onPress}
        style={optionStyle}>
      <View style={{flex: 1}}>
        <View style={circleStyle} />
      </View>
      <View style={{flex: 10}}>
        {children}
      </View>
    </TouchableOpacity>)
  }
}

Option.defaultProps = {};
Option.propTypes = {};

module.exports = Option;