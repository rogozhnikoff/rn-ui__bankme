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
        >
          <Text>slide 1</Text>
        </Image>
      </View>
      <View style={itemStyle}>
        <Image
            source={require('../assets/welcome/homescreen_2x_326ppi3.png')}
            style={bgStyle}
            resizeMode="cover"
        >
          <Text>slide 2</Text>
        </Image>
      </View>
      <View style={itemStyle}>
        <Image
            source={require('../assets/welcome/homescreen_2x_326ppi2.png')}
            style={bgStyle}
            resizeMode="cover"
        >
          <Text>slide 2</Text>
        </Image>
      </View>
    </Carousel>
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