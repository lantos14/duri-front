import React from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export class Logo extends React.Component {

  render() {
    return (
      <div className={`logo ${this.props.store}`}></div>
    )
  }
}

Logo.propTypes = {
  store: PropTypes.string.isRequired,
};
