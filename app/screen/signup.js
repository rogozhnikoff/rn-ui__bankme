const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView, Dimensions
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const $$ = require('../stylesheet').get;

const {width} = Dimensions.get('window');
const Router = require('../vendor/react-native-router');

const routes = require('../routes.js')

class SignupScreen extends React.Component {
  constructor(props) {
    super(props)

    // dirty!!!
    SignupScreen.insideMixin.gotoScreen = props.gotoScreen
  }
  render() {
    const Child = this.props.firstComponent;

    //<Header title={this.props.title.toUpperCase()} progress={.3} />
    return (<View style={[this.props.style]}>
      <Router
          ref="router"
          firstRoute={{
            name: Child.title,
            component: Child,
            progress: Child.progress,
          }}
      />
    </View>)
  }
}


SignupScreen.insideMixin = {
  gotoRoute(path) {
    const Child = routes.raw(path);

    this.props.toRoute({
      name: Child.title,
      component: Child,
      progress: Child.progress,
    })
  },
  gotoScreen: console.error
};
//SignupScreen.getInsideComponent = routes.raw;

//(props) => {
//  return <ScrollView style={$$('signup-scroll')} showsVerticalScrollIndicator={true}>
//    <Screen {...props} style={[props.style, $$('signup-screen')]} />
//  </ScrollView>
//}
//<Screen {...this.props} style={[this.props.style, STYLES['signup-screen'], {flex: 1}]}   />


SignupScreen.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
SignupScreen.propTypes = {};

module.exports = SignupScreen;