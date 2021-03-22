import React, { Component } from 'react';
import  Formulario  from './components/Formulario/Formulario';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"
import './App.css';

class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <Formulario/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
