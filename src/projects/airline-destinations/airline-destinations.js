import React from 'react';
import './airline-destinations.css';
import airline from './data';

class airlineDest extends React.Component {
  render() {
    return (
       <section className="main">
        <div className="container">
          {airline}
        </div>
      </section>
    );
  }
}

export default airlineDest;