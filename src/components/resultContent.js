import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

import { Card } from '../components/card';

export class ResultContent extends React.Component {

  shuffleProducts = (productList) => {
    const promodProductList = productList.filter(product => {
      return product.store === 'promod';
    });
    
    const hmProductList = productList.filter(product => {
      return product.store === 'hm';
    });

    const shuffledList = [];
    
    for (let i = 0; i < productList.length; i++) {
      promodProductList[i] && shuffledList.push(promodProductList[i]);
      hmProductList[i] && shuffledList.push(hmProductList[i]);
    }
    
    return shuffledList;
  }

  render() {
    const result = this.shuffleProducts(this.props.result);
    const loading = this.props.loading;

    if (!loading && result.length !== 0) {
      return (
        <div id='result-content' className='content'>
          <div className='columns is-multiline is-mobile'>
            {
              result.map((el, i) =>
                <div className="card-container" key={i} id={el._id} >
                <Card 
                img={el.img} 
                name={el.name} 
                price={el.price}
                store={el.store}
                />
              </div>
              )
            }

          </div>
        </div>
      )
    } else {
      return (
        <div id='result-content' className='content-loading'>
          <img className='loading-animation' src='../img/loading.gif'></img>
        </div>
      );
    }
  }
}

ResultContent.propTypes = {
  result: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};