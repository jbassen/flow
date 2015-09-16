"use strict";

var FlowLogin = React.createClass({
  displayName: "FlowLogin",

  propTypes: {
    firebase_url: React.PropTypes.string.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      error_message: null
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      firebase_url: 'https://crackling-inferno-1962.firebaseio.com/'
    };
  },

  componentWillMount: function componentWillMount() {
    this.firebaseRef = new Firebase(this.props.firebase_url);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.firebaseRef.off();
  },

  _handleLogin: function _handleLogin(e) {

    e.preventDefault();
    var that = this;

    this.firebaseRef.authWithPassword({
      email: React.findDOMNode(that.refs.email).value.trim(),
      password: React.findDOMNode(that.refs.password).value
    }, function (error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        that.setState({ error_message: error.message });
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    }, { remember: 'sessionOnly' });
  },

  render: function render() {

    var styles = {
      flow_login: {
        margin: '0 auto',
        maxWidth: '300px',
        width: '100%',
        padding: '0px'
      },
      flow_login_form: {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box'
      },
      flow_login_fieldset: {
        display: 'block',
        border: '0px none #e0e0e0'
      },
      flow_login_legend: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '5px',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#e0e0e0',
        textAlign: 'center',
        color: '#e0e0e0',
        fontSize: '1.5em',
        fontWeight: 'lighter'
      },
      flow_login_error_message: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '5px',
        paddingTop: '0px',
        textAlign: 'center',
        color: '#df7514'
      },
      flow_login_email: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px',
        margin: '0px'
      },
      flow_login_password: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px',
        margin: '0px'
      },
      flow_login_button: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '8px',
        margin: '0px',
        marginTop: '4px',
        backgroundColor: '#0078e7',
        color: '#e0e0e0',
        border: '0px none #e0e0e0',
        borderRadius: '2px'
      },
      flow_login_link: {
        padding: '10px',
        color: '#e0e0e0',
        display: 'block',
        textAlign: 'center',
        fontWeight: 'lighter'
      }
    };

    var error_message = React.createElement(
      "div",
      { style: styles.flow_login_error_message },
      this.state.error_message
    );

    return React.createElement(
      "div",
      { className: "FlowLogin", style: styles.flow_login },
      React.createElement(
        "form",
        { onSubmit: this._handleLogin, style: styles.flow_login_form },
        React.createElement(
          "fieldset",
          { style: styles.flow_login_fieldset },
          React.createElement(
            "legend",
            { style: styles.flow_login_legend },
            "Let's get started."
          ),
          error_message,
          React.createElement("input", { ref: "email", type: "email", placeholder: "Email", style: styles.flow_login_email }),
          React.createElement("input", { ref: "password", type: "password", placeholder: "Password", style: styles.flow_login_password }),
          React.createElement(
            "button",
            { type: "submit", style: styles.flow_login_button },
            "Sign In"
          )
        )
      ),
      React.createElement(
        "a",
        { href: "#", style: styles.flow_login_link },
        "Forgot your password?"
      )
    );
  }

});