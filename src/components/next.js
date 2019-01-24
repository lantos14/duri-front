import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import { history } from '../store/configureStore';

export class Next extends React.Component {

  onClick = () => {
    history.push(this.props.nextTab);
    this.props.clearSelection && this.props.clearSelection('all');
  }

  render() {
    return (
      <div id='next'>
      <div className='btn-wrapper' onClick={this.onClick}>
      <img src={this.props.nextTab !== '/' ? '../img/next-arrow.png' : '../img/repeat.png' }></img>
      </div>
      </div>
    )
  }
}

Next.propTypes = {
  nextTab: PropTypes.string.isRequired,
  clearSelection: PropTypes.func,
};
