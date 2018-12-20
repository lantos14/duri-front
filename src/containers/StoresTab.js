import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { regTag } from '../actions/actions';
import '../styles/styles.scss';

import { Header } from '../components/header';
import { StoresContent } from '../components/storesContent';
import { Next } from '../components/next';

export class StoresTab extends React.Component {
  state = {
    storesList: [
      "promod",
      "hm",
    ]
  }

  registerTag = (e) => {
    console.log(e.target.innerText); // eslint-disable-line
    this.props.action(e.target.innerText);
  }

  render() {
    return (
      <div id="stores-tab" className='tab'>
        <Header activeTab='Store' />
        <StoresContent list={this.state.storesList} />
        <Next nextTab='result' />
      </div>
    )
  }
}

StoresTab.propTypes = {
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
)(StoresTab);
