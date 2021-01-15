import React from 'react';
import Loader from "./Loader";
import Movie from "./Movie";
import Logo from "../assets/logo64.png"
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
            <div className="movies-nominations" onClick={() => this.props.openNominations()}>
              <span>All {this.props.nominations.length} Nomination(s)</span>
            </div>
            <div className={`movies-content--heading ${this.state.query !== '' ? 'has-value' : ''}`}>
              <div className="movies-content--logo">
                <img src={Logo} alt="The Shoppies" />
                <p>The Shoppies</p>
              </div>
              <div className="movies-search--bar">
                <input
                    type="text"
                    placeholder="Search for movies to nominate"
                    value={this.state.query}
                    onChange={(event) => this.bindQuery(event.target.value)} />
              </div>
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
