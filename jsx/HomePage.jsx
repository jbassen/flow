var HomePage = React.createClass({


  mixins : [ReactFireMixin],


  getInitialState: function() {
    return {
      authData: null
    };
  },


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
    } else {
      console.log("Client unauthenticated.");
    }
    this.setState({
      authData: authData
    });
  },


  _renderAuthenticated: function(styles) {
    //'FlowStack authData={this.state.authData} /'
    return(
      <div className='HomePage' style={styles.home_page}>
        <FlowMenu
          dropdown_root={{
            name: this.state.authData.password.email + ' \u25BE',
            url: '#'
          }} />
        <FlowTitle title='Home' />
        <FlowQueue authData={this.state.authData} />
        <FlowQueue authData={this.state.authData} />
      </div>
    );
  },


  _renderUnauthenticated: function(styles) {
    return(
      <div className='HomePage' style={styles.home_page}>
        <FlowMenu
          dropdown_root={{ name: 'Sign Up', url: '/signup.html' }}
          dropdown_children={[]} />
        <FlowBranding />
        <FlowLogin />
      </div>
    );
  },


  render: function() {

    var styles = {
      home_page: {
        width: '100%'
      }
    };

    if(this.state.authData) {
      return( this._renderAuthenticated(styles, this.state.authData) );
    } else {
      return( this._renderUnauthenticated(styles) );
    }

  }


});


React.render(
  React.createElement(HomePage),
  document.getElementById('root')
);
