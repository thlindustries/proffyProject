<h1 align="center">
    <img src="https://i.imgur.com/53drcEb.png" width="400"/>
</h1>

<h4 align="center"> 
	🚧 Proffy 1.0 🚀 em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thlindustries/proffyProject">
  


  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/nlw1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/thlindustries/proffyProject?style=social">
  </a>
</p>


## 💻 Sobre o projeto

📝 Proffy - é um projeto proposto pela equipe da **RocketSeat** durante a segunda **NLW**, onde um aplicativo para facilitar o contato entre professores e alunos foi criado e desenvolvido ao longo da semana.
Neste aplicativo é possível pequisar professores que dão aula da matéria que você está procurando, também é possível procurar pelo dia da semana e pelo horário do dia. 

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- Pesquisar professores utilizando os filtros:
  - Dia da semana
  - Horário do dia
  - Matéria

## 🎨 Layout

O layout **mobile** da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/L7eG91aowMNoJ5xBFkzYWp/Proffy-Mobile-Copy?node-id=45%3A639">
  <img alt="Made by Thlindustries" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
  
</a>


## Mobile 

<p align="center">
  
  <img alt="Proffy" title="#Fishboard" src="https://i.imgur.com/pJQLiva.png" width="720px">
  <img alt="Proffy" title="#Fishboard" src="https://i.imgur.com/T989aFW.gif" width="280px">
</p>

## 🎨 Layout

O layout **web** da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/8ciNjsljyiMQ6WoN65cqMO/Proffy-Web-Copy?node-id=0%3A1">
  <img alt="Made by Thlindustries" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
  
</a>


## Web 

<p align="center">
  
  <img alt="Proffy" title="#Fishboard" src="https://i.imgur.com/31CELDK.png" width="720px">
</p>




## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta backend) 
2. Mobile (pasta mobile)
3. Web (pasta web)

💡Para o correto funcionamento do app mobile é necessário que o servidor backend esteja rodando.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o **Back End (servidor)**

```bash
# Clone este repositório
$ git clone https://github.com/thlindustries/proffyProject

# Acesse a pasta do projeto no terminal/cmd
$ cd proffyProject

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 📱Rodando a aplicação **MOBILE** 


```bash
# Instale o Aplicativo do EXPO em seu celular (Basta procurar na sua loja de aplicativos)

# Acesse a pasta do projeto mobile
$ cd mobile

# Inicie o metro bundler do expo
$ yarn start

#Escaneie o QR Code com o APP do EXPO em seu CELULAR

```

### 📱Rodando a aplicação **WEB** 


```bash
# Acesse a pasta do projeto web
$ cd web

# Inicie o servidor 
$ yarn start

# Entre em > http://localhost:3000 <

```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 👥 Contribuidores
- Thiago Lorente Kraetzer -> 
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/thlindustries?style=social">


## 💡 Ideas
<img src="https://i.imgur.com/RpAx01c.jpg" width="40"/> :[Acesse nosso Notion](https://www.notion.so/thlindustries/Proffy-2-0-e2382fa3574c4b1c848d58e82db88556) 

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Thiago Lorente Kraetzer 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thiago-kraetzer/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[socketio]: https://socket.io/