import React, { Component } from 'react';
import  Formulario  from './components/Formulario/index';
import ListaDeNotas from "./components/ListaDeNotas/index"
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import './assets/App.css';

class App extends Component {

  constructor(){
    super();
    
  }

  

  render(){
    return (
      <section className="conteudo">
        <Formulario 
        criarNota={this.criarNota.bind(this)}
        categorias = {this.state.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)} 
          categorias={this.state.categorias} 
          />
          <ListaDeNotas 
          apagarNota={this.apagarNota.bind(this)}
          notas={this.state.notas}
          />

        </main>
      </section>
    );
  }
}

export default App;
