import React, { Component } from "react";
import "./App.css";
import './Components/Header'

class App extends Component {
  constructor(){
    super()

    this.state = {
      textBox: ''
    }
  }

  textBoxUpdate(value){
    this.setState({textBox: value})
  }




  render() {
    return (
      <div className="App">
          <input type='text'
          onChange={e => this.textBoxUpdate (e.target.value)}></input>
          <p>{this.state.textBox}</p>
      </div>
    );
  }
}

export default App;
