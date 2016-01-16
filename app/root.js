const React = require('react-native');
const { Text, View, PropTypes, ScrollView, Animated, Dimensions } = React;
const {width, height} = Dimensions.get('window');

const $$ = require('./stylesheet').get;
const Perfecta = require('../dev/perfecta');

//const Router = require('react-native-router');

/* ROUTES */
const routes = (function (list) {
  return function (name) {
    return list[name]
  }
})({
  '_screenlist': require('./screen/_screenlist'),
  'welcome': require('./screen/welcome'),
  // strange name for strange screen
  'bluepage': require('./screen/bluepage'),
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
      inAnimate: false,
      anim: new Animated.Value(0),
      route: '_screenlist',
      //route: 'signup/whosyourbank',
      //route: 'signup/agreement',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        inAnimate: true
      });
      Animated.timing(
          this.state.anim,
          {
            toValue: 1,
            duration: 222,
            //velocity: 3,
            //tension: 140,
            //friction: 100,
          }
      ).start(this.onEndAnimation.bind(this));
    }, 500)
  }

  toRoute(adress) {
    this.setState({route: adress})
  }

  onEndAnimation() {
    this.setState({
      inAnimate: false
    })
  }

  render() {
    const {inAnimate} = this.state
    //console.log(Navigator.SceneConfigs);

    //var Screen = (function () {
    //  // dirty check, but oookay )
    //  if (this.state.route.split('/')[0] === 'signup') {
    //    const SignupWrapper = require('./screen/signup');
    //    const SignupPage = routes(this.state.route);
    //    return function (props) {
    //      return (<SignupWrapper title={SignupPage.title} {...props}>{(props) => <SignupPage style={props.style}/>}</SignupWrapper>)
    //    }
    //  } else {
    //    return routes(this.state.route)
    //  }
    //}.bind(this))();



    //<Animated.Text>{this.state.anim}</Animated.Text>

    //this.state.anim.interpolate({
    //  inputRange: [0, 1],
    //  outputRange: [0, 850]
    //})
    console.log('width', width)

    const screenStyles = {
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      width, height
    }
    const oldScreenStyles = {
      opacity: this.state.anim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      }),
      transform: [{
        perspective: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [1000, 650]
        })
      }, {
        rotateY: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '20deg']
        })
      }, {
        scale: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, .8]
        })
      }, {
        translateX: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, width * -1]
        })
      }]
    };
    const newScreenStyles = {
      opacity: this.state.anim.interpolate({
        inputRange: [0, .7],
        outputRange: [0, 1]
      }),
      transform: [{
        perspective: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [1000, 650].reverse()
        })
      }, {
        rotateY: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '20deg'].reverse()
        })
      }, {
        scale: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, .8].reverse()
        })
      }, {
        translateX: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [width, 0]
        })
      }]
    }
    //const newScreenStyles = map(oldScreenStyles, () => /* inputRange перевернуть и стороны изменить */)

    const OldScreen = require('./screen/welcome')
    const NewScreen = require('./screen/bluepage')

    const NewScreenComponent = <Animated.View style={[screenStyles, newScreenStyles]}>
      <NewScreen toRoute={this.toRoute.bind(this)} style={[$$('wrapper-screen'), {width, height}]} />
    </Animated.View>

    const OldScreenComponent = <Animated.View style={[screenStyles, oldScreenStyles]}>
      <OldScreen toRoute={this.toRoute.bind(this)} style={$$('wrapper-screen'), {width, height}} />
    </Animated.View>

    return (<View style={$$('wrapper')}>
      {NewScreenComponent}
      {OldScreenComponent}
      <Perfecta source={require('../dev/design/aggrement_1.png')} opacity={.3} />
    </View>)
  }
}
//<Router firstRoute={
//    component: ''
//    } />

module.exports = Root;

//var Screen = SCREENS[
//    this.props.router.page.split('/')[0]
//    ];

//transform: [{scale: .8}/*, {skewX: '5deg'}*/, {skewY: '5deg'}]
//transformMatrix: [
//  0.8, 0, 0.00, 0.0005,
//  0.00, 0.8, 0.00, 0,
//  0, 0, 1, 0,
//  -20, 0, 0, 1
//],
//transformMatrix:  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]