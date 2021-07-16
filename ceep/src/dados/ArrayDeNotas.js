export default class ArrayDeNotas{

    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto,categoria){
        const nota = new Nota(titulo,texto,categoria);
        this.notas.push(nota);
        this.notificar();
    }

    apagarNota(indice){
        console.log('aaaa');
        this.notas.splice(indice,1);
        this.notificar();
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }

}

class Nota{
    constructor(titulo,texto,categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;

    }
}
