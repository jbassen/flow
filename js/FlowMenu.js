'use strict';

var FlowMenu = React.createClass({
  displayName: 'FlowMenu',

  propTypes: {
    brand_name: React.PropTypes.string.isRequired,
    dropdown_root: React.PropTypes.shape({
      name: React.PropTypes.string,
      url: React.PropTypes.string
    }).isRequired,
    dropdown_children: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
      url: React.PropTypes.string
    }))
  },

  getInitialState: function getInitialState() {
    return {
      dropdownVisibility: 'collapse'
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      brand_name: '▸ ▸ FLOW ▸ ▸',
      dropdown_children: [{ name: 'Home', url: '/' }, { name: 'Account', url: '/account.html' }, { name: 'Sign Out', url: '/logout.html' }]
    };
  },

  _toggleDropdown: function _toggleDropdown(e) {
    console.log(this.state.dropdownVisibility);
    if (this.state.dropdownVisibility === 'collapse') {
      this.setState({ dropdownVisibility: 'visible' });
    } else {
      this.setState({ dropdownVisibility: 'collapse' });
    }
  },

  render: function render() {

    var styles = {
      flow_menu_main: {
        position: 'fixed',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: '3',
        backgroundColor: '#000000'
      },
      flow_menu_brand: {
        display: 'inline-block',
        position: 'static',
        padding: '10px',
        textDecoration: 'none',
        color: '#0078e7',
        fontWeight: 'lighter'
      },
      flow_dropdown: {
        display: 'inline-block',
        position: 'absolute',
        right: '0',
        paddingRight: '20px'
      },
      flow_dropdown_link: {
        display: 'block',
        padding: '10px',
        color: '#e0e0e0',
        backgroundColor: '#000000',
        textDecoration: 'none',
        fontWeight: 'lighter'
      },
      flow_dropdown_children_ul: {
        display: 'block',
        visibility: this.state.dropdownVisibility,
        padding: '0px',
        margin: '0px',
        listStyle: 'none'
      },
      flow_dropdown_children_li: {
        display: 'block'
      },
      flow_menu_spacer: {
        padding: '10px'
      }
    };

    var dropdown_children_li = this.props.dropdown_children.map(function (dropdown_child) {
      return React.createElement(
        'li',
        { style: styles.flow_dropdown_children_li },
        React.createElement(
          'a',
          { href: dropdown_child.url, style: styles.flow_dropdown_link },
          dropdown_child.name
        )
      );
    });

    return React.createElement(
      'div',
      { className: 'FlowMenu' },
      React.createElement(
        'div',
        { style: styles.flow_menu_main },
        React.createElement(
          'a',
          { id: 'flow_menu_brand', href: '#', style: styles.flow_menu_brand },
          this.props.brand_name
        ),
        React.createElement(
          'div',
          { style: styles.flow_dropdown },
          React.createElement(
            'a',
            { onClick: this._toggleDropdown, href: this.props.dropdown_root.url, style: styles.flow_dropdown_link },
            this.props.dropdown_root.name
          ),
          React.createElement(
            'ul',
            { id: 'flow_dropdown_children', style: styles.flow_dropdown_children_ul },
            dropdown_children_li
          )
        )
      ),
      React.createElement(
        'div',
        { style: styles.flow_menu_spacer },
        React.createElement(
          'span',
          null,
          ' '
        )
      )
    );
  }

});