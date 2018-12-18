import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export class MenuItem extends React.Component {

  render() {
    return (
        <div className='menu-item'>
          <p>{this.props.name}</p>
        </div>
    )
  }
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
  };