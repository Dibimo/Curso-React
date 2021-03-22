import React, { Component } from 'react';
import  Formulario  from './components/Formulario/index';
import ListaDeNotas from "./components/ListaDeNotas/index"
import './assets/App.css';

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
