import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tag';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

export class ProductsContent extends React.Component {

  render() {
    const { list } = this.props;
    return (
      <div id='products-content' className="content">
        {
          list.map((el, i) => 
          <Tag key={i} name={el} index={i} />
        )
        }
      </div>
    )
  }
}

ProductsContent.propTypes = {
  list: PropTypes.array.isRequired,
};
