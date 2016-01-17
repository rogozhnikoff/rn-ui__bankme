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

function getScreen(name) {
  // dirty check, but oookay )
  if (name.split('/')[0] === 'signup') {
    const SignupWrapper = require('./screen/signup');
    const SignupPage = routes(name);
    return function (props) {
      return (<SignupWrapper title={SignupPage.title} {...props}>{(props) => <SignupPage style={props.style}/>}</SignupWrapper>)
    }
  } else {
    return routes(name)
  }
}


/* ROOT COMPONENT */
class Root extends React.Component {
  constructor(props) {
    super(props)

    this.inAnimate = false;

    this.state = {
      anim: new Animated.Value(0),

      currentScreen: 'signup/whoareyou',
      newScreen: null,

      inAnimation: false,

      //route: 'signup/agreement',
    }
  }

  getStyles () {
    const screenStyles = {
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      width, height
    };
    const currentScreenStyles = {
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
          outputRange: [0, (width * -1)]
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
          outputRange: [width, -1] // dirty hack?
        })
      }]
    };
    const emptyScreenStyles = {
      opacity: 1,
      transform: [{perspective: width}, {rotateY: '0deg'}, {scale: 1}, {translateX: 0}]
    }
    return {
      screenStyles, currentScreenStyles, newScreenStyles
    }
  }

  componentDidMount() {

  }

  toRoute(name) {
    //console.log('::::::::::::::::::::::::::::::::: toRoute', name)
    this.setState({newScreen: name});

    // запускаем анимацию
    setTimeout(() => {
      //this.inAnimate = true;

      Animated.timing(
          this.state.anim,
          {
            toValue: 1,
            duration: 222,
            //velocity: 3,
            //tension: 140,
            //friction: 100,
          }
      ).start(() => {
            //this.inAnimate = false;

            // меняем местами
            this.setState({
              anim: new Animated.Value(0),
              currentScreen: name,
              newScreen: null
            });
          });
    }, 200);
  }

  render() {
    const {screenStyles, currentScreenStyles, newScreenStyles, emptyScreenStyles} = this.getStyles()
    const {currentScreen, newScreen} = this.state;
    const {inAnimate} = this;

    console.log('00000000000000000', inAnimate);

    var NewScreen, NewScreenComponent;
    //if(newScreen && !inAnimate) {
    if(newScreen) {
      // создаем новый скрин
      NewScreen = getScreen(newScreen);
      NewScreenComponent = <Animated.View style={[screenStyles, newScreenStyles]}>
        <NewScreen toRoute={this.toRoute.bind(this)} style={[$$('wrapper-screen'), {width, height}]} />
      </Animated.View>
    }

    const CurrentScreen = getScreen(currentScreen);
    const CurrentScreenComponent = <Animated.View style={[screenStyles, newScreen ? currentScreenStyles : emptyScreenStyles]}>
      <CurrentScreen toRoute={this.toRoute.bind(this)} style={[$$('wrapper-screen'), {width, height}]} />
    </Animated.View>;

    console.log('////// NewScreen', NewScreen);
    console.log('////// CurrentScreen', CurrentScreen, currentScreenStyles);

    return (<View style={$$('wrapper')}>
      {NewScreenComponent}
      {CurrentScreenComponent}
      <Perfecta source={require('../dev/design/whoareyou_2.png')} opacity={.4} />
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