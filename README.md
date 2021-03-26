# test_compasso
Sistema de Cadastro

### Linguagem Utilizada
- Javascript

### Recursos/Ferramentas Utilizados
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

### Informações:
- Arquivo Principal: ./index.js
- Arquivo de Configurações de Conexão: ./config/config.js
- Arquivos de Erros: ./errors
- Arquivos de Testes: ./tests
- Roteadores: ./routes (router_City.js para cidades e router_Clients.js para clientes)
- Arquivo de Conexão: ./database/connection.js
- Models: ./database/city (cidades) e ./database/clients (clientes)
- Mocks para testes: ./database/city/__mocks__ (cidades) e ./database/clients__mocks__ (clientes)
- Usar comando npm start para rodar o código
- Usar comando npm test para testar o código

### Rotas:
- Cadastrar clientes: /localhost:3000/clients/
- Cadastrar clientes: /localhost:3000/cities/
- Listar todos os clientes: /localhost:3000/clients/
- Listar todas as cidades: /localhost:3000/cities/
- Busca clientes pela id: /localhost:3000/clients/id/[id]
- Busca clientes pelo nome: /localhost:3000/clients/name/[nome]
- Busca cidades pelo nome:localhost:3000/cities/city/[cidade]
- Busca cidades pelo estado:localhost:3000/cities/city/[estado]
- Atualizar cadastro clientes: localhost:3000/clients/[id]
- Remover cadastro clientes: localhost:3000/clients/[id]

