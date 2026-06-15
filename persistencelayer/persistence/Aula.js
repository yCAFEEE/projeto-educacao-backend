class Aula{
    #id;
    #titulo;
    #desc;
    #url;
    #explicacao;
    #exercicios = [];

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

    getUrl(){
        return this.#url;
    }
    setUrl(url){
        this.#url = url;
    }

    getExplicacao(){
        return this.#explicacao;
    }
    setExplicacao(explicacao){
        this.#explicacao = explicacao;
    }

    getExercicios(){
        return this.#exercicios;
    }
    setExercicios(exercicios){
        this.#exercicios = exercicios;
    }
    
}
export default Aula;