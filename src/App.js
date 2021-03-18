import './App.css';
import Tabs from "./components/Tabs"
import React, { Component } from 'react';

class App extends Component {
    
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    
    onChange(event) {
        this.setState({input: event.target.value})
    }
    
    render() {
        console.log("App.render")
        return (
            <div>
                <h1>Tabs Demo</h1>
                <Tabs> 
                    <div label="Input"> 
                        <div className="input-container">
                            <textarea className="input" rows="80" 
                                    cols="80" id="aboutDescription" 
                                    onChange={this.onChange}
                                    value={this.state?.input || ""}/>
                        </div>
                        <button className="submit" type="button">Compile</button>
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
