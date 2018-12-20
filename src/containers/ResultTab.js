import React from 'react';
import { connect } from 'react-redux';
import '../styles/styles.scss';

import { Header } from '../components/header';
import { ResultContent } from '../components/resultContent';
import { Next } from '../components/next';

export class ResultTab extends React.Component {

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
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTab);
