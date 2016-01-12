const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of Radio', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "Radio" ...</Text>
    </View>)
  }
}

Radio.defaultProps = {};
Radio.propTypes = {};


module.exports = Radio;