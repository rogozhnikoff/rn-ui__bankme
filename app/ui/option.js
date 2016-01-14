const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign, filter} = _;




class Option extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of Option', this.props, this.state);



    return (<View style={this.props.style}>
      {this.props.children}
    </View>)
  }
}

Option.defaultProps = {};
Option.propTypes = {};

module.exports = Option;