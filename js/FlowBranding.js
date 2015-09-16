'use strict';

var FlowBranding = React.createClass({
  displayName: 'FlowBranding',

  render: function render() {
    var styles = {
      flow_branding: {
        margin: '0 auto',
        padding: '80px'
      },
      flow_branding_title: {
        color: '#0078e7',
        fontSize: '3em',
        fontWeight: 'lighter',
        textAlign: 'center',
        margin: '0'
      },
      flow_branding_subtitle: {
        color: '#0078e7',
        fontSize: '1.5em',
        fontWeight: 'lighter',
        textAlign: 'center',
        margin: '0'
      }
    };

    return React.createElement(
      'div',
      { className: 'FlowBranding', style: styles.flow_branding },
      React.createElement(
        'h1',
        { style: styles.flow_branding_title },
        'FLOW'
      ),
      React.createElement(
        'h1',
        { style: styles.flow_branding_subtitle },
        'experimentally optimized education'
      )
    );
  }

});