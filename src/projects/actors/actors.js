import React from 'react';
import './actors.css';
import actors from './data';

var allActors = actors.map((actor) =>
            <article className="article">
                <div className="article__content">
                    <h2 className="article__heading">{ actor.name }</h2>
                    <p className="article__heading-sub">{ actor.dateOfBirth }</p>
                    <p className="article__heading-sub">{ actor.placeOfBirth }</p>
                    <p className="article__text">{ actor.biography }</p>
                </div>
                <div className="article__image">
                    <img alt={actor.name} src={actor.image} />
                </div>
            </article>);

class Actors extends React.Component {
  render() {
    return (
      <section className="main">
        <input type="text" className="filter-box" />
        {allActors}
      </section>
    );
  }
}

export default Actors;
