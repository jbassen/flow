var SignupPage = React.createClass({


  componentWillMount: function() {
    this.firebaseRef = new Firebase('https://crackling-inferno-1962.firebaseio.com/');
    this.firebaseRef.onAuth(this._handleAuthentication);
  },


  componentWillUnmount: function() {
    this.firebaseRef.off();
  },


  _handleAuthentication: function(authData) {
    if (authData) {
      console.log("Authenticated with uid:", authData.uid);
      window.location = '/';
    } else {
      console.log("Client unauthenticated.");
    }
  },


  render: function() {

    var styles = {
      signup_page: {
        width: '100%'
      }
    };

    return(
      <div className='SignupPage' style={styles.signup_page}>
        <FlowMenu
          dropdown_root={{ name: 'Sign In', url: '/' }}
          dropdown_children={[]} />
        <FlowTitle title='Signup' />
        <FlowSignup />
      </div>
    );

  }


});


React.render(
  React.createElement(SignupPage),
  document.getElementById('root')
);
