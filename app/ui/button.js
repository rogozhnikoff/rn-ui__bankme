/*
* анимация хороша на https://github.com/larsvinter/react-native-awesome-button/blob/master/src/AwesomeButton.js
*
* попроще:
* https://github.com/ide/react-native-button/blob/master/Button.js
*
* с индикатором:
* https://github.com/APSL/react-native-button/blob/master/Button.js
*
* */



const React = require('react-native');
const {
    StyleSheet, Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const styles = {
  boxStyle: StyleSheet.create({}),
  labelStyle: StyleSheet.create({}),
};
class Button extends React.Component {
  render() {
    console.log('render of Button', this.props, this.state);

    return (<View style={assign({}, this.props.boxStyle, styles.boxStyle)}>
      <Text style={assign({}, this.props.labelStyle, styles.labelStyle)}>{this.props.children}</Text>
    </View>)
  }
}

Button.defaultProps = {};
Button.propTypes = {};

module.exports = Button;