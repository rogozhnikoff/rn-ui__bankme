const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');

const UI = require('../ui');

class Welcome2 extends React.Component {
  render() {
    console.log('render of Welcome2', this.props, this.state);

    return (<View style={this.props.style}>

      <View style={{marginTop: 20, backgroundColor: 'pink'}}>
        <UI.H2>Welcome2 2</UI.H2>
        <UI.Button onPress={() => this.props.toRoute({name: 'shit', component: require('./welcome3')})}>go to welcome 3</UI.Button>
      </View>

    </View>)
  }
}
Welcome2.title = 'Welcome2'
Welcome2.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Welcome2.propTypes = {};

module.exports = Welcome2;