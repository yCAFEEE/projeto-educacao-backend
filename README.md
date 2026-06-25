## Backend projeto Engenharia de Software II
Códigos referentes a Etapa Avaliativa III da disciplina de Engenharia de Software II. \
Nesses códigos, é implementado uma API REST que foi feita com base no diagrama de classe e no diagrama de sequência feitos nas Etapas Avaliativas anteriores.

## Membros
* Caio Lauro de Lima
* Luma da Silva Bergmann
* Yuri Daniel Moreira Gomes

## Utilização
Na aplicação, é utilizado o Browsable API Swagger para facilitar requisições no banco de dados e realizar os testes das rotas GET, POST, PUT e DELETE. Para acessar o Swagger, basta acessar um dos caminhos:
* `http://localhost:3000/api-docs` para teste local;
* `https://projeto-educacao-backend.vercel.app/api-docs` para testes usando o Vercel.

Para mais detalhes sobre o uso do Swagger, consulte a documentação.

![Tela swagger](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/images/swagger.png)
Tela inicial do Swagger

**Obs.:** o cluster MongoDB pode estar desativado por conta de inatividade, fazendo com que a aplicação não funcione. Nesse caso, contate um dos colaboradores para que ele seja novamente ativado.

## Para inicialização da aplicação localmente, é necessário
Pré requisitos:
```
npm (versão 10.8.2 ou superior)
node (versão v20.19.5 ou superior)
```
É necessário criar um arquivo `.env` na raiz do projeto com o seguite formato:
```
PORT=3000
JWT_SECRET=[Senha qualquer para JWT_SECRET]
MONGODB_URI=[String de conexão do MongoDB Atlas]
```

As demais dependências se encontram nos respectivos `package.json`. \
Para iniciar o _server_ local, use `npm start`.

## Modelo de telas da aplicação
Modelo das telas da implementação completa da aplicação.  
Todos os modelos foram feitos utilizando a plataforma Figma.  

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

