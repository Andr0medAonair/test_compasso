# Teste Compasso
Interview node.js: sistema de cadastro

<!--ts-->
   * [Linguagem Utilizada](#linguagem-utilizada)
   * [Requisitos](#requisitos)
   * [Como Usar](#como-usar)
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
  - Validação de cidades;
  - Criação de cidades;
  - Validação de clientes;
  - Criação de clientes.

### Ferramentas Utilizadas
- Visual Studio Code
- Postman
- MySQL

### Bibliotecas
- Jest
- Express
- Sequelize
- Body-parser
- Moment
- Config
- MySql2

