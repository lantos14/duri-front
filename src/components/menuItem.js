import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export class MenuItem extends React.Component {

  isActiveTab = () => {
    return (this.props.name === this.props.activeTab);
  };

  render() {
    return (
        <div className={`menu-item ${this.isActiveTab() ? 'active-tab' : ''}`}>
          <p>{this.props.name}</p>
        </div>
    )
  }
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    activeTab: PropTypes.string.isRequired,
  };