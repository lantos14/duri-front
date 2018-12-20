import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { regTag } from '../actions/actions';
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
  
  registerTag = (e) => {
    console.log(e.target.innerText); // eslint-disable-line
    this.props.action(e.target.innerText);
  }

  render() {
    return (
      <div id="products-tab" className='tab'>
        <Header activeTab='Product' />
        <ProductsContent list={this.state.productsList} tagFn={this.registerTag} />
        <Next nextTab='store'/>
      </div>
    )
  }
}

ProductsTab.propTypes = {
  action: PropTypes.func.isRequired,
  productsSelected: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    productsSelected: state.masterList.productsSelected,
  };
}

const mapDispatchToProps = {
  action: regTag,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTab);
