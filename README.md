# Teste Compasso
### Interview node.js: sistema de cadastro
### Status: completo

<!--ts-->
   * [Linguagem Utilizada](#linguagem-utilizada)
   * [Requisitos](#requisitos)
   * [Como Usar](#como-usar)
   * [Funcionalidades](#funcionalidades)
   * [Estruturação](#estruturação)
   * [Rotas](#rotas)
   * [Testes](#testes)
   * [Ferramentas Utilizadas](#ferramentas-utilizadas)
   * [Bibliotecas](#bibliotecas)
<!--te-->

### Linguagem Utilizada
- Javascript

### Requisitos
  - Editor de código
  - Browser
  - Postman (opcional)
  - MySQL Workspace

### Como Usar
  - Aplicação roda através do comando npm start ou nodemon index.js

### Funcionalidades
- [x] Cadastro de clientes
- [x] Cadastro de cidades
- [x] Atualização de cadastro de clientes
- [x] Consulta de clientes
- [x] Consulta de cidades
- [x] Consulta de clientes pelo id
- [x] Consulta de clientes pelo nome
- [x] Consulta de cidades pelo nome
- [x] Consulta de cidades pelo estado
- [x] Remoção de cadastro de clientes

### Estruturação:
- Porta padrão configurada: 3000
- Arquivo Principal: ./index.js
- Arquivo de Configurações de Conexão: ./config/config.js
- Arquivos de Erros: ./errors
- Arquivos de Testes: ./tests
- Roteadores: ./routes (router_City.js para cidades e router_Clients.js para clientes)
- Arquivo de Conexão: ./database/connection.js
- Models: ./database/city (cidades) e ./database/clients (clientes)
- Mocks para testes: ./database/city/__mocks__ (cidades) e ./database/clients__mocks__ (clientes)

### Rotas:
- Swagger: localhost:3000/api-docs/
- Cadastrar clientes: /localhost:3000/clients/
- Cadastrar cidades: /localhost:3000/cities/
- Listar todos os clientes: /localhost:3000/clients/
- Listar todas as cidades: /localhost:3000/cities/
- Busca clientes pela id: /localhost:3000/clients/id/[id]
- Busca clientes pelo nome: /localhost:3000/clients/name/[nome]
- Busca cidades pelo nome:localhost:3000/cities/city/[cidade]
- Busca cidades pelo estado:localhost:3000/cities/city/[estado]
- Atualizar cadastro clientes: localhost:3000/clients/[id]
- Remover cadastro clientes: localhost:3000/clients/[id]

### Testes:
- Realizados testes unitários através do Jest
- Para executar testes, utilizar o comando npm test
- Testes realizados:
  - [x] Validação de cidades;
  - [x] Criação de cidades;
  - [x] Validação de clientes;
  - [x] Criação de clientes.

### Ferramentas Utilizadas
- Visual Studio Code
- Postman
- MySQL

### Bibliotecas
- Swagger
- Swagger-jsdoc
- Swagger-ui-express
- Jest
- Express
- Sequelize
- Body-parser
- Moment
- Config
- MySql2

