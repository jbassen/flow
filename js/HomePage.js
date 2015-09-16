"use strict";

var HomePage = React.createClass({
  displayName: "HomePage",

  mixins: [ReactFireMixin],

  getInitialState: function getInitialState() {
    return {
      authData: null
    };
  },

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
    } else {
      console.log("Client unauthenticated.");
    }
    this.setState({
      authData: authData
    });
  },

  _renderAuthenticated: function _renderAuthenticated(styles) {
    //'FlowStack authData={this.state.authData} /'
    return React.createElement(
      "div",
      { className: "HomePage", style: styles.home_page },
      React.createElement(FlowMenu, {
        dropdown_root: {
          name: this.state.authData.password.email + " ▾",
          url: '#'
        } }),
      React.createElement(FlowTitle, { title: "Home" }),
      React.createElement(FlowQueue, { authData: this.state.authData }),
      React.createElement(FlowQueue, { authData: this.state.authData })
    );
  },

  _renderUnauthenticated: function _renderUnauthenticated(styles) {
    return React.createElement(
      "div",
      { className: "HomePage", style: styles.home_page },
      React.createElement(FlowMenu, {
        dropdown_root: { name: 'Sign Up', url: '/signup.html' },
        dropdown_children: [] }),
      React.createElement(FlowBranding, null),
      React.createElement(FlowLogin, null)
    );
  },

  render: function render() {

    var styles = {
      home_page: {
        width: '100%'
      }
    };

    if (this.state.authData) {
      return this._renderAuthenticated(styles, this.state.authData);
    } else {
      return this._renderUnauthenticated(styles);
    }
  }

});

React.render(React.createElement(HomePage), document.getElementById('root'));