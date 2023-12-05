describe('Testes da lista de livros', () => {
    it('Get de livros cadastrados.', () => {
      cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me/books',
      }).then((response) => {
        // Exibindo cada elemento do array no painel de comandos do Cypress
        response.body.forEach((element, index) => {
          cy.log(`Livro ${index + 1}: ID: ${element.id}, Nome: ${element.name}, Genero: ${element.type}`);
        });
        expect(response.status).to.eq(200);
      });
    });
  
    it('Lista de livros de ficção', () => { //Exibe apenas livros de ficção
      const generoEscolhido = 'fiction';
      cy.request({
        method: 'GET',
        url: `https://simple-books-api.glitch.me/books?type=${generoEscolhido}`,
      }).then((response) => {
        // Exibindo cada elemento do array no painel de comandos do Cypress
        response.body.forEach((element, index) => {
          cy.log(`Livro ${index + 1}: ID: ${element.id}, Nome: ${element.name}, Genero: ${element.type}`);
        });
        expect(response.status).to.eq(200);
        });
    });
        it('Lista de livros de não ficção', () => { //Exibe apenas livros de não ficção
            const generoEscolhido = 'non-fiction';
            cy.request({
              method: 'GET',
              url: `https://simple-books-api.glitch.me/books?type=${generoEscolhido}`,
            }).then((response) => {
              // Exibindo cada elemento do array no painel de comandos do Cypress
              response.body.forEach((element, index) => {
                cy.log(`Livro ${index + 1}: ID: ${element.id}, Nome: ${element.name}, Genero: ${element.type}`);
              });
              expect(response.status).to.eq(200);
              });
            });
      
    });
  