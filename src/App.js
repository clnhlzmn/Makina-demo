import './App.css';
import Tabs from "./components/Tabs"
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
      <div>
        <h1>Tabs Demo</h1>
        <Tabs> 
          <div label="Gator"> 
            See ya later, <em>Alligator</em>! 
          </div> 
          <div label="Croc"> 
            After 'while, <em>Crocodile</em>! 
          </div> 
          <div label="Sarcosuchus"> 
            Nothing to see here, this tab is <em>extinct</em>! 
          </div> 
        </Tabs> 
      </div>
    );
  }
}

export default App;
