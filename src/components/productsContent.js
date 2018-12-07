import React from 'react';
import '../styles/styles.scss';
import { Card } from './card';


export class ProductsContent extends React.Component {

  render() {
    return (
      <div id='products-content'>
        <Card name='pulóver' />
      </div>
    )
  }
}