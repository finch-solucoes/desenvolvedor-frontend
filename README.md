# Desenvolvedor Frontend

## :bulb: Objetivo
Implementar uma aplicação para gerenciar os produtos da empresa XPTO. Essa aplicação necessita ser executada nos navegadores mais recentes do mercado

- [API](http://www.mocky.io/v2/5d3b57023000005500a2a0a6)
- [Layout](https://xd.adobe.com/spec/b271010a-cc9d-4cce-471f-5ea72cd6e687-c440/)

> ### Estimativa
> Dependendo da sua experiência e/ou das ferramentas escolhidas, você pode precisar de mais ou menos tempo para realizar o desafio. Lembre-se que vamos avaliar a sua capacidade de estimativa e a sua capacidade em executar o projeto no tempo planejado. Ao efetuar a estimativa para realização.


## :books: Histórias

- Eu como usuário, desejo visualizar a listagem de produtos;
- Eu como usuário, desejo pesquisar um determinado produto conforme seu nome;
- Eu como usuário, desejo que ao clicar em um item da listagem seja apresentado as informações do produto em uma nova tela;
- Eu como usuário, desejo enviar para os "FAVORITOS" um produto que esteja na listagem;
- Eu como usuário, desejo remover dos "FAVORITOS" um produto que esteja na listagem de favoritos;
- Eu como usuário, desejo navegar nos menus laterais conforme a interação executada;
- Eu como usuário, desejo que, ao visualizar a informação de um produto seja possível voltar a tela anterior;


## :information_source: Como Usar
Primeiro faça um fork desse repositório, em seguida na sua linha de comando:

```bash
# Clone this repository
$ git clone https://github.com/${username}/desenvolvedor-frontend

# Go into the repository
$ cd desenvolvedor-frontend
```


## :trophy: Especificações Técnicas
A aplicação deve ser responsiva (mobile, tablet, desktop). Publicar o projeto em alguma plataforma (Heroku, Netlify, etc), a fim de ser possível visualizar através de um link, com isso as funcionalidades a serem desenvolvidas serão avaliadas de acordo com o seu nível.

**Especificações Gerais**
- Utilizar React, Vue;
- Utilizar pré-processador de CSS;
- Flexbox/Grid;
- ES6;

**Nível Junior**
- Layout conforme proposto (Dê o seu máximo);
- A aplicação deve se comportar como uma *Single Page Application*;
- Utilização de Rotas para navegação;
- Ao navegar entre as rotas, as informações devem ser mantidas e não pode haver *refresh* da listagem;
- A busca deverá ser executada em tempo real na listagem atual;
- (Desejável/Bônus) Gerenciamento de estado;

**Nível Pleno**
- Todos os requisitos do nível anterior;
- Paginação númerada;
- Armazenar todas as informações no estado utilizando a arquitetura Flux (Redux, Vuex e etc);
- Ao navegar nos filtros laterais, todas as informações devem já estar no estado;
- Ao pesquisar, deverá ser armazenado no estado todas as pesquisas realizadas na sessão atual;
- Configurar eslint (airbnb);
- (Desejável/Bônus) Testes unitários no estado;
- (Desejável/Bônus) Utilizar bundle size (Webpack, Rollup ou Parcel);

**Nível Senior**
- Todos os requisitos do nível anterior;
- Testes unitários no estado;
- Utilizar bundle size (Webpack, Rollup ou Parcel);
- Utilizar alguma metodologia para CSS (BEM, SMACSS, ATOMIC CSS);
- (Desejável/Bônus) Fazer internacionalização da aplicação;
- (Desejável/Bônus) Criar o Story Book dos Components;
- (Desejável/Bônus) CSS in JS

---

:wave: Boa sorte a todos!