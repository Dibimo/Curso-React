import React, { Component } from 'react';
import { Formulario } from './components/Formulario';
import {ListaDeNotas} from "./components/ListaDeNotas"

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
