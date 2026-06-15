class Materia{
    #id;
    #nome;
    #aulas = [];

    getId(){
        return this.#id;
    }
    setId(id){
        this.#id = id;
    }

    getNome(){
        return this.#nome;
    }
    setNome(nome){
        this.#nome = nome;
    }

    getAulas(){
        return this.#aulas;
    }
    setAulas(aulas){
        this.#aulas = aulas;
    }
}
export default Materia;