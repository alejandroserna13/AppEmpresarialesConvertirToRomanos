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

  it('convertir 25 en XXV', () => {
    var numero = 25
    var roman = convertToRoman(numero)
    expect(roman).toEqual("XXV")  
  });

  it('Mostrar vacío al ingresar 0', () => {
    var numero = 0
    var roman = convertToRoman(numero)
    expect(roman).toEqual("")  
  });

  it('Convertir 1 en I', () => {
    var numero = 1
    var roman = convertToRoman(numero)
    expect(roman).toEqual("I")  
  });

  it('Convertir 10 a X', () => {
    var numero = 10
    var roman = convertToRoman(numero)
    expect(roman).toEqual("X")  
  });

})
