const React = require('react-native');
const {
    Text, View, PropTypes, TouchableOpacity
    } = React;

const _ = require('lodash');
const {reduce, assign, filter, isString} = _;

const $$ = require('../stylesheet').get;

class Option extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const {isSelected} = this.props;

    const children = isString(this.props.children)
        ? <Text style={[$$('font-lato'), {color: isSelected ? 'black' : 'gray', fontSize: 18}]}>{this.props.children}</Text>
        : this.props.children;


    const cSize = 14;
    const circleStyle = {
      width: cSize, height: cSize, borderWidth: .5, borderRadius: cSize / 2,
      alignSelf: 'flex-start',
      borderColor: isSelected ? 'black' : 'gray',
      backgroundColor: isSelected ? 'gray' : 'transparent'
    };
    const optionStyle = [{
      flexDirection: "row", paddingTop: 18, paddingBottom: 22
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