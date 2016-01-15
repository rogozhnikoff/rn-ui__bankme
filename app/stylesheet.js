const StyleSheet = require('react-native').StyleSheet;
const _ = require('lodash');
const classNames = require('classnames');
const {reduce, assign} = _;

var __ENV = 'development';


const color = {
  dev: hexToRgb('#000', .7)
};

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
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    //width: 50,

    //flex: 1,
    //flexDirection:'row',
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#aaaaaa',
  },
  'input-underline-focus': {
    backgroundColor: '#0c99e2',
  },
  'input-underline-noempty': {
    backgroundColor: 'black',
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
    height: 105,
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
  },
  'header-title-progressbar': {
    height: 5,
    backgroundColor: 'lightgray',
  },

  'progressbar': {
    height: 5,
    backgroundColor: '#0c99e2',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },

  'signup': {},
  'signup-scroll': {
    flex: 1,
    height: 667 - 105,
    backgroundColor: 'white'
  },
  'signup-screen': {
    flex: 1,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  'quote': {},
  'quote-yellow': {},


  'choosebank': {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    //alignContent: 'stretch'
  },
  'choosebank-option': {
    //flex: 1,
    //alignSelf: 'auto'
  },
  'choosebank-logo': {
    //flex: 1,

  },
  'choosebank-label': {},
}


const ALLSTYLES = __ENV === 'development'
    ? assign({}, THEME, APP)
    : StyleSheet.create(assign({}, THEME, APP));


const METHODS = {
  get(classNames) {
    return reduce(
        classNames.split(/\s+/g),
        (collect, className) => assign(collect, ALLSTYLES[className]),
        {}
    )
  },
  multi() {
    return this.get(classNames.apply(null, arguments))
  }
}

/*
 todo:
 зашититься от ошибок несуществующего класа
 защититься от ошибок неправильно набранных атрибутов - реакт защищает
 и можно даже от ошибок значений атрибутов - реакт защищает

 добавить возможности для кода, возможно в цсс-стиле
 postcss йопта решает
 * */

module.exports = METHODS;


// @credits: честно украл откуда-то
function hexToRgb(hex, opacity) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$$/i.exec(hex);
  const colors = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
  opacity && colors.push(opacity);
  return result ? 'rgb(' + colors.join(', ') + ')' : null
}
