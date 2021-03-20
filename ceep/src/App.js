import React from 'react';

const titulo = <h1><strong><em>Teste</em></strong></h1>

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder='Título'></input>
        <textarea placeholder='Escreva sua nota'></textarea>
        <button>Criar nota</button>
      </form>
      <ul> 
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva sua nota</p>
          </section>
        </li>
      </ul>
    </>
  );
}

export default App;
