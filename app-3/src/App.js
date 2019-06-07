import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      guitars: ['Gibson', 'Pure Salem', 'Fender', 'Peavey'],
      textBox: ''
    }
  }
  
  textBoxUpdate(filter){
  this.setState({textBox: filter})
  }

   render() {
     let shredStickSearch = this.state.guitars.filter((element, index) => {
       return element.includes(this.state.textBox)
     })
     .map((element, index) => {return <h2 key={index}>{element}</h2>})

    return (
      <div className="App">
        
        <input type='text'
        onChange={e => this.textBoxUpdate(e.target.value)}></input>
         <p>{shredStickSearch}</p>
      </div>
    );
  }
}

export default App;
