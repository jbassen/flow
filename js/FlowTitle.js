'use strict';

var FlowTitle = React.createClass({
  displayName: 'FlowTitle',

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function render() {

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

    return React.createElement(
      'h1',
      { className: 'FlowTitle', style: styles.flow_title },
      this.props.title
    );
  }

});