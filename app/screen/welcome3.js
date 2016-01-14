const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');

const UI = require('../ui');

class Welcome3 extends React.Component {
  render() {
    console.log('render of Welcome3', this.props, this.state);

    return (<View style={this.props.style}>

      <View style={{marginTop: 20, backgroundColor: 'orange'}}>
        <UI.H2>Welcome3</UI.H2>
      </View>

    </View>)
  }
}
Welcome3.title = 'Welcome3'
Welcome3.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Welcome3.propTypes = {};

module.exports = Welcome3;