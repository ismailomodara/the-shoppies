import React from 'react'
import './App.css'
import './AppMedia.css'
import Nominations from "./components/Nominations";
import Movies from "./components/Movies";
import Notification from "./components/Notification";

class App extends React.Component {
  state = {
    nominations: [],
    nominationLimit: 5, // This is to make the nomination limit flexible, in case the limit is increased.
    canNominate: true,
    openNomination: false,
    notification: false,
    notificationMessage: ""
  }

  /**
   * Since we are storing user's nomination in local storage, we check if the
   * user has stored nominates and they have not exceeded their limit.
   */
  componentDidMount() {
    let nominations = JSON.parse(localStorage.getItem('nominations')) || []
    this.setState(() => ({
      nominations: nominations,
      canNominate: nominations.length < this.state.nominationLimit
    }))
  }

  nominationExist = (movie) => {
    const nominated = this.state.nominations.filter(nomination => nomination.Title === movie.Title)
    return nominated.length;
  }

  addNomination = async (movie) => {
    if(!this.nominationExist(movie)) {
      await this.setState((currentState) => ({
        nominations: currentState.nominations.concat([movie]),
        canNominate: (currentState.nominations.length + 1) < this.state.nominationLimit,
        notification: true,
        notificationMessage: "Nomination added successfully!"
      }))
      this.updateLocalStorage()
    } else {
      this.setState(() => ({
        notification: true,
        notificationMessage: "Nomination already added!"
      }))
    }
  }

  removeNomination = async (movieTitle) => {
    await this.setState((currentState) => ({
      nominations: currentState.nominations.filter(movie => movie.Title.toLowerCase() !== movieTitle.toLowerCase()),
      canNominate: true,
      notification: true,
      notificationMessage: "Nomination removed successfully!"
    }))
    this.updateLocalStorage()
  }

  updateLocalStorage = () => {
    localStorage.setItem("nominations", JSON.stringify(this.state.nominations))
  }

  removeNotification = () => {
    this.setState(() => ({
      notification: false,
      notificationMessage: ""
    }))
  }

  openNomination = () => {
    this.setState(() => ({
      openNomination: true
    }))
  }

  closeNomination = () => {
    this.setState(() => ({
      openNomination: false
    }))
  }

  render() {
    return (
        <div className="app">
          <Nominations
              nominations={this.state.nominations}
              removeNomination={this.removeNomination}
              openNomination={this.state.openNomination}
              closeNomination={this.closeNomination} />
          <Movies
              nominate={this.addNomination}
              canNominate={this.state.canNominate}
              nominations={this.state.nominations}
              openNominations={this.openNomination} />
          {
            this.state.notification && (
              <Notification
                message={this.state.notificationMessage}
                duration={2000}
                remove={this.removeNotification} />
            )
          }
        </div>
    )
  }
}

export default App
