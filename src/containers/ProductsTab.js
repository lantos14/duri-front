import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { regTag, delTag } from '../actions/actions';
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
    ],
  }
  
  sendTagAction = (e) => {
    const productName = e.target.innerText;
    const modActiveTags = this.props.productsSelected;

    if (modActiveTags.indexOf(productName) > -1) {
      // if tag is already selected
      this.props.delTag(productName);
      modActiveTags.splice(modActiveTags.indexOf(productName, 1));
    } else {
      // if tag is not selected yet
      this.props.regTag(productName);
      modActiveTags.push(productName);
      }
    
    e.target.classList.toggle('tag-active');
  }

  render() {
    return (
      <div id="products-tab" className='tab'>
        <Header activeTab='Product' />
        <ProductsContent list={this.state.productsList} tagFn={this.sendTagAction} />
        <Next nextTab='store'/>
      </div>
    )
  }
}

ProductsTab.propTypes = {
  regTag: PropTypes.func.isRequired,
  delTag: PropTypes.func.isRequired,
  productsSelected: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    productsSelected: state.masterList.productsSelected,
  };
}

const mapDispatchToProps = {
  regTag,
  delTag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTab);