## Diagrama
### Diagrama de Classe
[![preview do diagrama de classe](https://github.com/yCAFEEE/projeto-educacao-backend/blob/main/diagramas/diagrama-classe.svg)](https://www.planttext.com?text=xLpTRzD847-FbFzXbHVIkrBW5Q6AGgDJJt3bS7il25LRPniCZftpEdmSn_z-w_t-jDTnQCNX1zhK-vlnp6zcTdRNCKzn3Qjwkywd4_mXApQmWckGvX3ZaxgkikjjZSxIiaYoVn1uE9t0F2y_NQspprcncavoT5E3kWHLjdfNWsLMeRJEoc8wcKusCFq0LmZCNbNbUrINiw_J2G3owijoYN9sJRlw2bKumpKgKWHUm2-e4WW0peeQLJUG3125DmZZiZezEPV30FmACCm_mcg-4UFWiS8Ua3-kop97iD15O4wqzfGXXgEwfmnX46_pHkf0HxzvwmKz-tAs3AkNVmZPR-B3yoPi1ZzNByjYLPu-6tdIUN9pwYJV5cKWds0pHlHHJ0S_CLZ1ImpMv8CYsxXmLD8FWJmHFhVboF_FTq_ijpaCXPuCDPh8hoxdEv7IzKwavJW1jlfjwcj-QqvR8MUkjaRyXtSv5EV5PrIbMPg5wXo9SQ9IOZiuw2CZsEWZO_8YqMta1DNBFmBpWSvFMuRyl3ovEVKIaazPQFfOir6Ya-CwM8h52uPYyIOx7Dl6ZLSn_nZ87iL4M-xy78o8t_fA33pvz-Z8kpOJQD6F6TBkpXB5fd0ECkTpWT4hcG5zjItGAd8CwqQI8RbxrfBz_FezMVIhTJfVWpPEGYq3xeDiIHXZQFroKQuH6KZ8NgFPKQY1BTx2AYjzGsWDizmtW57n3he39FrGJOAecH38YnN57NWifJh-8CRE3Ol3UYZMkgFNi4lcw9mx7A5QICHeNpHSpIbZ4PePEaPlqb0zfuH7w6NeJhq4oJ87i_K__MoMfOJGihGqiX4TdfUhh63kNraPTMYcou5ZkrFFrlxggssN642uTVj2YgjgAZT-1KNH0GXQPXq8UaCv0-pIYvLmgn6TC6e9dr_wpkr2hDM25b0WcdIUjID9B-BGlgC14BgnjbO5TXq99h2z804TzaXepEHPP_KszqwHIuHJxzHPR8iqWqkl4Esw1QopZn2BSTFrFSsZ5zJkEJC_OlhW-E1aT4gydJSkH-YYsF1qAVYPIwPYfaqf5LHyed4xrua6Ykdm3GnfxpIgukJTzNsVRDfMtZQCFc_oB8Kfz2YxwnoAwMszqocgpLVvdF0Lqzwhk1Qya3JF5UCnsQhaOZgoFfTvzrQ1cOpFnR6Bm1zgsIPRW8KqJoxS3G5Tdv1bzltxxl6aFcYSNKaac3qwElfb1ag2u1-jBOW3RP0FwIVzb8Ig5mEz8Cxck96XDtlKmCAu5il2EZLV7rc-KcxfZ-QVt8xybQ5FpcE5r-MsHjZtBE6C3J5ddpoH0yV7nf9WK-AQ56y6rDgHrveAFVj4b3oW9v77nrQ-tBByWyVPqjInsGxNGTTYQ92QbjCK7WsLAlkAY7n6C83LlUeO69qMFNqZ551bRFPz5TEKwDuAXYWRak_3nOTMYrT5xs9nj7H5GSwSUmk5t1mE87IlEWP6faLFt_04L7N5Y7UjlKM8Rvi7SBit3GDZ4zJIDp9UHLPSs9fKQ_TZWx-j1gzJxpyy6xlvhNJpG3MOnmDZyzwj4BgQjqwvxv1lxDIttAdrWBXd5MDR_gvjMLimEPk-vY6aTT42y_sw0Xhd9SOMHSDefnlk-bdXdEC8Uo6deEw9X7RgS7fnheuSxe7VSLc0PSaFLkw9WVVDvTchy-JYYZNJgzUBFsS0Olx8dC9Vex-1bfkpvYnhzXZCPeVQHVvuQmRi0VhqoxrCdtwnoqvmV5ObhbNOi6gDLscvHEwTg0Pw-UktqBr-MpW4N6znwYEWJJ9n9NKZGpOo4p6z_EPja8zBnqR-HOKxZTAbuxzfLJm17J4wNRnON2ni2iGpIXy5sPAgV1YhCV5eR4couAIYoatDAzwIamicg-oas9sMdcvTuhSkiWIbffWoT4bX1UKdfKj3ujSGbPKRzKWzfZPTmtabt7auRUkIW7NzM8ciLvSMNc51McBhrdN9rJoaVjctSmFTaepOpP9SibrX3mZTe3NFzzohP77Z2RjyO1RJBfbPYMDMRBCauAXUgRlF6vxjVejSuiZ5jOdcgLTKczJD4_teRiDpQNjlc1NjVcoJr0dGliUpSulKBJVq3IimjGRsLfdSIrcb9iLiV_JlDdGbYdE7n7-7oDAHccBgntMC5OFViIuDYLz3L599FL65vThDqtWl4R7la0JkiEU8Y2HtdRE_WRPh-RXEkPg75PBO7thBYE-5hIBY8jv5INUdKJeJdyx8474jCILZEy7ItUT4ktJYa-vdRbGYs_RoDDwPzKkF5xRElR8kajTsnFnAvAubORjYQuqlXy2NCPwNHLsLUQxUuzIUZiaLeaB9sydt1IhYcZXIEWHa5-0vQb92ugs1VbBYtO5-KkeDWXtbwFUNusMDmqkDHhf97YaSH25PHOqC3c5Gzj2HnY4qyfbt9B4tYTQR6IE3Ep8uTfD1x8sDP7VonXuobC6nVUpSWpsTmtfXLmrm4MkgrDxQTQ76lA1UtNM0dXgmtjzrH9oW6o_ncd3YCtivQ3fvYeeb_Kz__WC0)
Clicando na imagem, será redirecionado para o link do diagrama no planttext.
