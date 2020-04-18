<div align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</div>
<br>
<br>
<p>FastFeet é uma aplicação completa (Back-end, Front-end e Mobile) desenvolvida com as tecnologias Node.js, ReactJS e React Native respectivamente. O projeto foi realizado como trabalho de conclusão do Bootcamp GoStack da Rocketseat.</p>

## :rocket: Tecnologias

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [Redux-persist](https://github.com/rt2zz/redux-persist)
-   [Styled-components](https://www.styled-components.com/)
-   [React Navigation](https://reactnavigation.org/)
-   [JWT](https://jwt.io/)
-   [Immer](https://github.com/immerjs/immer)
-   [Axios](https://github.com/axios/axios)
-   [React-icons](https://react-icons.netlify.com/)
-   [Reactotron](https://infinite.red/reactotron)
-   [Polished](https://polished.js.org/)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Date-fns](https://date-fns.org/)
-   [Multer](https://github.com/expressjs/multer)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

## :information_source: Instruções

### Pré-requisitos para rodar aplicação:

* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) 

Utilizando docker:

```bash
# Instalando imagem do Postgres 
docker run --name IMAGE_NAME -e POSTGRES_PASSWORD=PASSWORD -p 5432:5432 -d postgres:11

# Instalando imagem do Redis
docker run --name IMAGE_NAME -p 6379:6379 -d -t redis:alpine

# Inicializando Postgres
docker start POSTGRES_IMAGE_NAME

# Inicializando Redis
docker start REDIS_IMAGE_NAME

```

Clone o repositório:

```bash

git clone https://github.com/vitoraraujodev/fastfeet.git

```

### Backend

```bash
# Entre no diretório do backend
cd FastFeet/backend

# Instale as dependências
yarn

# Faça as migrações
yarn sequelize db:migrate

# Rode os seeds
yarn sequelize db:seed:all

# Rode a API
yarn dev & yarn queue

```

### Frontend

Em outra aba do terminal:

```bash
# Entre no diretório do frontend
cd FastFeet/frontend

# Instale as dependências
yarn

# Rode a aplicação
yarn start

```

Para acessar a aplicação com o seed:

<blockquote><strong>email:</strong> admin@fastfeet.com</blockquote>
<blockquote> <strong>senha:</strong> 123456</blockquote>

### Mobile

Para configurar o ambiente React Native, confira o [tutorial da Rocketseat](https://react-native.rocketseat.dev/).

Para o desenvolvimento da aplicação mobile, foi utilizado a plataforma Expo. Para instalá-la, [acesse esse link](https://expo.io/learn).

<h4> Lembre-se de instalar um emulador, ou então o aplicativo da Expo no disposítivo móvel que será usado para o teste da aplicação. </h4>

Em outra aba do terminal:

```bash
# Entre no diretório do mobile
cd FastFeet/mobile

# Instale as dependências
yarn

# Rode a aplicação
yarn start

```

Se estiver utilizando um disposítivo mobile, o Expo abrirá uma página no navegador com o QRcode para que possa acessar a aplicação.
