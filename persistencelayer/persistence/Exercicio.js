class Exercicio{
    #id;
    #titulo;
    #desc;
    #enunciado;
    #alternativas = [];

    getId(){
        return this.#id;
    }
    setId(id){
        this.#id = id;
    }
 
    getTitulo(){
        return this.#titulo;
    }
    setTitulo(titulo){
        this.#titulo = titulo;
    }
 
    getDesc(){
        return this.#desc;
    }
    setDesc(desc){
        this.#desc = desc;
    }
 
    getEnunciado(){
        return this.#enunciado;
    }
    setEnunciado(enunciado){
        this.#enunciado = enunciado;
    }
 
    getAlternativas(){
        return this.#alternativas;
    }
    setAlternativas(alternativas){
        this.#alternativas = alternativas;
    }
}
export default Exercicio;