import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    
  constructor(){
    super()

    this.state = {
      names: ['Rory ', 'Jeff ', 'Derek '] 
    }
  }



  render() {
    return (
      <div className="App">
      <h1>{this.state.names[0]}</h1>
      <h1>{this.state.names[1]}</h1>
      <h1>{this.state.names[2]}</h1>
      
        
      </div>
    );
  }
}

export default App;
