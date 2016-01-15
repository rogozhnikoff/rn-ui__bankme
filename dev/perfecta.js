const React = require('react-native');
const {
    Text, View, PropTypes, StyleSheet, TouchableOpacity, Image, Dimensions
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;
const {width, height} = Dimensions.get('window');

const buttonSize = 20;

const style = StyleSheet.create({
  'wrapper': {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    //backgroundColor: 'rgba(0, 0, 0, .5)',
    backgroundColor: 'transparent',
  },
  'overlay': {
    width, height
  },
  'btn': {
    position: 'absolute',
    left: (width / 2) - (buttonSize / 2),
    bottom: 15,
  },
  btnVisible: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderWidth: 2,
    borderColor: 'white',
  },
  btnVisibleEnabled: {
    backgroundColor: 'orange',
  }
});

class Perfecta extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enabled: false
    }
  }

  renderOverlay() {
    const {source, opacity} = this.props;
    return (<View pointerEvents='none' style={{width, height}}>
      <Image source={source} style={[style.overlay, {opacity: opacity || .4}]} resizeMode="contain" />
    </View>)
  }

  render() {
    const {enabled} = this.state;
    const overlay = enabled
        ? this.renderOverlay()
        : null;

    return (<View style={style.wrapper} pointerEvents="box-none">
        {overlay}
      <TouchableOpacity onPress={() => this.setState({enabled: !enabled})} style={style.btn}>
        <View style={[style.btnVisible, (enabled ? style.btnVisibleEnabled : null)]} />
      </TouchableOpacity>
    </View>)
  }
}
//<Text style={{fontSize: 50, color: 'white', textAlign: 'center', marginTop: 50}}>{this.state.enabled + ''}</Text>


Perfecta.defaultProps = {};
Perfecta.propTypes = {};

module.exports = Perfecta;