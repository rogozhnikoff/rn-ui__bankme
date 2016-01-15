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

const Carousel = require('../vendor/react-native-carousel');

//require('../assets/welcome/homescreen_2x_326ppi.png')
const {width, height} = Dimensions.get('window');

//const TextShadow = (props) => {
//  return <View>
//    <Text style={[props.style, {}]}>{this.props.children}</Text>
//    <Text style={[props.style, {}]}>{this.props.children}</Text>
//  </View>
//};


class Welcome extends React.Component {
  render() {
    console.log('render of Welcome', this.props, this.state);

    const slideSize = {width: width * .94, height: height * .89};

    return (<View style={[this.props.style, {backgroundColor: 'transparent', paddingTop: 6}]}>
      <Carousel animate={false} loop={false} style={[$$('carousel'), slideSize]}
          indicatorOffset={50} indicatorSize={12} indicatorSpace={24} inactiveIndicatorColor={'transparent'} indicatorColor={'#fff'}
          indicatorStyle={{borderWidth: 1, borderColor: '#fff'}}
          inactiveIndicatorStyle={{borderWidth: 1, borderColor: '#fff'}}
      >

        <View style={[$$('carousel-item'), {height: slideSize.height, width: width}]}>
          <Image
              source={require('../assets/welcome/homescreen_2x_326ppi2.png')}
              style={[$$('carousel-bg'), slideSize]} resizeMode="cover">

            <View style={{}}>
              <Text style={$$('welcome-title')}>Join the bankMe family and start savings today</Text>

              <View  style={[$$('carousel-overlay'), {marginTop: 200}]}>
                  <UI.Input placeholder="Phone number" style={$$('black-input')} placeholderTextColor={'#cecac6'} textStyle={{color: 'white'}} hideLine />
                  <UI.Input placeholder="Email" style={$$('black-input')}  placeholderTextColor={'#cecac6'} textStyle={{color: 'white'}} hideLine />
                  <UI.Input placeholder="Password" style={$$('black-input')}  placeholderTextColor={'#cecac6'} textStyle={{color: 'white'}} hideLine />
              </View>
            </View>
          </Image>
        </View>


        <View style={[$$('carousel-item'), {height: slideSize.height, width: width}]}>
          <Image
              source={require('../assets/welcome/homescreen_2x_326ppi.png')}
              style={[$$('carousel-bg'), slideSize]} resizeMode="cover">

            <View style={$$('carousel-overlay')}>
              <Text style={$$('welcome-title')}>Automatically roundup purchases and invest the change</Text>
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

Welcome.defaultProps = {};
Welcome.propTypes = {};

module.exports = Welcome;