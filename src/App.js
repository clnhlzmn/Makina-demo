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
          <div label="Input"> 
            <textarea className="input" rows="80" 
                      cols="80" id="aboutDescription"/>
          </div> 
          <div label="C Header"> 
            After 'while, <em>Crocodile</em>! 
          </div> 
          <div label="C Implementation"> 
            Nothing to see here, this tab is <em>extinct</em>! 
          </div> 
        </Tabs> 
      </div>
    );
  }
}

export default App;
