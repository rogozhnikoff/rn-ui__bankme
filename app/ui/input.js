const React = require('react-native');
const {
    Text, View, PropTypes, TextInput
    } = React;

const _ = require('lodash');
const {reduce, assign, isString, isEmpty, filter, isFunction} = _;
const STYLE = require('../stylesheet');

function mergeMethods() {
  var list = filter(arguments, isFunction);
  return function () {
    var _args = arguments;
    list.forEach((f) => f.apply(null, _args))
  }
}


// todo: animate label in float-way

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false
    }
  }

  render() {
    console.log('render of Input', this.props, this.state);

    const value = this.state.text || this.props.value;

    var lineStyle = STYLE.multi({
      'input-underline': true,
      'input-underline-noempty': isString(value) && !isEmpty(value),
      'input-underline-focus': this.state.focus,
    });

    const onFocus = mergeMethods(() => this.setState({focus: true}), this.props.onFocus);
    const onBlur = mergeMethods(() => this.setState({focus: false}), this.props.onBlur);

    return (<View style={[STYLE['input'], this.props.style]} >
      <TextInput
          {...this.props} // todo: filter or merge used methods
          onChangeText={(text) => this.setState({text})}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          style={STYLE.get('input-field')} />

      <View style={lineStyle} />
    </View>)
  }
}

Input.defaultProps = {};
Input.propTypes = {};

module.exports = Input;