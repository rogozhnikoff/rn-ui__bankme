const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


const STYLES = require('../stylesheet');


class _PageList extends React.Component {
  render() {
    console.log('render of _PageList', this.props, this.state);

    return (<View style={this.props.style}>
      <ScrollView style={{flex: 1}}>
        <View></View>
      </ScrollView>
    </View>)
  }
}

_PageList.defaultProps = {};
_PageList.propTypes = {};

module.exports = _PageList;