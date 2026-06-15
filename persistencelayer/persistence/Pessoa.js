class Pessoa{
    #id;
    #nome;
    #usuario;
    #email;
    #senha;

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

    getUsuario(){
        return this.#usuario;
    }
    setUsuario(usuario){
        this.#usuario = usuario;
    }
    
    getEmail(){
        return this.#email;
    }
    setEmail(email){
        this.#email = email;
    }
    
    getSenha(){
        return this.#senha;
    }
    setSenha(senha){
        this.#senha = senha;
    }
}
export default Pessoa;