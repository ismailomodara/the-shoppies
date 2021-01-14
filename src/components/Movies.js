import React from 'react';

class Movies extends React.Component {
  state = {
    movies: [],
    searchResult: true,
    query: ''
  }

  bindQuery = (value) => {
    this.setState({ query: value})
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
          </div>
          <div className="movies-overlay"></div>
        </div>
    )
  }
}

export default Movies
