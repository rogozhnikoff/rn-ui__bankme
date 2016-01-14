const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of RadioGroup', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "RadioGroup" ...</Text>
    {this.props.children}
    </View>)
  }
}

RadioGroup.defaultProps = {};
RadioGroup.propTypes = {};

module.exports = RadioGroup;