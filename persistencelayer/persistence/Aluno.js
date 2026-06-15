import Pessoa from "./Pessoa.js";

class Aluno extends Pessoa{
    #aulas = [];
    #exercicios = [];

    getAulas(){
        return this.#aulas;
    }
    setAulas(aulas){
        this.#aulas = aulas
    }

    getExercicios(){
        return this.#exercicios;
    }
    setExercicios(exercicios){
        this.#exercicios = exercicios;
    }
}
export default Aluno;