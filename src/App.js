
import BotaoCalculadora from './componentes/button.js';
import './styles/calculadora.css';
import React, { useState } from 'react';

function App() {
  let [resultado, setResultado] = useState(' ');

  function adicionaValor(valor) {
    setResultado(resultado + valor);

  }
  function evaluation() {
    setResultado(eval(resultado));

  }

  function apagar() {
    setResultado(' ');

  }
  let primeiraLinha = ['1', '2', '3', '+'];
  let segundaLinha = ['4', '5', '6', '-'];
  let terceiraLinha = ['7', '8', '9', '*'];
  let quartaLinha = ['0', '/'];
  let calculadora = [['1', '2', '3', '+'], ['4', '5', '6', '-'], 
  ['7', '8', '9', '*'], ['0', '/']]
  return (
    <table>
      <tr>
        <td ><button id="result" >{resultado}</button></td>
      </tr>
      
        {calculadora.map((e)=> <tr>{e.map((s) => <BotaoCalculadora valor={s} onclick={adicionaValor}></BotaoCalculadora>)}</tr>)}
      
      <tr>
        <BotaoCalculadora valor="AC" onclick={apagar} classe="AC"></BotaoCalculadora>
        <BotaoCalculadora valor='.' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='=' onclick={evaluation}></BotaoCalculadora>
      </tr>
    </table>
  );
}

export default App;
