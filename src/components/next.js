import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import { history } from '../store/configureStore';

export class Next extends React.Component {

  onClick = () => {
    history.push(this.props.nextTab);
  }
  render() {
    return (
      <div id='next'>
      <div className='btn-wrapper' onClick={this.onClick}>
      </div>
      </div>
    )
  }
}

Next.propTypes = {
  nextTab: PropTypes.string.isRequired,
};
