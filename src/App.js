import React from 'react'
import './App.css'
import Nominations from "./components/Nominations";

class App extends React.Component {
  state = {
    nominations: [1]
  }

  render() {
    return (
        <div className="app">
          <Nominations nominations={this.state.nominations} />
        </div>
    )
  }
}

export default App
