import React, { Component } from 'react';
import  Formulario  from './components/Formulario/Formulario';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"

class App extends Component {
  render(){
    return (
      <>
        <Formulario/>
        <ListaDeNotas/>
      </>
    );
  }
}

export default App;
