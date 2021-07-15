import React, { Component } from 'react';
import  Formulario  from './components/Formulario/index';
import ListaDeNotas from "./components/ListaDeNotas/index"
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import './assets/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo,texto){
    const novaNota = {
      titulo,
      texto
    };
    const novoArrayNotas = [...this.state.notas, novaNota]; //desconstroi o vetor antigo e adicionada uma nova nota
    const novoEstado = {
      notas:novoArrayNotas //recebe o vetor com a nova nota
    };
    this.setState(novoEstado);
  }

  apagarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1); //outra forma de adicionar elementos
    const novoEstado = {
      notas:arrayNotas
    };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria){
    let categoriasVetorNovo = this.state.categorias; //recebendo categorias antigas do vetor
    categoriasVetorNovo.push(nomeCategoria); //adiciona nova categoria ao vetor
    const novoEstado = {
      categorias: categoriasVetorNovo
    }
    this.setState(novoEstado);
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
