import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

import { Card } from '../components/card';

export class ResultContent extends React.Component {

  render() {
    const { result } = this.props;
    if (result.length !== 0) {
      return (
        <div id='result-content' className='content'>
          <div className='columns is-multiline is-mobile'>
            {
              result.map((el, i) =>
                <Card key={i} img={el.img} name={el.name} price={el.price}
                />
              )
            }

          </div>
        </div>
      )
    } else {
      return (
        <div id='result-content' className='content'>
          <div className='columns is-multiline is-mobile' />
        </div>
      );
    }
  }
}

ResultContent.propTypes = {
  result: PropTypes.array.isRequired,
};