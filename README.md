# Smart Games

Back-End do projeto para a loja de jogos Smart Games

### Linguagem utilizada: NodeJS

### Framework: Express

### ORM: Sequelize

### Banco de dados: MySql

### Como instalar no seu computador

$ git clone https://github.com/pedroHen14/smart_games_backend

### Acesse a pasta em que você rodou o git clone

$ cd "nome_pasta"

### Instalar dependências do projeto

$ npm install

### Abrir a aplicação no VSCode (caso não utilize esta IDE é só abrir normalmente na de sua preferência)

$ code .

### Abrir o arquivo "database.js" que está localizado na pasta "config"

### Alterar as configurações do banco de dados de acordo com o que está no seu computador

- host:
- username:
- password:
- dialect: (Caso o seu banco de dados não seja o Mysql, colocar o banco de dados que estiver utilizando)

### Para criar o banco de dados iremos utilizar o ORM (Sequelize), basta execultar estes comandos:

##### Criar o banco de dados

1 - $ npx sequelize db:create

##### Execultar as migrações para a criação das tabelas

2 - $ npx sequelize db:migrate

##### Popular as tabelas do banco com os dados

3 - $ npx sequelize db:seed:all

### Após a instalação das depêndencias e a criação do banco de dados, já podemos subir o servidor para a rede através da rota "3333"

$ npm start
