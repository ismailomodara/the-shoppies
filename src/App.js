import React from 'react'
import './App.css'
import Nominations from "./components/Nominations";
import Movies from "./components/Movies";

class App extends React.Component {
  state = {
    nominations: [],
    canNominate: true
  }

  /**
   * Since we are storing user's nomination in local storage, we check if the
   * user has stored nominates and they have not exceeded their limit.
   */
  componentDidMount() {
    let nominations = JSON.parse(localStorage.getItem('nominations')) || []
    this.setState(() => ({
      nominations: nominations
    }))
    if(this.state.nominations.length === 5) {
      this.setState(() => ({
        canNominate: false
      }))
    }
  }

  /**
   * This function adds a movie to a user's list of nominations.
   */
  addNomination = (movie) => {
    this.setState((currentState) => ({
      nominations: currentState.nominations.concat([movie]),
      canNominate: (currentState.nominations.length + 1) < 5
    }))
    this.updateLocalStorage()
  }

  /**
   * This function removes a movie from user's nominations list.
   */
  removeNomination = (movieTitle) => {
    this.setState((currentState) => ({
      nominations: currentState.nominations.filter(movie => movie.Title.toLowerCase() !== movieTitle.toLowerCase()),
      canNominate: true
    }))
    this.updateLocalStorage()
  }

  /**
   * This function helps to save user's nominations to local storage
   */
  updateLocalStorage = () => {
    localStorage.setItem("nominations", JSON.stringify(this.state.nominations))
  }

  render() {
    return (
        <div className="app">
          <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination}/>
          <Movies
              nominate={this.addNomination}
              canNominate={this.state.canNominate}
              nominations={this.state.nominations} />
        </div>
    )
  }
}

export default App
