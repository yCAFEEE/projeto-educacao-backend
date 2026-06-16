## Backend projeto Engenharia de Software II
Códigos referentes a Etapa Avaliativa III da disciplina de Engenharia de Software II. \
Nesses códigos, é implementado uma API REST que foi feita com base no diagrama de classe e no diagrama de sequência feitos nas Etapas Avaliativas anteriores.

## Membros
* Caio Lauro de Lima
* Luma da Silva Bergmann
* Yuri Daniel Moreira Gomes

## Modelo de telas da aplicação
Modelo das telas da implementação completa da aplicação.  
Todos os modelos foram feitos utilizando a plataforma Figma.  

---

#### Tela de Curso (Visualização, Criação e Edição)
Painel principal que lista as matérias existentes e oferece atalhos para gerenciamento.
* **Imagem da Tela:**
  ![Tela de curso](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/tela%20de%20curso%20com%20cria%C3%A7%C3%A3o%20e%20edi%C3%A7%C3%A3o.png)
* **Rotas REST Relacionadas:**
  * `GET /materia` - Lista todas as matérias que aparecem nesta tela.
  * `GET /aula` - Lista todas as aulas que aparecem nesta tela.
  * `GET /exercicios` - Lista todos os exercícios que aparecem nesta tela.

#### Tela de Criação de Matéria
Formulário para cadastrar uma nova matéria.
* **Imagem da Tela:**
  ![Tela criação matéria](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/criar%20mat%C3%A9ria.png)
* **Rotas REST Relacionadas:**
  * `POST /materia` - Salva a nova matéria criada.

#### Tela de Edição de Matéria
Formulário para alterar dados de uma matéria já existente.
* **Imagem da Tela:**
  ![Tela edição matéria](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/editar%20mat%C3%A9ria.png)
* **Rotas REST Relacionadas:**
  * `GET /materia/search/{id}` - Busca os dados de uma matéria específica para preencher o formulário.
  * `PUT /materia/{id}` - Atualiza as informações da matéria modificada.
  * `DELETE /materia/{id}` - Exclui a matéria.

#### Tela de Criação de Aula
Formulário para cadastrar uma nova matéria.
* **Imagem da Tela:**
  ![Tela criação aula](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/criar%20aula.png)
* **Rotas REST Relacionadas:**
  * `POST /aula` - Cria uma nova aula.

#### Tela de Edição de Aula
Formulário para alterar dados de uma aula já existente.
* **Imagem da Tela:**
  ![Tela edição aula](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/editar%20aula.png)
* **Rotas REST Relacionadas:**
  * `GET /aula/search/{id}` - Busca os dados de uma aula específica para preencher o formulário.
  * `PUT /aula/{id}` - Atualiza as informações da aula modificada.
  * `DELETE /aula/{id}` - Exclui a aula.

#### Tela de Criação de Exercício
Formulário para cadastrar um novo exercício.
* **Imagem da Tela:**
  ![Tela criação exercicio](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/criar%20exercicio.png)
* **Rotas REST Relacionadas:**
  * `POST /exercicio` - Cadastra uma nova questão no banco de dados.

#### Tela de Edição de Exercício
Formulário para alterar dados de um exercício já existente.
* **Imagem da Tela:**
  ![Tela edição exercicio](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/editar%20exercicio.png)
* **Rotas REST Relacionadas:**
  * `GET /exercicio/search/{id}` - Busca os dados de um exercício específico para preencher o formulário.
  * `PUT /exercicio/{id}` - Atualiza as informações do exercício modificado.
  * `DELETE /exercicio/{id}` - Exclui o exercício.

#### Tela de Perfil do Usuário
Visualização dos dados cadastrais do aluno ou do professor.
* **Imagem da Tela:**
  ![Tela perfil](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/tela%20de%20perfil.png)
* **Rotas REST Relacionadas:**
  * `GET /aluno/search/{id}` - Busca os dados de um aluno específico para exibir na tela.
  * `DELETE /aluno/{id}` - Exclui a conta do aluno.
  * `GET /professor/search/{id}` - Busca os dados de um professor específico para exibir na tela.
  * `DELETE /professor/{id}` - Exclui a conta do professor.

#### Tela de Edição de Dados do Perfil
Formulário para o usuário atualizar suas informações pessoais.
* **Imagem da Tela:**
  ![Tela edição perfil](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/editar%20dados%20do%20usu%C3%A1rio.png)
* **Rotas REST Relacionadas:**
  * `PUT /aluno/{id}` - Atualiza os dados do aluno no banco de dados.
  * `PUT /professor/{id}` - Atualiza os dados do professor no banco de dados.

## Para inicialização da aplicação, é necessário
```
npm 10.8.2
node v20.19.5
```
As demais dependências se encontram nos respectivos `package.json`. \
Para iniciar o _server_, use `npm start`.

## Utilização
Na aplicação, é utilizado o Browsable API Swagger para facilitar requisições no banco de dados e realizar os testes das rotas GET, POST, PUT e DELETE. Para acessar o Swagger, basta acessar o caminho `http://localhost:3000/api-docs` para teste local ou `https://projeto-educacao-backend.vercel.app/api-docs` para testes usando o Vercel. Para mais detalhes sobre o uso do Swagger, consulte a documentação. \
**Obs.:** o cluster MongoDB pode estar desativado por conta de inatividade, fazendo com que a aplicação não funcione. Nesse caso, contate um dos colaboradores para que ele seja novamente ativado.

---

![Tela swagger](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/swagger.png)
Tela inicial do Swagger
