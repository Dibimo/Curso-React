import React, { Component } from 'react';
import  Formulario  from './components/Formulario/index';
import ListaDeNotas from "./components/ListaDeNotas/index"
import './assets/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
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
    arrayNotas.splice(index,1);
    const novoEstado = {
      notas:arrayNotas
    };
    this.setState(novoEstado);
  }

  render(){
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
        apagarNota={this.apagarNota.bind(this)}
        notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
