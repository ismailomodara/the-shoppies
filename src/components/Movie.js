import React from 'react'
import PropTypes from 'prop-types'

class Movie extends React.Component  {
  static propTypes = {
    movie: PropTypes.object.isRequired
  }

  state = {
    isNominated: false
  }

  componentDidMount() {
    this.isMovieNominated()
  }

  isMovieNominated = () => {
    this.props.nominations.forEach(nomination => {
      if(nomination.Title === this.props.movie.Title) {
        this.setState({ isNominated: true })
      }
    })
  }

  nominate = (movie) => {
    if(this.props.canNominate) {
      this.props.nominate(movie)
      this.setState({ isNominated: true })
    }
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
                onClick={() => this.nominate(movie)}>
              <svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={`${this.state.isNominated ? 'yellow' : 'none'}`}
                  stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="feather feather-star">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
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
