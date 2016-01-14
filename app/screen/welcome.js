const React = require('react-native');
const {
    Text, View, PropTypes, StyleSheet, Dimensions, Image
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const UI = require('../ui');
const $$ = require('../stylesheet').get;

const Router = require('react-native-router');

//return (<Router
//  //  hideNavigationBar={false}
//    firstRoute={{
//      name: 'title of welcome 2',
//      component: require('./welcome2')
//    }}
///>)

const Carousel = require('react-native-carousel');

//require('../assets/welcome/homescreen_2x_326ppi.png')
const {width, height} = Dimensions.get('window');


class Welcome extends React.Component {
  render() {
    console.log('render of Welcome', this.props, this.state);

    return (<View style={[this.props.style, {}]}>
      <Carousel animate={false} loop={false} style={styles['carousel']}>

        <View style={[$$('carousel-item'), {width, height}]}>
          <Image
              source={require('../assets/welcome/homescreen_2x_326ppi.png')}
              style={[$$('carousel-bg'), {width, height}]} resizeMode="cover">

            <View style={$$('carousel-overlay')}>
              <Text style={$$('welcome-title')}>Automatically roundup purchases and invest the change</Text>
            </View>
          </Image>
        </View>

        <View style={[$$('carousel-item'), {width, height}]}>
          <Image
              source={require('../assets/welcome/homescreen_2x_326ppi2.png')}
              style={[$$('carousel-bg'), {width, height}]} resizeMode="cover">

            <View style={{}}>
              <Text style={$$('welcome-title')}>Join the bankMe family and start savings today</Text>

              <View  style={$$('carousel-overlay')}>
                  <UI.Input placeholder="Phone number" style={$$('black-input')} />
                  <UI.Input placeholder="Email" style={$$('black-input')} />
                  <UI.Input placeholder="Password" style={$$('black-input')} />
              </View>
            </View>
          </Image>
        </View>

      </Carousel>

      <UI.Button style={{}} color="blue">Get Started</UI.Button>

      <View style={$$('haveanaccount')}>
        <Text style={$$('haveanaccount-text')}>{'Have an account?'}</Text>
        <UI.Button style={$$('haveanaccount-btn')}>Sign in</UI.Button>
      </View>
    </View>)
  }
}
var styles = StyleSheet.create({
  'carousel-bg': {
    flex: 1,
  },
  'carousel': {
    flex: 1,
    alignItems: 'stretch'
  },
  'carousel-item': {
    alignSelf: 'stretch',
    backgroundColor: 'pink',
  },
});


Welcome.defaultProps = {};
Welcome.propTypes = {};

module.exports = Welcome;