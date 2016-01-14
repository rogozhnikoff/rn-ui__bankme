const React = require('react-native');
const { Text, View, PropTypes } = React;

const STYLES = require('./stylesheet');


/* ROUTES */
const routes = (function (list) {
  return function (name) {
    return list[name]
  }
})({
  '_screenlist': require('./screen/_screenlist'),
  'welcome': require('./screen/welcome'),
  'welcome2': require('./screen/welcome2'),

  'signup/whosyourbank': require('./screen/signup_whosyourbank'),
  'signup/whoareyou': require('./screen/signup_whoareyou'),
  'signup/financial': require('./screen/signup_financial'),
  'signup/linkbank': require('./screen/signup_linkbank'),
  'signup/honeymoney': require('./screen/signup_honeymoney'),
  'signup/agreement': require('./screen/signup_agreement'),
});

/* ROOT COMPONENT */
class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      route: 'signup/whosyourbank'
      //route: 'welcome'
    }
  }

  toRoute(adress) {
    this.setState({route: adress})
  }

  render() {
    //console.log(Navigator.SceneConfigs);

    var Screen = (function(isSignupRoute){
      // dirty check, but oookay )
      if(isSignupRoute) {
        const SignupWrapper = require('./screen/signup');
        const SignupPage = routes(this.state.route);
        return function (props) {
          return (<SignupWrapper title={SignupPage.title} {...props}>{(props) => <SignupPage style={props.style}/>}</SignupWrapper>)
        }
      } else {
        return routes(this.state.route)
      }
    }.bind(this))(this.state.route.split('/')[0] === 'signup')

    return (<View style={STYLES['wrapper']}>
        <Screen toRoute={this.toRoute.bind(this)} />
    </View>)
  }
}

module.exports = Root;

//var Screen = SCREENS[
//    this.props.router.page.split('/')[0]
//    ];