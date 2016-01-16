const StyleSheet = require('react-native').StyleSheet;
const _ = require('lodash');
const classNames = require('classnames');
const {reduce, assign} = _;

var __ENV = 'development';


/**
 Fonts on home screen - fontFamily: 'Circe-Thin'
 Fonts on signup - fontFamily: 'Lato-Light'
 */



const color = {
  dev: hexToRgb('#000', .7)
};

const THEME = {
  'font-lato': {
    fontFamily: 'Lato-Light'
  },
  'font-circle': {
    fontFamily: 'Circe-Thin'
  },


  'h1': {
    marginTop: 14,
    marginBottom: 6,
    fontSize: 20,
  },

  'h2': {
    marginTop: 11,
    marginBottom: 4,
    fontSize: 18,
  },
  'h3': {
    marginTop: 8,
    marginBottom: 3,
    fontSize: 16,
  },


  'button': {
    flex: 1,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 1,
  },
  'button-label': {
    textAlign: 'center',
    fontSize: 23,
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
    fontSize: 20,
    fontFamily: 'Lato-Light'
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


  'quote': {
    marginTop: 3,
    marginBottom: 4,
    padding: 7,
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
  },
  'quote-yellow': {
    backgroundColor: '#ffff99',
  },


  'paragraph': {
    marginTop: 2,
    marginBottom: 3,
  },


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
  'choosebank-label': {
    fontFamily: 'Lato-Light',
    fontSize: 40,
    textAlign: 'center'
  },


  'input-wrap': {
    marginBottom: 5,
  },
  'input-wrap-label': {
    fontSize: 22
  },
  'input-wrap-field': {},


  'black-input': {
    backgroundColor: 'rgba(0, 0, 0, .4)'
  },


  'carousel': {
    flex: 1,
    //marginTop: 6,
    alignItems: 'stretch',
  },
  'carousel-item': {
    alignItems: 'center',
    alignSelf: 'stretch',
    //backgroundColor: 'pink',
  },
  'carousel-bg': {
    flex: 1,
    alignSelf: 'center',
  },

  'welcome-title': {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 150
  },

  'haveanaccount': {
    marginTop: 25
  },
  'haveanaccount-text': {
    textAlign: 'center'
  },
  'haveanaccount-btn': {
    fontWeight: 'bold'
  },


  'bluepage': {
    backgroundColor: '#0c99e2',
    alignItems: 'center',
    paddingTop: 50
  },
  'bluepage-list': {
    //alignItems: 'center'
    marginTop: 30,
    marginBottom: 15,
    //flex: 1,
  },
  'bluepage-item': {
    width: 100,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
  },
  'bluepage-text': {
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center'
  },
  'bluepage-image': {
    //alignSelf: 'center',
    //flex: 1,
    width: 65,
    height: 65,
    marginBottom: 5
  }
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
