/*

 пацаны заморочились
 https://github.com/xinthink/react-native-material-kit/blob/master/lib/theme.js

 * */

/*
 судя по дизайну, у ребят есть тяга или прошлое с материалом
 значит Material Design отличный референс по мелким элементам

 http://www.getmdl.io/components/#textfields-section


 ### по крупным, лучше взять айосевские стандартные
 https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Animation.html

 ### библиотека паттернов
 http://capptivate.co/

 * */

/*
 книжки на почитать:
 https://designthencode.com
 https://designcode.io/
 * */


const StyleSheet = require('react-native').StyleSheet;

const _ = require('lodash');
const {reduce, assign} = _;


const color = {
  dev: 'red'
}

const THEME = {
  'h2': {
    marginTop: 14,
    marginBottom: 6
  },
  'h2-text': {
    fontSize: 20
  },

  'input': {
    height: 53,
    //backgroundColor: color.dev,
    marginTop: 2,
    marginBottom: 2,
    justifyContent: 'center',
  },
  'input-field': {
    fontSize: 16,
    height: 53,
    //backgroundColor: 'green',
    paddingRight: 8,
    paddingLeft: 8,
  },
  'input-underline': {
    //position: 'absolute',
    //top: 0,
    //left: 0,
    //width: 50,

    //flex: 1,
    //flexDirection:'row',
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#aaaaaa'
  }
}

const APP = {
  'wrapper': {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#cfcfcf',
  },
  'screen': {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  'header': {
    backgroundColor: color.dev,
    //marginBottom: 10,
  },
  'header-panel': {
    backgroundColor: '#0c99e2',
    height: 20,
  },
  'header-title': {
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',

    //shadowColor: 'red',
    //shadowOpacity: 1,
    //shadowRadius: 4,
    //shadowOffset: {
    //  width: 10,
    //  height: 10,
    //}
  },
  'header-title-text': {
    fontSize: 24,
    textTransform: 'uppercase'
  },
  'header-title-progressbar': {
    height: 5,
    backgroundColor: '#0c99e2',
  },

  'progressbar': {},

  'signup': {},
  'signup-screen': {
    //marginTop: -10,
    paddingLeft: 20,
    paddingRight: 20,
    //backgroundColor: 'green',
  },
}


function hexToRgb(hex, opacity) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const colors = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
  opacity && colors.push(opacity);
  return result ? 'rgb(' + colors.join(', ') + ')' : null
}


//module.exports = StyleSheet.create(STYLES);

/*
зашититься от ошибок несуществующего класа
защититься от ошибок неправильно набранных атрибутов
и можно даже от ошибок значений атрибутов
postcss йопта решает

* */
module.exports = assign({}, THEME, APP);