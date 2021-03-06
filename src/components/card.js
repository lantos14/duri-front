import React from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import { Logo } from './logo';
export class Card extends React.Component {

  render() {
    return (
      <div className="card column is-full">
        <div className="image">
            <img src={this.props.img} alt={this.props.name}></img>
        </div>
        <div className="content">
            <p className="title">{this.props.name}</p>
            <p className="subtitle">{this.props.price}</p>

            <Logo store={this.props.store} />
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
};