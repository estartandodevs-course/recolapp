## Melhores Praticas.

### Branchs

- A cada nova Task voce deve fazer uma branch usando a develop como base.

`git checkout develop `

`git pull origin develop `

`git checkout -b feature/button-component`

### Commits

:warning: NUNCA FAZER COMMIT PARA A MASTER/MAIN

:warning: NUNCA FAZER COMMIT PARA A DEVELOP

- Fazer commits pequenos (pouco codigo) e recorrentes.

- Fazer commits semanticos Ex.

  - Se for um componente novo:

    `git commit -m "feat: input com estilizacao"`

  - Se for um ajuste em um componente / container / rotas / style :

    `git commit -m "chore: ajustando componente x"`

  - Se for uma correcao de algum bug :
    `git commit -m "fix:corrigindo componente x que esta errado" `

  - Se esta no meio de uma tarefa e vai encerrar o dia , sempre adicionar WIP :
    `git commit -m "chore: WIP componente x " `

### PULL REQUEST

- feature/xyz -> PR -> develop (O Dev é o responsável)
  :thumbsup: Explicar no PR O que foi feito na feature em questao.

- Adicionar Reviewer para aprovar (Outro membro do time)

- Mudar a tarefa no Trello para a coluna REVIEW (O Dev é o responsável)

- Depois de revisto aprovado mover para a coluna DONE e colocar a etiqueta [APROVADO]

### Padrões para nomeclatura

- Pastas

  - Nome deve estar escritos em **inglês.**
  - Nomenclatura: [kelab-case](https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841).
  - `ex: pages, components, styles, services, assets`

- Estrutura de componentes e páginas

  - usar `index.js` para o componente
  - user `styles.js` para o arquivo de estilos do componente
  - Nome deve estar escritos em **inglês.**
  - Nomenclatura: **PascalCase**
  - `ex: Button, TitlePage, Home`

- Código
  - Variáveis: **camelCase**
  - Hooks: **camelCase**
  - Constantes de configuração: **UPPER_CASE**
  - Funções: **camelCase**
  - Funções JSX (componentes): **PascalCase**
