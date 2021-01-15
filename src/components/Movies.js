import React from 'react';
import Movie from "./Movie";
import Loader from "./Loader";
import * as API from '../api/API';

class Movies extends React.Component {
  state = {
    movies: [],
    searching: false,
    query: ''
  }

  bindQuery = (value) => {
    this.setState({ query: value})
    this.search(value)
  }

  /**
   * This function searches for all books that match the query provided by the user.
   */
  search = (query) => {
    this.setState(() => ({ searching: true }))
    if(query !== '' && query.length > 2) {
      API.search(query)
        .then((movies) => {
          if(movies.Response === "True") {
            this.setState(() => ({ movies: movies.Search, searching: false }))
          } else {
            this.setState(() => ({ movies: [], searching: false }))
          }
        })
    } else {
      this.setState({ movies: [], searching: false})
    }
  }

  render() {
    return (
        <div className="movies">
          <div className="movies-content">
            <div className={`movies-search--bar ${this.state.query !== '' ? 'has-value' : ''}`}>
              <input
                  type="text"
                  placeholder="Search for movies to nominate"
                  value={this.state.query}
                  onChange={(event) => this.bindQuery(event.target.value)} />
            </div>
            <div>{
              this.state.query !== '' && (
                this.state.searching ? (
                    <Loader />
                ) :
                  this.state.movies.length ?
                    (
                      <ul className="movies-search--result">
                        {
                          this.state.movies.map((movie, index) =>
                              <li key={index}>
                                <Movie
                                    movie={movie}
                                    nominations={this.props.nominations}
                                    nominate={this.props.nominate}
                                    canNominate={this.props.canNominate} />
                              </li>)
                        }
                      </ul>
                    ) : (
                        <div>No result</div>
                    )
              )
            }</div>
          </div>
          <div className="movies-overlay"></div>
        </div>
    )
  }
}

export default Movies
