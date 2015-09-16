var LogoutPage = React.createClass({


  componentWillMount : function() {
    this.firebaseRef = new Firebase('https://crackling-inferno-1962.firebaseio.com/');
    this.firebaseRef.unauth();
    window.location = '/';
  },


  componentWillUnmount : function() {
    this.firebaseRef.off();
  },


  render: function() {

    var styles = {};

    return null;

  }


});

React.render(
  React.createElement(LogoutPage),
  document.getElementById('root')
);
