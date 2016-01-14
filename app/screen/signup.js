const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView, Dimensions
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const $$ = require('../stylesheet').get;

const {width} = Dimensions.get('window')

class Header extends React.Component {
  render() {
    return (<View style={[$$('header'), this.props.style]}>
      <View style={$$('header-panel')} />

      <View style={$$('header-title')}>
        <Text style={$$('header-title-text')}>{this.props.title}</Text>
      </View>

      <View style={$$('header-title-progressbar')}>
        <View style={[$$('progressbar'), {width: width * this.props.progress}]} />
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

      <ScrollView style={$$('signup-scroll')} showsVerticalScrollIndicator={true}>
        <Screen style={$$('signup-screen')} />
      </ScrollView>
    </View>)
  }
}
//<Screen {...this.props} style={[this.props.style, STYLES['signup-screen'], {flex: 1}]}   />


SignupScreen.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupScreen.propTypes = {};

module.exports = SignupScreen;