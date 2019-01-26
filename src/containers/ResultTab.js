import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/styles.scss';

import { getResult, delProductTag, delStoreTag, delResult } from '../actions/actions';
import { Header } from '../components/header';
import { ResultContent } from '../components/resultContent';
import { Next } from '../components/next';

export class ResultTab extends React.Component {

  componentDidMount() {
    this.props.getResult(this.props.productsSelected, this.props.storesSelected);
  }

  clearSelection = () => {
    this.props.delStoreTag('all');
    this.props.delProductTag('all');
    this.props.delResult();
  }

  render() {
    return (
      <div id="result-tab" className='tab'>
        <Header activeTab='Result' />
        <ResultContent result={this.props.result || []} loading={this.props.loading}/>
        <Next nextTab='/' clearSelection={this.clearSelection} />
      </div>
    )
  }
}

ResultTab.propTypes = {
  getResult: PropTypes.func.isRequired,
  delProductTag: PropTypes.func.isRequired,
  delStoreTag: PropTypes.func.isRequired,
  delResult: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired,
  productsSelected: PropTypes.array.isRequired,
  storesSelected: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    result: state.masterList.result,
    productsSelected: state.masterList.productsSelected,
    storesSelected: state.masterList.storesSelected,
    loading: state.masterList.loading,
  };
}

const mapDispatchToProps = {
  getResult,
  delProductTag,
  delStoreTag,
  delResult,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTab);
