import './App.css';
import Tabs from "./components/Tabs"
import React, { Component } from 'react';

class App extends Component {
    
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onClickCompile = this.onClickCompile.bind(this)
    }
    
    onChange(event) {
        this.setState({input: event.target.value})
    }
    
    onClickCompile(event) {
        console.log(this.state?.input || "")
        
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:8080')
        xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080")
        xhr.setRequestHeader("Content-Type", "text/plain")
        // send the request
        xhr.send(this.state?.input || "")
    }
    
    render() {
        console.log("App.render")
        return (
            <div>
                <h1>Makina Demo</h1>
                <Tabs> 
                    <div label="Input"> 
                        <div className="input-container">
                            <textarea className="input" rows="80" 
                                    cols="80" id="aboutDescription" 
                                    onChange={this.onChange}
                                    value={this.state?.input || ""}/>
                        </div>
                        <button className="submit" 
                                type="button"
                                onClick={this.onClickCompile}>Compile</button>
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
