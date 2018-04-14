import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import convertToRoman from './convertidor.js';

describe('Pruebas de renderización', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('Pruebas al convertidor', () => {

  it('prueba 1', () => {
    var numero = 25
    var roman = convertToRoman(numero)
    expect(roman).toEqual("XXV")  
  });

  it('prueba 2', () => {
    var numero = 0
    var roman = convertToRoman(numero)
    expect(roman).toEqual("")  
  });

  it('prueba 3', () => {
    var numero = 1
    var roman = convertToRoman(numero)
    expect(roman).toEqual("I")  
  });

  it('prueba 4', () => {
    var numero = 10
    var roman = convertToRoman(numero)
    expect(roman).toEqual("X")  
  });

})
