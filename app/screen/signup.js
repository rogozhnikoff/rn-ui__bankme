const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView, Dimensions
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const STYLES = require('../stylesheet');

const {width} = Dimensions.get('window')

class Header extends React.Component {
  render() {
    return (<View style={[STYLES['header'], this.props.style]}>
      <View style={STYLES['header-panel']} />

      <View style={STYLES['header-title']}>
        <Text style={STYLES['header-title-text']}>{this.props.title}</Text>
      </View>

      <View style={STYLES['header-title-progressbar']}>
        <View style={[STYLES['progressbar'], {width: width * this.props.progress}]} />
      </View>
    </View>)
  }
}


class SignupScreen extends React.Component {
  render() {
    console.log('render of SignupScreen', this.props, this.state);

    const Screen = this.props.children;
    return (<View style={[this.props.style]}>
      <Header title={this.props.title.toUpperCase()} progress={.3} />

      <ScrollView style={{flex: 1, height: 667-105, backgroundColor: 'white'}} showsVerticalScrollIndicator={true}>
        <Screen style={[{flex: 1}, {marginTop: 10, marginBottom: 15, marginLeft: 15, marginRight: 15}]}   />
      </ScrollView>
    </View>)
  }
}
//<Screen {...this.props} style={[this.props.style, STYLES['signup-screen'], {flex: 1}]}   />

SignupScreen.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupScreen.propTypes = {};

module.exports = SignupScreen;