import React, { Component } from 'react';

export class Formulario extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder='Título'></input>
                <textarea placeholder='Escreva sua nota'></textarea>
                <button>Criar nota</button>
            </form>
        );
    }
}