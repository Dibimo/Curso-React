import React, { Component } from 'react';
import  Formulario  from './components/Formulario/index';
import ListaDeNotas from "./components/ListaDeNotas/index"
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import './assets/App.css';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/ArrayDeNotas';

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  

  render(){
    return (
      <section className="conteudo">
        <Formulario 
        criarNota={this.notas.adicionarNota.bind(this.notas)}
        categorias = {this.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} 
          categorias={this.categorias} 
          />
          <ListaDeNotas 
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas}
          />

        </main>
      </section>
    );
  }
}

export default App;
