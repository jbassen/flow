var FlowQueue = React.createClass({


  propTypes: {
    authData: React.PropTypes.object.isRequired,
    firebase_url: React.PropTypes.string.isRequired
  },


  mixins : [ReactFireMixin],


  getInitialState: function() {
    return {
      queue: [
        {name: 'Name A', tried: '1', tries: '1', status: 'Done', result: '-', backGroundColor: 'transparent', url: '/'},
        {name: 'Name B', tried: '0', tries: '2', status: 'Skipped', result: '-', backGroundColor: 'transparent', url: '/'},
        {name: 'Name C', tried: '0', tries: '3', status: 'Reviewed', result: '-', backGroundColor: 'transparent', url: '/'},
        {name: 'Name C', tried: '0', tries: '4', status: 'Revisit', result: '-', backGroundColor: 'transparent', url: '/'},
        {name: 'Name D', tried: '0', tries: '5', status: 'New', result: '-', backGroundColor: 'transparent', url: '/'}
      ],
      activity_stack: [
        {name: 'Name A', tried: '1', tries: '1', status: '', result: '-', backGroundColor: 'transparent', url: '/'}
      ]
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


  _highlightRow: function(e) {
    console.log(e);
    //backgroundColor: '#0078e7';
    return null;
  },


  _unhighlightRow: function(e) {
    //backgroundColor: 'transparent';
  },


  _handleClick: function(e) {
    window.location = '/logout.html';
    return null;
  },


  render: function() {

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

    var queue_rows = this.state.queue.map(function(activity) {
      console.log(activity.id);
      return(
        <tr onClick={that._handleClick} onMouseOver={that._highlightRow()} onMouseOut={that._unhighlightRow()}>
          <td style={styles.flow_queue_td}>{activity.status}</td>
          <td style={styles.flow_queue_td}>{activity.name}</td>
          <td style={styles.flow_queue_td}>{activity.tried} of {activity.tries}</td>
          <td style={styles.flow_queue_td}>{activity.result}</td>
        </tr>
      );
    });

    return(
      <div className='FlowActivityQueue' style={styles.flow_queue}>

        <h1 style={styles.flow_queue_title}>
          Up Next
        </h1>

        <table style={styles.flow_queue_table}>
          <thead style={styles.flow_queue_thead}>
            <tr>
              <th style={styles.flow_queue_th}></th>
              <th style={styles.flow_queue_th}>Activity</th>
              <th style={styles.flow_queue_th}>Attempts</th>
              <th style={styles.flow_queue_th}>Result</th>
            </tr>
          </thead>
          <tbody style={styles.flow_queue_tbody}>
            {queue_rows}
          </tbody>
        </table>

      </div>
    );

  }


});
