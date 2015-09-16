'use strict';

var FlowActivityStack = React.createClass({
  displayName: 'FlowActivityStack',

  propTypes: {
    authData: React.PropTypes.object.isRequired,
    firebase_url: React.PropTypes.string.isRequired
  },

  mixins: [ReactFireMixin],

  getInitialState: function getInitialState() {
    return {
      activity_queue: [],
      activity_stack: []
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

  render: function render() {

    var styles = {};

    return React.createElement('div', null);
  }

});