const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView, Dimensions
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const $$ = require('../stylesheet').get;

const {width} = Dimensions.get('window');
const Router = require('../vendor/react-native-router');


class SignupScreen extends React.Component {
  render() {
    console.log('render of SignupScreen', this.props, this.state);

    const Screen = this.props.children;

    //<Header title={this.props.title.toUpperCase()} progress={.3} />
    return (<View style={[this.props.style]}>
      <Router
          firstRoute={{
            name: 'atata',
            component: (props) => {
              return <ScrollView style={$$('signup-scroll')} showsVerticalScrollIndicator={true}>
                <Screen {...props} style={[props.style, $$('signup-screen')]}/>
              </ScrollView>
            }
          }}
      />



    </View>)
  }
}
//<Screen {...this.props} style={[this.props.style, STYLES['signup-screen'], {flex: 1}]}   />


SignupScreen.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupScreen.propTypes = {};

module.exports = SignupScreen;