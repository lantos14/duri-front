import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tag';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

export class StoresContent extends React.Component {

  render() {
    const { list, tagFn } = this.props;
    return (
      <div id='stores-content' className='content'>
        {
          list.map((el, i) => 
          <Tag key={i} name={el} index={i} tagFn={tagFn} />
        )
        }
      </div>
    )
  }
}

StoresContent.propTypes = {
  list: PropTypes.array.isRequired,
  tagFn: PropTypes.func.isRequired,
};