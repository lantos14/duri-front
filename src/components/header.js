import React from 'react';
import '../styles/styles.scss';

import { MenuItem } from './menuItem';

export class Header extends React.Component {

  render() {
    return (
      <div id='header'>
        <div id='menu'>
          <MenuItem name='Product'></MenuItem>
          <MenuItem name='Shop'></MenuItem>
          <MenuItem name='Result'></MenuItem>
        </div>
      </div>
    )
  }
}