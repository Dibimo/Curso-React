import React, { Component } from 'react';
import  Formulario  from './components/Formulario/index';
import ListaDeNotas from "./components/ListaDeNotas/index"
import './assets/App.css';

class App extends Component {

  criarNota(titulo,texto){
    console.log(titulo + texto)
  }

  render(){
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
