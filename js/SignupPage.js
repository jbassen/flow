'use strict';

var SignupPage = React.createClass({
  displayName: 'SignupPage',

  componentWillMount: function componentWillMount() {
    this.firebaseRef = new Firebase('https://crackling-inferno-1962.firebaseio.com/');
    this.firebaseRef.onAuth(this._handleAuthentication);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.firebaseRef.off();
  },

  _handleAuthentication: function _handleAuthentication(authData) {
    if (authData) {
      console.log("Authenticated with uid:", authData.uid);
      window.location = '/';
    } else {
      console.log("Client unauthenticated.");
    }
  },

  render: function render() {

    var styles = {
      signup_page: {
        width: '100%'
      }
    };

    return React.createElement(
      'div',
      { className: 'SignupPage', style: styles.signup_page },
      React.createElement(FlowMenu, {
        dropdown_root: { name: 'Sign In', url: '/' },
        dropdown_children: [] }),
      React.createElement(FlowTitle, { title: 'Signup' }),
      React.createElement(FlowSignup, null)
    );
  }

});

React.render(React.createElement(SignupPage), document.getElementById('root'));