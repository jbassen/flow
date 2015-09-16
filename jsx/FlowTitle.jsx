var FlowTitle = React.createClass({


  propTypes: {
    title: React.PropTypes.string.isRequired,
  },


  render: function() {

    var styles = {
      flow_title: {
        display: 'block',
        padding: '10px',
        margin: '0px',
        color: '#0078e7',
        fontSize: '3em',
        fontWeight: 'lighter'
      }
    };

    return(
      <h1 className='FlowTitle' style={styles.flow_title}>
        {this.props.title}
      </h1>
    );

  }


});
