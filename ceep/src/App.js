import React from 'react';
import {ListaDeNotas} from "./components/ListaDeNotas"

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder='Título'></input>
        <textarea placeholder='Escreva sua nota'></textarea>
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
    </>
  );
}

export default App;
