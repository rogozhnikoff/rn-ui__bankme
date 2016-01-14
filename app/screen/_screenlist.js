const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const UI = require('../ui')
const STYLES = require('../stylesheet');

class _PageList extends React.Component {
  render() {
    console.log('render of _PageList', this.props, this.state);

    return (<View style={this.props.style}>

      <UI.H2>Hey bro, it's a list of screens of bankMe application</UI.H2>
      <ScrollView style={{flex: 1, marginTop: 25}}>
        <UI.Button onPress={() => this.props.toRoute('welcome')}>welcome</UI.Button>
        <UI.Button onPress={() => this.props.toRoute('welcome2')}>welcome2</UI.Button>
      </ScrollView>
    </View>)
  }
}

_PageList.defaultProps = {};
_PageList.propTypes = {};

module.exports = _PageList;