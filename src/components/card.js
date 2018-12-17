import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export class Card extends React.Component {

  render() {
    return (
      <div className='card'>
        {this.props.name}
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};