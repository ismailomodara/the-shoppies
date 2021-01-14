import React from 'react'

class Movie extends React.Component  {

  render() {
    return (
        <div className="movie">
          <div className="movie-cover">
            <img src="" alt="" />
            <div className="movie-action"></div>
          </div>
          <div className="movie-title">
            <h4>Black Panther II</h4>
            <p>2021</p>
          </div>
        </div>
    )
  }
}

export default Movie
