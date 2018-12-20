import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

export default class Tag extends React.Component {

  render() {
    const { name, index, tagFn } = this.props;
    return (
      <span className="tag" id={index} onClick={tagFn}>
        {name}
      </span>
    )
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tagFn: PropTypes.func.isRequired,
};
