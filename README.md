<h1 align="center">


<p align="center"><b>Projeto Delas</b><p>

# <p align="center"> Senac | Porto Digital | Minas  <p>

## Este é um projeto Integrador do curso de aperfeiçoamento Backend | Turma 01  
<br>

- [:dart: Descrição do Projeto](#-Descrição-do-Projeto)
- [:ledger:Status do Projeto](#status-do-projeto)
- [:ledger:Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [:inbox_tray:Acesso ao Projeto](#acesso-ao-projeto)
- [:bookmark: Tecnologias Utilizadas](#-Tecnologias-e-Dependências-Utilizadas)
- [:on: Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)

<br>
<br>

## :dart: Descrição do Projeto

### Como surgiu o nosso Projeto:

O DELAS foi pensado na carência e necessidade de um espaço feminino para incentivar o trabalho, empoderamento, comunidade, e independência profissional e financeira. Com objetivo de inclusão de comunidade feminina e não-binárie, o DELAS foi construído para ser um marketplace onde serão ofertados produtos e serviços para acomodar todos os públicos, mas que serão atendidos por mulheres, tendo ciência de que o público feminino e LGBTQIA+ é e será prioridade. Visamos então fornecer um ambiente virtual de fácil utilização para empreendedoras expandirem seus negócios e alcançarem sucesso em suas jornadas empreendedoras. A plataforma permite que as empreendedoras cadastrem seus serviços e divulguem os produtos com os quais trabalham.<br>
 
  Através da Plataforma, as empreendedoras terão acesso a uma gama de recursos e funcionalidades que visam aprimorar suas interações com os clientes e fortalecer suas estratégias de negócios. A plataforma busca criar um ambiente seguro e confiável para o desenvolvimento de relacionamentos profissionais e o crescimento das empreendedoras.<br>

Com uma interface intuitiva e amigável, visamos simplificar o processo de expansão dos negócios das empreendedoras, permitindo que elas se concentrem em oferecer serviços de qualidade e alcançar resultados positivos em suas atividades empreendedoras.<br>
 
### Perfil de Empreendedora:
 Cada empreendedora possui um perfil personalizado na plataforma, onde pode fornecer informações detalhadas sobre si mesma, sua empresa e seus objetivos. Esse perfil serve como uma vitrine virtual para apresentar suas habilidades, experiências e conquistas, ajudando a estabelecer uma presença profissional no mercado.<br>
### Perfil de Cliente: 
Os clientes também podem criar um perfil na plataforma, fornecendo seus dados pessoais. Esses perfis de cliente permitem o acesso aos serviços oferecidos pelas empreendedoras e facilitam a pesquisa por categorias específicas por meio de filtros. Os clientes podem encontrar empreendedoras com base em suas necessidades e preferências, facilitando o processo de contratação de serviços.
 <br>

<br>

## Status do Projeto

### em construção...

<br>
<br>

## Acesso ao Projeto

### Para acessar ao projeto:
### [Link de acesso:](https://github.com/DelisG/projeto-delas/blob/main/README.md)
<br>

## Funcionalidades e Demonstração da Aplicação

 <h3> 📁 Arquitetura do Projeto </h3>
<br>
:pushpin: Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 

```
 📁projeto-delas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 clientesController.js
   |  |    |- 📄 empreendedorasController.js  
   |  |
   |  |
   |  ||--📁 models
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |    |- 📄 index.js 
   |  |
   |  ||-📄 app.js
   |  |
   |  |
   |  | 
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js
   |- 📄 README.md


```

## ⚗️ Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br> 
 <!---
▫️ Rota de criação de empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna todas as empreendedoras
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna o empreendimento por categoria
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que altera algum dado do cadastro da empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>
<br>
<br>
-->
## :on: Testando Rotas
 📢 Todas as rotas existentes neste projeto:

 <h3> No usuário Empreendedora, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /empreendedoras    | Listar todas as empreendedoras cadastradas              |   
| GET    | /:id               | Mostra o cadastro da empreendedora por ID               |  
| POST   | /                  | Registra uma nova empreendedora                         |   
| PUT    | /:id               | Altera dados da empreendedora identificada pelo id      |   
| DELETE | /:id               | Remove o cadastro da empreendedora identificada pelo id |   

<br>
 <h3> No usuário cliente, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /cliente           | Listar todas os clientes cadastrados                    |   
| GET    | /:id               | Mostra o cadastro do cliente       por ID               |  
| POST   | /                  | Registra um novo cliente                                |   
| PUT    | /:id               | Altera dados do cliente identificado pelo id            |   
| DELETE | /:id               | Remove o cadastro do cliente identificado pelo id       |   

<br>

##  :ledger: Tecnologias Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|

 ## :bookmark: Pacotes Utilizadas
 | Ferramenta | Descrição |
 | --- | --- |
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
<br>
<br>
<br>

<h1 align="center">

<p align="center">
<img src= "#" width="500px" height="150"/>
</p>

## [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)
<br>

### [Tereza Oliveira](https://github.com/TerezaOliveira90)
#### [Delis Glória](https://github.com/delisG) 
#### [Michelle Bessoni](https://github.com/mbessoni)

Projeto criado com a orientação e cuidado da Professora [Tereza Oliveira](https://github.com/devcode25))!<br>

<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2>

</span>

<p align="center">
<img src= "#" width="50%" height="30%"/>
</p>
