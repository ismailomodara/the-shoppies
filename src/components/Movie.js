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
            <div
                className={`movie-action ${this.props.canNominate ? '' : 'is-disabled'}`}
                onClick={() => this.props.canNominate ? this.props.nominate(movie) : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-plus-circle">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            </div>
          </div>
          <div className="movie-title">
            <p>{movieTitle}</p>
            <span>{movieYear}</span>
          </div>
        </div>
    )
  }
}

export default Movie
