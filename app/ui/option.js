const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign, filter} = _;




class Option extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of Option', this.props, this.state);
    const {isSelected} = this.props


    return (<View style={[this.props.style, {flexDirection: "row", marginTop: 6, marginBottom: 8}]}>
        <View style={{flex: 1}}>
          <View style={{
            width: 12, height: 12, borderWidth: .5, borderRadius: 12/2, marginTop: 3, marginLeft: 4,
            borderColor: isSelected ? 'black' : 'gray',
            backgroundColor: isSelected ? 'gray' : 'transparent'
          }} />
        </View>
        <View style={{flex: 10}}>
          <Text style={{color: isSelected ? 'black' : 'gray'}}>{this.props.children}</Text>
        </View>
    </View>)
  }
}

Option.defaultProps = {};
Option.propTypes = {};

module.exports = Option;