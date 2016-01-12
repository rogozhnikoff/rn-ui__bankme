const React = require('react-native');
const {
    Text, View, PropTypes, TextInput
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const STYLE = require('../stylesheet');

// todo: animate label in float-way

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of Input', this.props, this.state);

    return (<View style={[STYLE['input'], this.props.style]} >
      <TextInput
        {...this.props} // todo: filter or merge used methods
          onChangeText={(text) => this.setState({text})}
        //onFocus={}
          value={this.state.text || this.props.value}
          style={STYLE['input-field']} />

      <View style={STYLE['input-underline']} />
    </View>)
  }
}

Input.defaultProps = {};
Input.propTypes = {};

module.exports = Input;