const React = require('react-native');


/* ROUTES */
const routes = (function (list) {
  return function (name) {
    return list[name]
  }
})({
  '_screenlist': require('./screen/_screenlist'),
  'welcome': require('./screen/welcome'),
  // strange name for strange screen
  'bluepage': require('./screen/bluepage'),
  'signup/whosyourbank': require('./screen/signup_whosyourbank'),
  'signup/whoareyou': require('./screen/signup_whoareyou'),
  'signup/financial': require('./screen/signup_financial'),
  'signup/linkbank': require('./screen/signup_linkbank'),
  'signup/honeymoney': require('./screen/signup_honeymoney'),
  'signup/agreement': require('./screen/signup_agreement'),
});

function getScreen(name) {
  // dirty check, but oookay )
  if (name.split('/')[0] === 'signup') {
    const SignupWrapper = require('./screen/signup');
    const SignupPage = routes(name);
    return function (props) {
      return (<SignupWrapper title={SignupPage.title} {...props}>
        {(insideProps) => <SignupPage style={insideProps.style} toRoute={props.toRoute} />}
      </SignupWrapper>)
    }
  } else {
    return routes(name)
  }
}

module.exports = getScreen;