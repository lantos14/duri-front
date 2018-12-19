import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

import { MenuItem } from './menuItem';

export class Header extends React.Component {

  render() {
    return (
      <div id='header'>
        <div id='menu'>
          <MenuItem name='Product' activeTab={this.props.activeTab}></MenuItem>
          <MenuItem name='Store' activeTab={this.props.activeTab}></MenuItem>
          <MenuItem name='Result' activeTab={this.props.activeTab}></MenuItem>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
