# Desenvolvedor Frontend

## :bulb: Objetivo

Desenvolver uma aplicação para gerenciar os produtos da empresa XPTO.

- [API](http://www.mocky.io/v2/5d3b57023000005500a2a0a6)
- [Layout](https://xd.adobe.com/spec/b271010a-cc9d-4cce-471f-5ea72cd6e687-c440/)

## :memo: Histórias

Eu, como usuário desejo:

- Visualizar a listagem de todos os produtos a serem vendidos: com a foto, categoria (exclusivo ou promoção), preço, título, abreviação da descrição e opção de favorito em uma única opção de menu;
- Buscar um produto específico através do seu nome. Aqui é importante ignorar letras maiúsculas, minúsculas e possíveis erros de acentuação;
- Filtrar os produtos das categorias **Exclusivo** e **Promoção** através de opções do menu;
- A partir do momento em que eu clicar em um produto da listagem, desejo visualizar sua foto em tamanho maior, descrição completa, ficha técnica e os itens que o identifiquem (nome, descrição abreviada e preço) em uma nova página. Essa página também deverá conter um botão para voltar a tela de listagem de produtos;
- Transformar um produto em favorito através da opção que consta tanto na listagem de produtos quanto na tela dos seus detalhes;
- Todos os produtos favoritos deverão ser filtrados a partir de uma opção do menu;
- Possibilidade de retirar da categoria de favorito desligando a opção que consta tanto na listagem de produtos quanto na tela dos seus detalhes.

## :information_source: Como Usar

- [Fork](https://help.github.com/en/articles/fork-a-repo) esse [repositório](https://github.com/finch-solucoes/desenvolvedor-frontend);
- Crie sua branch `git checkout -b seu-nome-de-usuário/desenvolvedor-frontend`;
- Baixe seu fork `https://github.com/seu-nome-de-usuário/desenvolvedor-frontend.git`;
- Desenvolva o teste e crie seu [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork);

## :microscope: Especificações Técnicas

### Requisitos obrigatórios

- Layout conforme proposto;
- A aplicação deve ser responsiva (Mobile, Tablet, Desktop);
- Desenvolver utilizando ReactJS;
- Utilizar pré-processador de CSS;
- Utilizar Flexbox e/ou Grid;
- Criar rotas para navegação;
- Criar uma busca que deverá ser executada em tempo real na listagem atual;
- Gerenciamento de estado (Redux ou Context API);
- Ao navegar entre as rotas, as informações dos produtos já devem estar no estado.

### Diferenciais

- Typescript
- Configurar ESLint (padrão Airbnb) e Prettier;
- Utilizar API de Hooks do ReactJS;
- Implementar testes unitários;
- Utilizar Styled Components;
- Utilizar style guide para CSS (BEM, SMACSS);
- Fazer internacionalização da aplicação (EN/PT);
- Criar o Storybook dos componentes;
- Criar um Docker para executar o projeto em produção;
- Publicar o projeto em alguma plataforma (Heroku, Netlify, entre outras).

---

:wave: Boa sorte!
