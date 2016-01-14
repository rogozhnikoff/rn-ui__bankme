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
    Text, View, PropTypes, TouchableOpacity
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');
//const routes = require('../routes');

class Button extends React.Component {
  //goTo (name) {
  //  routes(name)
  //}
  render() {
    console.log('render of Button', this.props, this.state);

    const onEvents = reduce(this.props, function (memo, method, key) {
      // todo: it's dirty
      if (key.slice(0, 2) === 'on') {
        memo[key] = method;
      }
      return memo;
    }, {});
    return (<TouchableOpacity {...onEvents}>
      <View {...this.props}>
        <Text>{this.props.children}</Text>
      </View>
    </TouchableOpacity>)
  }
}

//Button.defaultProps = {};
//Button.propTypes = {};

module.exports = Button;