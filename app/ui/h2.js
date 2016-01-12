const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const STYLE = require('../stylesheet');

class H2 extends React.Component {
  render() {
    console.log('render of H2', this.props, this.state);

    return (<View style={[STYLE['h2'], this.props.style]}>
      <Text style={STYLE['h2-text']}>{this.props.children}</Text>
    </View>)
  }
}

H2.defaultProps = {};
H2.propTypes = {};

module.exports = H2;