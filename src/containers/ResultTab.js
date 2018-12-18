import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testAction } from '../actions/actions';
import '../styles/styles.scss';

import { Header } from '../components/header';
import { ResultContent } from '../components/resultContent';
import { Next } from '../components/next';

export class ResultTab extends React.Component {

  reduceTest = () => {
    this.props.action('success');
  }

  render() {
    return (
      <div id="result-tab" className='tab'>
        <Header />
        <ResultContent />
        <Next />
      </div>
    )
  }
}

ResultTab.propTypes = {
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
)(ResultTab);
