const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const Wrapper = require('./wrapper');

const options = {

}

function Root () {
  const _state = {

  };
  const _router = {
    page: 'signup'
  }

  return  <Wrapper state={_state} options={options} routerMethods={{}} router={_router} />;
}

module.exports = Root;