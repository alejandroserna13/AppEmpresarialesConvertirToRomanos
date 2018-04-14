import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './convertidor.js';

class App extends Component {

  constructor(){
    super()
    this.state = {
      num: "",
      romanized: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({
      num: input
    })
  }

  handleSubmit(event){
    
    var num = this.state.num; 
    //console.log(num);
    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var romanized = '';
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
    this.setState({
      romanized
    })
    //console.log(romanized);
    event.preventDefault();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <p className="App-intro">
        
          <input className="number" value={this.state.num} onChange={this.handleChange} placeholder="Ingrese un número"/>
          <button className="enter" > Convertir </button>
          <label className="conversion" value={this.state.romanized}> {this.state.romanized} </label>
        
        
        </p>
        </form>
      </div>
    );
  }
}

export default App;
