const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const STYLES = require('../stylesheet');

class Header extends React.Component {
  render() {
    return (<View style={STYLES['header']}>
      <View style={STYLES['header-panel']} />

      <View style={STYLES['header-title']}>
        <Text style={STYLES['header-title-text']}>{this.props.title}</Text>
      </View>

      <View style={STYLES['header-title-progressbar']}>
        <View style={STYLES['progressbar']}></View>
      </View>
    </View>)
  }
}


class SignupScreen extends React.Component {
  render() {
    console.log('render of SignupScreen', this.props, this.state);

    const Screen = SCREENS[this.props.router.page.split('/')[1] || 'whosyourbank'];

    return (<View style={this.props.style}>
      <Header title={Screen.title.toUpperCase()} />

      <ScrollView style={{flex: 1}}>
        <Screen {...this.props} style={STYLES['signup-screen']}/>
      </ScrollView>
    </View>)
  }
}

SignupScreen.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupScreen.propTypes = {};

module.exports = SignupScreen;