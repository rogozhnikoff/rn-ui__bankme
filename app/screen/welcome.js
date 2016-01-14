const React = require('react-native');
const {
    Text, View, PropTypes, StyleSheet, Dimensions, Image
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const STYLES = require('../stylesheet');

const UI = require('../ui');

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


class Welcome extends React.Component {
  render() {
    console.log('render of Welcome', this.props, this.state);

    const {width, height} = Dimensions.get('window')
    //const onLayout = (ev) => {
    //  const {width, height} = ev.nativeEvent.layout
    //}
    const itemStyle = [styles['carousel-item'], {width, height}];
    const bgStyle = [styles['carousel-bg'], {width, height}];
    //console.log(bgStyle)


    return <Carousel
        animate={false}
        loop={false}
        style={styles['carousel']}
    >
      <View style={itemStyle}>
          <Image
              source={require('../assets/welcome/homescreen_2x_326ppi.png')}
              style={bgStyle}
              resizeMode="cover"
          />
      </View>
      <View style={itemStyle}>
        <Image
            source={require('../assets/welcome/homescreen_2x_326ppi3.png')}
            style={bgStyle}
            resizeMode="cover"
        />
      </View>
      <View style={itemStyle}>
        <Image
            source={require('../assets/welcome/homescreen_2x_326ppi2.png')}
            style={bgStyle}
            resizeMode="cover"
        />
      </View>
    </Carousel>
  }
}
//<Text style={{fontSize: 25, color: 'white'}}>Page 1</Text>
//<Image
//    style={bgStyle}
//    resizeMode="cover"
//    source={require('../assets/welcome/homescreen_2x_326ppi.png')}
///>
var styles = StyleSheet.create({
  'carousel-bg': {
    flex: 1,
    //padding: 0,
    //justifyContent: 'flex-start',
    //alignSelf: 'flex-start',
    //width: null,
    //height: null,
    //position: 'absolute',
    //top: 0,
    //left: 0,
    //right: 0,
    //bottom: 0,
    //resizeMode: 'stretch',
    //backgroundColor: 'red',
    //justifyContent: 'center',
    //alignItems: 'center',
    //flexDirection: 'column',
    //flex: 1
  },
  'carousel': {
    flex: 1,
    alignItems: 'stretch'
  },
  'carousel-item': {
    alignSelf: 'stretch',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'pink',
    //position: 'absolute',
    //top: 0, bottom: 0, left: 0, right: 0,
  },
});


Welcome.title = 'Welcome'
Welcome.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Welcome.propTypes = {};

module.exports = Welcome;