import React from 'react';

class Notification extends React.Component {
  state = {
    class: 'fadeInUp'
  }

  componentDidMount() {
    setTimeout(() => {
      this.hideNotification()
    }, this.props.duration)
  }

  hideNotification = () => {
    this.setState(() => ({
      class: 'fadeOutDown'
    }))
    this.props.remove()
  }

  render() {
    return (
        <div className={`notification ${this.state.class}`}>
          <p>{this.props.message}</p>
        </div>
    )
  }
}

export default Notification
