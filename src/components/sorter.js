import React from 'react';
// import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

export class Sorter extends React.Component {

  render() {
    return (
      <div className='sorter'>
        <div className="sorter-title">
        <p>Rendezés</p>
        </div>

        <div className="sorter-price">
          <img src=""></img>
          <p>Növekvő</p>
        </div>
      </div>
    );
  }
}

// Sorter.propTypes = {
  
// };
