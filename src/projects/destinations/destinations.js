import React from 'react';
import './destinations.css';
import destinations from './data';

var allDestinations = destinations.map((destination) =>
             <div className="card-container">
                    <div className="card">
                        <div className="card__img-container">
                            <img src={ destination.img } alt={ destination.imgDescription } className="card__img" />
                        </div>
                        <div className="card__content">
                            <p className="card__heading">{ destination.title }</p>
                            <p className="card__subHeading">{ destination.subTitle }</p>
                            <p className="card__text">{ destination.content }</p>
                            <div className="card__link-container">
                                <a href="##" target="_blank" className="card__link">{ destination.url }</a>
                            </div>
                        </div>
                    </div>
                </div>);

class Destinations extends React.Component {
  render() {
    return (
       <section className="main">
        <div className="cards container">
          <div className="row">
                {allDestinations}
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;