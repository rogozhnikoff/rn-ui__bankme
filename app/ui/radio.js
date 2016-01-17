const React = require('react-native');
const {
    Text, View, PropTypes, cloneElement
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

    // todo: option не обязательно в первом слое лежит!
    // и вообще, перенеси в опшион, нехер тут хачить
    const items = map(
        filter(this.props.children, (el) => el.type === Option),
        function (option) {
          const value = option.props.value;

          return cloneElement(option, {
            key: value,
            isSelected: (value === selectedValue),
            onPress: () => this.setState({value})
          })
        }.bind(this)
    );

    return (<View style={[this.props.style, {}]}>
      {items}
    </View>)
  }
}

Radio.defaultProps = {};
Radio.propTypes = {};


module.exports = Radio;