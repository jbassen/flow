'use strict';

var FlowQueue = React.createClass({
  displayName: 'FlowQueue',

  propTypes: {
    authData: React.PropTypes.object.isRequired,
    firebase_url: React.PropTypes.string.isRequired
  },

  mixins: [ReactFireMixin],

  getInitialState: function getInitialState() {
    return {
      queue: [{ name: 'Name A', tried: '1', tries: '1', status: 'Done', result: '-', backGroundColor: 'transparent', url: '/' }, { name: 'Name B', tried: '0', tries: '2', status: 'Skipped', result: '-', backGroundColor: 'transparent', url: '/' }, { name: 'Name C', tried: '0', tries: '3', status: 'Reviewed', result: '-', backGroundColor: 'transparent', url: '/' }, { name: 'Name C', tried: '0', tries: '4', status: 'Revisit', result: '-', backGroundColor: 'transparent', url: '/' }, { name: 'Name D', tried: '0', tries: '5', status: 'New', result: '-', backGroundColor: 'transparent', url: '/' }],
      activity_stack: [{ name: 'Name A', tried: '1', tries: '1', status: '', result: '-', backGroundColor: 'transparent', url: '/' }]
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

  _highlightRow: function _highlightRow(e) {
    console.log(e);
    //backgroundColor: '#0078e7';
    return null;
  },

  _unhighlightRow: function _unhighlightRow(e) {
    //backgroundColor: 'transparent';
  },

  _handleClick: function _handleClick(e) {
    window.location = '/logout.html';
    return null;
  },

  render: function render() {

    var styles = {
      flow_queue: {
        maxWidth: '1200px',
        width: '100%',
        boxSizing: 'border-box',
        padding: '20px',
        margin: '0px'
      },
      flow_queue_title: {
        display: 'block',
        padding: '10px',
        margin: '0px',
        fontWeight: 'normal',
        color: '#e0e0e0'
      },
      flow_queue_table: {
        display: 'table',
        width: '100%',
        boxSizing: 'border-box',
        border: '1px',
        borderStyle: 'solid',
        borderColor: '#e0e0e0',
        emptyCells: 'show',
        textAlign: 'left'
      },
      flow_queue_thead: {
        backgroundColor: '#e0e0e0',
        color: '#222222'
      },
      flow_queue_tbody: {
        backgroundColor: '#222222',
        color: '#e0e0e0'
      },
      flow_queue_th: {
        padding: '10px'
      },
      flow_queue_td: {
        padding: '10px'
      }
    };

    var that = this;

    var queue_rows = this.state.queue.map(function (activity) {
      console.log(activity.id);
      return React.createElement(
        'tr',
        { onClick: that._handleClick, onMouseOver: that._highlightRow(), onMouseOut: that._unhighlightRow() },
        React.createElement(
          'td',
          { style: styles.flow_queue_td },
          activity.status
        ),
        React.createElement(
          'td',
          { style: styles.flow_queue_td },
          activity.name
        ),
        React.createElement(
          'td',
          { style: styles.flow_queue_td },
          activity.tried,
          ' of ',
          activity.tries
        ),
        React.createElement(
          'td',
          { style: styles.flow_queue_td },
          activity.result
        )
      );
    });

    return React.createElement(
      'div',
      { className: 'FlowActivityQueue', style: styles.flow_queue },
      React.createElement(
        'h1',
        { style: styles.flow_queue_title },
        'Up Next'
      ),
      React.createElement(
        'table',
        { style: styles.flow_queue_table },
        React.createElement(
          'thead',
          { style: styles.flow_queue_thead },
          React.createElement(
            'tr',
            null,
            React.createElement('th', { style: styles.flow_queue_th }),
            React.createElement(
              'th',
              { style: styles.flow_queue_th },
              'Activity'
            ),
            React.createElement(
              'th',
              { style: styles.flow_queue_th },
              'Attempts'
            ),
            React.createElement(
              'th',
              { style: styles.flow_queue_th },
              'Result'
            )
          )
        ),
        React.createElement(
          'tbody',
          { style: styles.flow_queue_tbody },
          queue_rows
        )
      )
    );
  }

});