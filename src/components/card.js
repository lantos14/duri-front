import React from 'react';
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