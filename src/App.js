import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.setState({value: "foo"})
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
              type="text"
              value={this.state?.value || ""}
              onChange={this.onChange}
           />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ); 
  }
}

export default App;
