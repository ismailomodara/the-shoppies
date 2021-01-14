import React from 'react'
import './App.css'
import Nominations from "./components/Nominations";
import Movies from "./components/Movies";

class App extends React.Component {
  state = {
    nominations: []
  }

  /**
   * This function helps to add a movie to a user's list of nominations
   */
  addNomination = (movie) => {
    console.log(movie)
    this.setState((currentState) => ({
      nominations: currentState.nominations.concat([movie])
    }))
  }

  render() {
    return (
        <div className="app">
          <Nominations nominations={this.state.nominations} />
          <Movies nominate={this.addNomination} />
        </div>
    )
  }
}

export default App
