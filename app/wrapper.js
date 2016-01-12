const React = require('react-native');
const {
    StyleSheet, Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


const SCREENS = {
  'signup': require('./screen/signup'),
}
const STYLES = require('./stylesheet');

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log('render of Wrapper', this.props, this.state);
    var Screen = SCREENS[
        this.props.router.page.split('/')[0]
        ];
    return (<View style={STYLES['wrapper']}>
      <Screen {...this.props} style={STYLES['screen']} />
    </View>)
  }
}

Wrapper.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Wrapper.propTypes = {};

module.exports = Wrapper;