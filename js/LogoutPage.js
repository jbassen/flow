'use strict';

var LogoutPage = React.createClass({
  displayName: 'LogoutPage',

  componentWillMount: function componentWillMount() {
    this.firebaseRef = new Firebase('https://crackling-inferno-1962.firebaseio.com/');
    this.firebaseRef.unauth();
    window.location = '/';
  },

  componentWillUnmount: function componentWillUnmount() {
    this.firebaseRef.off();
  },

  render: function render() {

    var styles = {};

    return null;
  }

});

React.render(React.createElement(LogoutPage), document.getElementById('root'));