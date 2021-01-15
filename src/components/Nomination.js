import React from 'react';
import PropTypes from "prop-types";

class Nomination extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired
  }

  render() {
    const movie = this.props.movie;
    const movieTitle = movie.Title;
    const movieYear = movie.Year;
    const movieThumbnail = movie.Poster

    return (
        <div className="nomination">
          <div className="nomination-image">
            <img src={movieThumbnail} alt="" />
          </div>
          <div className="nomination-title">
            <h3>{movieTitle}</h3>
            <p>{movieYear}</p>
          </div>
          <div className="nomination-action" onClick={() => this.props.remove(movieTitle)}>
            -
          </div>
        </div>
    )
  }
}

export default Nomination
