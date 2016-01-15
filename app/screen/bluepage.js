const React = require('react-native');
const {
    Text, View, PropTypes, Image, Dimensions
    } = React;

const {width, height} = Dimensions.get('window')
const _ = require('lodash');
const {reduce, assign, map} = _;

const $$ = require('../stylesheet').get;
const UI = require('../ui');


class Bluepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filled: ['questions', 'account']
    }
  }

  render() {
    console.log('render of Bluepage', this.props, this.state);

    const items = {
      'personal': [require('../assets/whiteIcons/grey/grey_personal.png'), require('../assets/whiteIcons/white/white_personal.png')],
      'questions': [require('../assets/whiteIcons/grey/grey_questions.png'), require('../assets/whiteIcons/white/white_questions.png')],
      'account': [require('../assets/whiteIcons/grey/grey_linkbank.png'), require('../assets/whiteIcons/white/white_linkbank.png')],
    };

    const itemsNodes = map(items, (imgs, name) => {
      const isFilled = this.state.filled.indexOf(name) === -1;
      return <View style={$$('bluepage-item')} key={name}>
        <Image style={$$('bluepage-image')} source={items[name][isFilled ? 0 : 1]} />
        <Text style={[$$('bluepage-text'), {
          color: isFilled ? 'lightgray' : 'white'
        }]}>{name.toUpperCase()}</Text>
      </View>
    });


    return (<View style={[this.props.style, $$('bluepage'), {width, height}]}>
      <UI.H2 style={{color: 'white', marginBottom: 20}}>Sign and save</UI.H2>
      <Text style={{color: 'white'}}>Make it official by giving us  your signature</Text>

      <View style={$$('bluepage-list')}>
        {itemsNodes}
      </View>
      <UI.H2 style={{color: 'white', marginTop: 0}}>Make it Official</UI.H2>
    </View>)
  }
}

Bluepage.defaultProps = {};
Bluepage.propTypes = {};

module.exports = Bluepage;