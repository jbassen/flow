var FlowActivityStack = React.createClass({


  propTypes: {
    authData: React.PropTypes.object.isRequired,
    firebase_url: React.PropTypes.string.isRequired
  },


  mixins : [ReactFireMixin],


  getInitialState: function() {
    return {
      activity_queue: [],
      activity_stack: []
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


  render: function() {

    var styles = {};

    return(
      <div></div>
    );

  }


});
