import React from 'react'
import './App.css'
import Nominations from "./components/Nominations";
import Movies from "./components/Movies";

class App extends React.Component {
  state = {
    nominations: []
  }

  render() {
    return (
        <div className="app">
          <Nominations nominations={this.state.nominations} />
          <Movies />
        </div>
    )
  }
}

export default App
