const React = require('react-native');
const { Text, View, PropTypes, ScrollView, Animated, Dimensions } = React;
const {width, height} = Dimensions.get('window');

const $$ = require('./stylesheet').get;
const Perfecta = require('../dev/perfecta');
const Screen = require('./screen');

//const Router = require('react-native-router');


/* ROOT COMPONENT */
class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenAnimateValue: new Animated.Value(0),

      //currentScreen: '_screenlist',
      currentScreen: 'welcome',
      newScreen: null
    }
  }

  /*componentDidMount() {
    console.log('ROOT [componentDidMount]');

    setTimeout(()=> {
      this.gotoScreen('bluepage')
      setTimeout(()=> {
        this.gotoScreen('welcome')
      }, 1000)
    }, 500)
  }*/

  gotoScreen(path) {
    console.log('--===>>> gotoScreen:', path);

    this.setState({
      newScreen: path
    });

    // запускаем анимацию
    setTimeout(() => {
      Animated.timing(this.state.screenAnimateValue, {
        toValue: 1,
        duration: 333,
      }).start(() => {
        // меняем местами
        this.setState({
          currentScreen: this.state.newScreen, // === this.state.newScreen
          newScreen: null
        }, () => {
          // анимашку к первичному виду
          this.state.screenAnimateValue.setValue(0)
        });
      });
    }, 0);
  }

  render() {
    const {currentScreen, newScreen, screenAnimateValue} = this.state;

    const screenProps = {
      screenAnimateValue,
      isAnimateFinish: this.state.screenAnimateValue.__getValue() === 1
    };
    const screenState = {
      gotoScreen: this.gotoScreen.bind(this),
    };

    return (<View style={$$('wrapper')}>
      <Screen isCurrent={true} {...screenProps} path={currentScreen} screenState={screenState} key={currentScreen} />
      <Screen isCurrent={false} {...screenProps} path={newScreen} screenState={screenState} key={newScreen} />
    </View>)
  }
}
//<Perfecta source={require('../dev/design/whoareyou_2.png')} opacity={.4} />


module.exports = Root;