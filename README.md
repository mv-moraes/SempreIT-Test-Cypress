# Testes de API com Cypress

Este projeto contém testes de API usando Cypress para uma API ficticia de uma livraria.

## Sumário

 * [Configuração do Ambiente] *

- [Teste de Verificação de Status]
- [Teste de Registro de Cliente]
- [Teste de Envio de Ordem]
- [Teste de Update de Ordem]
- [Teste de Deletar Ordens]
- [Teste de Vizualizar de Ordens]
- [Teste de Vizualizar Ordem Especifica]
- [Teste de Vizualizar Lista de Livros]
- [Teste de Vizualizar Livro Especifico]

## Configuração do Ambiente

1. Instale o Cypress:
   npm install cypress --save-dev

2. Abrir o Cypress:
   npx cypress open

3. Execução de testes na interface do Cypress:
   Dentro da interface do Cypress você encontra os testes (specs) pronto para ser utilizados.

     *LISTA DE SPECS*
   
   clientregistration.cy                         [Teste de Registro de Cliente] - Certifique de que o teste de registro é executado antes dos outros. Este teste registra um novo cliente e salva as credenciais no arquivo clientregistration.json.
   deleteorder.cy                                [Teste de Deletar Ordens] - Este teste deleta uma ordem específica.
   getbookorders.cy                              [Teste de Vizualizar de Ordens] - Este teste verifica a visualização de todas as ordens.
   getbooks.cy                                   [Teste de Vizualizar Lista de Livros] - Este teste verifica a visualização da lista de livros.
   getspecificbook.cy                            [Teste de Vizualizar Livro Especifico] - Este teste verifica a visualização de um livro específico.
   getspecificorder.cy                           [Teste de Vizualizar Ordem Especifica] - Este teste verifica a visualização de uma ordem específica.
   getstatus.cy                                  [Teste de Verificação de Status] - Este teste retorna o status da API.
   submitorder.cy                                [Teste de Envio de Ordem] - Este teste envia uma ordem para o cliente registrado, verificando se o livro escolhido pelo ID está em estoque e se o ID do livro é existente.
   updateorder.cy                                [Teste de Update de Ordem] - Este teste atualiza o nome do cliente associado a uma ordem existente.
       

5. Execução de testes via terminal:

   Para executar via terminal, apos a intalação do cypress utilize os comandos abaixo para executar os testes.
   
   [Teste de Verificação de Status]
   Este teste retorna o status da API.
   npx cypress run --spec cypress/e2e/getstatus.cy.js

   [Teste de Registro de Cliente]
   Certifique-se de que o teste de registro é executado antes dos outros. Este teste registra um novo cliente e salva as credenciais no arquivo clientregistration.json.
   npx cypress run --spec cypress/e2e/registerclient.cy.js

   [Teste de Envio de Ordem]
   Este teste envia uma ordem para o cliente registrado, verificando se o livro escolhido pelo ID está em estoque e se o ID do livro é existente.
   npx cypress run --spec cypress/e2e/submitorder.cy.js

   [Teste de Update de Ordem]
   Este teste atualiza o nome do cliente associado a uma ordem existente.
   npx cypress run --spec cypress/e2e/updateorder.cy.js

   [Teste de Deletar Ordens]
   Este teste deleta uma ordem específica.
   npx cypress run --spec cypress/e2e/deleteorder.cy.js

   [Teste de Vizualizar de Ordens]
   Este teste verifica a visualização de todas as ordens.
   npx cypress run --spec "cypress/integration/view-orders.spec.js"

   [Teste de Vizualizar Ordem Especifica]
   Este teste verifica a visualização de uma ordem específica.
   npx cypress run --spec "cypress/integration/view-specific-order.spec.js"

   [Teste de Vizualizar Lista de Livros]
   Este teste verifica a visualização da lista de livros.
   npx cypress run --spec "cypress/integration/view-books-list.spec.js"

   [Teste de Vizualizar Livro Especifico]
   Este teste verifica a visualização de um livro específico.
   npx cypress run --spec "cypress/integration/view-specific-book.spec.js"
