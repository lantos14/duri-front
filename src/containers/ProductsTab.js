import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testAction } from '../actions/actions';
import '../styles/styles.scss';

import { Header } from '../components/header';
import { ProductsContent } from '../components/productsContent';
import { Next } from '../components/next';

export class ProductsTab extends React.Component {
  state = {
    productsList: [
      "ingek-blúzok",
      "pulóverek-kardigánok",
      "ruhák",
    ]
  }
  
  reduceTest = () => {
    this.props.action('success');
  }

  render() {
    return (
      <div id="products-tab" className='tab'>
        <Header activeTab='Product' />
        <ProductsContent list={this.state.productsList} />
        <Next nextTab='store'/>
      </div>
    )
  }
}

ProductsTab.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    text: state.testReducer.text,
  };
}

const mapDispatchToProps = {
  action: testAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTab);
