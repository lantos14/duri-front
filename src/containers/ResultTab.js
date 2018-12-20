import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/styles.scss';

import { getResult } from '../actions/actions';
import { Header } from '../components/header';
import { ResultContent } from '../components/resultContent';
import { Next } from '../components/next';

export class ResultTab extends React.Component {

  componentDidMount() {
    this.props.getResult(this.props.productsSelected, this.props.storesSelected);
  }

  render() {
    return (
      <div id="result-tab" className='tab'>
        <Header activeTab='Result' />
        <ResultContent result={this.props.result || []}/>
        <Next nextTab='/' />
      </div>
    )
  }
}

ResultTab.propTypes = {
  getResult: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired,
  productsSelected: PropTypes.array.isRequired,
  storesSelected: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    result: state.masterList.result,
    productsSelected: state.masterList.productsSelected,
    storesSelected: state.masterList.storesSelected,
  };
}

const mapDispatchToProps = {
  getResult,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTab);
