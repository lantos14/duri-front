import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

import { Card } from '../components/card';

export class ProductsContent extends React.Component {

  render() {
    return (
      <div id='products-content'>
        <Card></Card>
      </div>
    )
  }
}