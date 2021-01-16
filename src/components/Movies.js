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
            <div className="github-link">
              <a href="https://github.com/omodara145/the-shoppies.git" target="_blank" rel="noreferrer">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Github
              </span>
              </a>

            </div>
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
