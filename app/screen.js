const React = require('react-native');
const {
    Text, View, PropTypes, Dimensions, Animated
    } = React;
const {width, height} = Dimensions.get('window');
const $$ = require('./stylesheet').get;
const hex2rgb = require('./stylesheet').hex2rgb;

const _ = require('lodash');
const {reduce, assign} = _;

const routes = require('./routes');


function Screen(props) {
  console.log('=====>>>> [SCREEN]', Object.keys(props));

  const {screenAnimateValue, isCurrent, path, screenState} = props;
  const ScreenContent = path ? routes(path) : null;

  const children = ScreenContent ? <ScreenContent {...screenState}
      style={{backgroundColor: hex2rgb('#00B4FF', .5), width, height}} /> : null;

  const animatedStyle = [
    commonScreenStyles,
    getAnimatedStyles({isCurrent, screenAnimateValue}),
    //{backgroundColor: children ? hex2rgb('#FF9100', .5) : 'transparent'}
  ];

  return (<Animated.View style={animatedStyle}>{children}</Animated.View>)
}

Screen.defaultProps = {};
Screen.propTypes = {};




const commonScreenStyles = {
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width, height
};

/* empty
* {
  transform: [{perspective: 1000}, {rotateY: '0deg'}, {scale: 1}, {translateX: 0}]
 }
* */
function getAnimatedStyles({isCurrent, screenAnimateValue}) {
  if (isCurrent) {
    return {
      opacity: screenAnimateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      }),
      transform: [{
        perspective: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1000, 650]
        })
      }, {
        rotateY: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '20deg']
        })
      }, {
        scale: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, .8]
        })
      }, {
        translateX: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, (width * -1)]
        })
      }]
    };
  } else {
    return {
      opacity: screenAnimateValue.interpolate({
        inputRange: [0, .7],
        outputRange: [0, 1]
      }),
      transform: [{
        perspective: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [650, 1000]
        })
      }, {
        rotateY: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['20deg', '0deg']
        })
      }, {
        scale: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [.8, 1]
        })
      }, {
        translateX: screenAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [width, -1] // dirty hack?
        })
      }]
    }
  }
}




module.exports = Screen;