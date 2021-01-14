import React from 'react'
import PropTypes from 'prop-types'

class Movie extends React.Component  {
  static propTypes = {
    movie: PropTypes.object.isRequired
  }

  render() {
    const movie = this.props.movie;
    const movieTitle = movie.Title;
    const movieYear = movie.Year;
    const movieThumbnail = movie.Poster

    return (
        <div className="movie">
          <div className="movie-cover">
            <img src={movieThumbnail} alt="" />
            <div className="movie-action" onClick={() => this.props.nominate(movie)}>+</div>
          </div>
          <div className="movie-title">
            <h4>{movieTitle}</h4>
            <p>{movieYear}</p>
          </div>
        </div>
    )
  }
}

export default Movie
