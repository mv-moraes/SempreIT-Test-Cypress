# Testes de API com Cypress
Este projeto contém testes de API usando Cypress para uma API ficticia de uma livraria.
Testes realizados para avaliação da SempreIT.

Algumas informações importantes, alem dos codigos existe um caminho onde vc pode obter resultados e evidencias dos testes executados tambem.
O caminho é:

```bash
|______SempreIT-Test_Cypress
|     |______./cypress (contem os specs)
|     |______./evidencias (contem as evidencias em PNG)
|     |______./node_modules 
|     |______cypress.config
|     |______package,json
|     |______package-lock.json
```

## Indice

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Execução de testes na interface do Cypress](#execucao-de-testes-na-interface-do-cypress)
- [Execução de testes via terminal](#execucao-de-testes-via-terminal)

# Configuração do Ambiente #
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Github]
[Node.js]
[Cypress]

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

1. Instale o Cypress:
   npm install cypress --save-dev

2. Abrir o Cypress:
   npx cypress open

# 🎲 Execução de testes na interface do Cypress #
   
   Dentro da interface do Cypress você encontra os testes (specs) pronto para ser utilizados.

   _**LISTA DE SPECS**_
   
   [Teste de Registro de Cliente]</br>
   **clientregistration.cy**</br>
   _Certifique de que o teste de registro é executado antes dos outros. Este teste registra um novo cliente e salva as credenciais no arquivo clientregistration.json._
   
   [Teste de Deletar Ordens]</br>
   **deleteorder.cy**                             
   _Este teste deleta uma ordem específica. Precisa trocar o id para o id da ordem que voce deseja deletar._

   [Teste de Vizualizar de Ordens]</br>
   **getbookorders.cy**                             
   _Este teste verifica a visualização de todas as ordens._

   [Teste de Vizualizar Lista de Livros]</br>
   **getbooks.cy**                                   
   _Este teste verifica a visualização da lista de livros._
                               
   [Teste de Vizualizar Livro Especifico]</br>
   **getspecificbook.cy**</br>
   _Este teste verifica a visualização de um livro específico. Precisa substituir para o ID desejado_
   
   [Teste de Vizualizar Ordem Especifica]</br>
   **getspecificorder.cy**                  
   _Este teste verifica a visualização de uma ordem específica. Precisa substituir pelo ID da ordem desejado._

   [Teste de Verificação de Status]</br>
   **getstatus.cy**                                 
   _Este teste retorna o status da API._

   [Teste de Envio de Ordem]</br>
   **submitorder.cy**                                
   _Este teste envia uma ordem para o cliente registrado, verificando se o livro escolhido pelo ID está em estoque e se o ID do livro é existente._
   
   [Teste de Update de Ordem]</br>
   **updateorder.cy**                                
   _Este teste atualiza o nome do cliente associado a uma ordem existente. Precisa do ID da ordem desejada._
       

# 👾 Execução de testes via terminal #

   Para executar via terminal, apos a intalação do cypress utilize os comandos abaixo para executar os testes.
   
   [Teste de Verificação de Status]</br>
   Este teste retorna o status da API.</br>
   ```js
   npx cypress run --spec cypress/e2e/getstatus.cy.js
   ```

   [Teste de Registro de Cliente]</br>
   Certifique-se de que o teste de registro é executado antes dos outros. Este teste registra um novo cliente e salva as credenciais no arquivo clientregistration.json.</br>
   ```js
   npx cypress run --spec cypress/e2e/registerclient.cy.js
   ```
   [Teste de Envio de Ordem]</br>
   Este teste envia uma ordem para o cliente registrado, verificando se o livro escolhido pelo ID está em estoque e se o ID do livro é existente.</br>
   ```js
   npx cypress run --spec cypress/e2e/submitorder.cy.js
   ```

   [Teste de Update de Ordem]</br>
   Este teste atualiza o nome do cliente associado a uma ordem existente.</br>
   ```js
   npx cypress run --spec cypress/e2e/updateorder.cy.js
   ```

   [Teste de Deletar Ordens]</br>
   Este teste deleta uma ordem específica.</br>
   ```js
   npx cypress run --spec cypress/e2e/deleteorder.cy.js
   ```

   [Teste de Vizualizar de Ordens]</br>
   Este teste verifica a visualização de todas as ordens.</br>
   ```js
   npx cypress run --spec "cypress/integration/view-orders.spec.js"
   ```

   [Teste de Vizualizar Ordem Especifica]</br>
   Este teste verifica a visualização de uma ordem específica.</br>
   ```js
   npx cypress run --spec "cypress/integration/view-specific-order.spec.js"
   ```

   [Teste de Vizualizar Lista de Livros]</br>
   Este teste verifica a visualização da lista de livros.</br>
   ```js
   npx cypress run --spec "cypress/integration/view-books-list.spec.js"
   ```

   [Teste de Vizualizar Livro Especifico]</br>
   Este teste verifica a visualização de um livro específico.</br>
   ```js
   npx cypress run --spec "cypress/integration/view-specific-book.spec.js"
   ```

# 🙏🏻 Mais uma vez, agradeço a oportunidade! #
👤 Author: Marcos Moraes </br>
📧 Email: marcos_mmoraes@hotmail.com
