/*
* Если пытаться засейвить JS объект в сторедж,
* то при попытке его вытащить, AsyncStorage выдает ошибку что "NSDictionary не может сконвертиться в NSString"
* научи его возвращать json
*
* todo: запости bug issue
* */


const React = require('react-native');
const _ = require('lodash');

const {
    AsyncStorage
    } = React;

const {reduce, assign} = _;

/*
 removeItem
 mergeItem

 getAllKeys

 flushGetRequests

 multiGet
 multiSet
 multiRemove
 multiMerge

* */
const PromiseStorage = assign({}, AsyncStorage, {
  getItem () {
    return AsyncStorage.getItem.apply(null, arguments).then((res) => JSON.parse(res));
  },
  setItem (key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value))
  }
});

module.exports = PromiseStorage;