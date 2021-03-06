import './App.css';
import Tabs from "./components/Tabs"
import React, { Component } from 'react';

const defaultInput = 
`machine oven;

initial state closed {
    on open -> open;
    initial state idle {
        on start -> cooking;
    }
    state cooking {
        entry enable_heater;
        on timeout -> idle;
        exit disable_heater; 
    }
}

state open {
    on close -> closed;
    on start error;
}`

class App extends Component {
    
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onClickCompile = this.onClickCompile.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state = {input: defaultInput}
        this.setTextInputRef = element => {
            this.textInput = element;    
        };
    }
    
    handleKeyDown(event) {
        if (event.code === "Tab") { // tab was pressed
            event.preventDefault();
            var val = this.state.input,
            start = event.target.selectionStart,
            end = event.target.selectionEnd;
            this.setState(
                {
                    "input": val.substring(0, start) + '    ' + val.substring(end)
                },
                () => {
                    this.textInput.selectionStart = this.textInput.selectionEnd = start + 4
                });
        }
   }
    
    onChange(event) {
        this.setState({input: event.target.value})
    }
    
    onClickCompile(event) {
        const input = this.state?.input || ""
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            const responseText = xhr.responseText
            if (responseText.startsWith("Exception")) {
                this.setState({header: responseText, implementation: responseText})
            } else {
                const splitResponse = responseText.split("***")
                const header = splitResponse[0]
                const implementation = splitResponse[1]
                this.setState({header, implementation})
            }
        })
        // open the request with the verb and the url
        xhr.open('POST', 'https://us-central1-makina-308118.cloudfunctions.net/MakinaCompile')
        xhr.setRequestHeader("Content-Type", "text/plain")
        // send the request
        xhr.send(input)
    }
    
    render() {
        return (
            <div>
                <h1>Makina Demo</h1>
                <a href="https://github.com/clnhlzmn/makina">Readme</a>
                <Tabs> 
                    <div label="Input"> 
                        <div className="input-container">
                            <textarea className="input" rows="80" 
                                    cols="80" id="aboutDescription" 
                                    onChange={this.onChange}
                                    onKeyDown={this.handleKeyDown}
                                    ref={this.setTextInputRef}
                                    value={this.state.input || defaultInput}/>
                        </div>
                        <button className="submit" 
                                type="button"
                                onClick={this.onClickCompile}>Compile</button>
                    </div> 
                    <div label="C Header"> 
                        <textarea className="input" rows="80" 
                                        cols="80" id="aboutDescription" 
                                        value={this.state?.header || ""}
                                        readOnly/>
                    </div> 
                    <div label="C Implementation">
                        <textarea className="input" rows="80" 
                                        cols="80" id="aboutDescription"
                                        value={this.state?.implementation || ""}
                                        readOnly/>
                    </div> 
                </Tabs> 
            </div>
        );
    }
}

export default App;
