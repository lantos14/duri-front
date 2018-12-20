import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { regTag } from '../actions/actions';
import '../styles/styles.scss';

import { Header } from '../components/header';
import { ResultContent } from '../components/resultContent';
import { Next } from '../components/next';

export class ResultTab extends React.Component {

  registerTag = (e) => {
    console.log(e.target.innerText); // eslint-disable-line
    this.props.action(e.target.innerText);
  }

  render() {
    return (
      <div id="result-tab" className='tab'>
        <Header activeTab='Result' />
        <ResultContent />
        <Next nextTab='/'/>
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
  action: regTag,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTab);
