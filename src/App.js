import React from 'react';
import './App.css';

class Tooltip extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}
class App extends React.Component {
  state = {
    text: ""
  }
  onDocumentClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      this.setState({ text: event.target.textContent })
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Tooltip text={this.state.text} />
      </div>
    )
  }
}

export default App;

