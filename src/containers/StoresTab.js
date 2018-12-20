import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { regStoreTag, delStoreTag } from '../actions/actions';
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

  sendTagAction = (e) => {
    const productName = e.target.innerText;
    const modActiveTags = this.props.storesSelected;

    if (modActiveTags.indexOf(productName) > -1) {
      // if tag is already selected
      this.props.delStoreTag(productName);
      modActiveTags.splice(modActiveTags.indexOf(productName, 1));
    } else {
      // if tag is not selected yet
      this.props.regStoreTag(productName);
      modActiveTags.push(productName);
      }
    
    e.target.classList.toggle('tag-active');
  }

  render() {
    return (
      <div id="stores-tab" className='tab'>
        <Header activeTab='Store' />
        <StoresContent list={this.state.storesList} tagFn={this.sendTagAction} />
        <Next nextTab='result' />
      </div>
    )
  }
}

StoresTab.propTypes = {
  regStoreTag: PropTypes.func.isRequired,
  delStoreTag: PropTypes.func.isRequired,
  storesSelected: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    storesSelected: state.masterList.storesSelected,
  };
}

const mapDispatchToProps = {
  regStoreTag,
  delStoreTag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoresTab);
