const React = require('react-native');
const {
    Text, View, PropTypes, ScrollView
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const UI = require('../ui')
const $$ = require('../stylesheet').get;

const itemStyle = {
  paddingBottom: 5,
  paddingTop: 5,
}


class _PageList extends React.Component {
  render() {
    const {gotoScreen} = this.props;
    return (<View style={[this.props.style, {backgroundColor: 'lightgray'}]}>
      <ScrollView style={{flex: 1, height: 667}}>
        <UI.H2 style={[$$('font-lato'), {fontSize: 30, alignSelf: 'center', margin: 20, marginTop: 55}]}>Hey bro, i'm bankMe</UI.H2>

        <UI.Button onPress={() => gotoScreen('bluepage')} style={itemStyle}>- bluepage -</UI.Button>
        <UI.Button onPress={() => gotoScreen('welcome')} style={itemStyle}>- welcome -</UI.Button>
        <UI.Button onPress={() => gotoScreen('signup/agreement')} style={itemStyle}>- signup/agreement -</UI.Button>
        <UI.Button onPress={() => gotoScreen('signup/financial')} style={itemStyle}>- signup/financial -</UI.Button>
        <UI.Button onPress={() => gotoScreen('signup/honeymoney')} style={itemStyle}>- signup/honeymoney -</UI.Button>
        <UI.Button onPress={() => gotoScreen('signup/linkbank')} style={itemStyle}>- signup/linkbank -</UI.Button>
        <UI.Button onPress={() => gotoScreen('signup/whoareyou')} style={itemStyle}>- signup/whoareyou -</UI.Button>
        <UI.Button onPress={() => gotoScreen('signup/whosyourbank')} style={itemStyle}>- signup/whosyourbank -</UI.Button>

        <UI.H2 style={{
          fontSize: 12,
          alignSelf: 'center',
          margin: 15,
          marginTop: 35
        }}>{'qa-reports to:     '}
          <Text style={{fontWeight: 'bold'}}>murad.rogozhnikov@gmail.com</Text>
        </UI.H2>

      </ScrollView>
    </View>)
  }
}

_PageList.defaultProps = {};
_PageList.propTypes = {};

module.exports = _PageList;