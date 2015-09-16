var FlowSignup = React.createClass({


  propTypes: {
    firebase_url: React.PropTypes.string.isRequired
  },


  getInitialState: function() {
    return {
      error_message: null
    };
  },


  getDefaultProps: function() {
    return {
      firebase_url: 'https://crackling-inferno-1962.firebaseio.com/'
    };
  },


  componentWillMount : function() {
    this.firebaseRef = new Firebase(this.props.firebase_url);
  },


  componentWillUnmount : function() {
    this.firebaseRef.off();
  },


  _handleSignup: function(e) {

    e.preventDefault();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value;
    var that = this;

    this.firebaseRef.createUser({
      email    : email,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
        console.log(error);
        that.setState({error_message: error.message});
      } else {
        console.log("Successfully created user account with uid:", userData.uid);

        that.firebaseRef.authWithPassword({
          email    : email,
          password : password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            that.setState({error_message: error.message});
          } else {
            console.log("Authenticated successfully with payload:", authData);

            that.firebaseRef.child('users').child(authData.uid).child('stack').set(false);
            that.firebaseRef.child('users').child(authData.uid).child('interactions').set(false);
            that.firebaseRef.child('users').child(authData.uid).child('models').set(false);
            that.firebaseRef.child('users').child(authData.uid).child('submissions').set(false);
            that.firebaseRef.child('users').child(authData.uid).child('evaluations').set(false);

            window.location = '/';
          }
        }, {remember: 'sessionOnly'});
      }
    });
  },


  render: function() {

    var styles = {
      flow_signup: {
        margin: '0 auto',
        maxWidth: '300px',
        width: '100%',
        padding: '0px',
        marginTop: '50px'
      },
      flow_signup_form: {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box'
      },
      flow_signup_fieldset: {
        display: 'block',
        border: '0px none #e0e0e0'
      },
      flow_signup_legend: {
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
      flow_signup_error_message: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '5px',
        paddingTop: '0px',
        textAlign: 'center',
        color: '#df7514'
      },
      flow_signup_email: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px',
        margin: '0px'
      },
      flow_signup_password: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px',
        margin: '0px'
      },
      flow_signup_button: {
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
      }
    };

    var error_message =
      <div style={styles.flow_signup_error_message}>
        {this.state.error_message}
      </div>;

    return(
      <div className='FlowSignup' style={styles.flow_signup}>

        <form onSubmit={this._handleSignup} style={styles.flow_signup_form}>
          <fieldset style={styles.flow_signup_fieldset}>
            <legend style={styles.flow_signup_legend}>
              Create an account.
            </legend>
            {error_message}
            <input ref='email' type='email' placeholder='Email' style={styles.flow_signup_email} />
            <input ref='password' type='password' placeholder='Password' style={styles.flow_signup_password} />
            <button type='submit' style={styles.flow_signup_button}>
              Sign Up
            </button>
          </fieldset>
        </form>

      </div>
    );
  }


});
