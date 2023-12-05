describe('Teste de obtenção de um livro específico', () => {
    it('Retorna informações sobre um livro específico', () => {
      const livroId = 2; // Substitua pelo ID do livro desejado
      cy.request({
        method: 'GET',
        url: `https://simple-books-api.glitch.me/books/${livroId}`,
      }).then((response) => {
        // Exibindo todas as informações do livro no painel de comandos do Cypress
        cy.log('Informações do Livro:');
        // Iterar sobre as propriedades do objeto e exibi-las
        Object.keys(response.body).forEach((propriedade) => {
          cy.log(`${propriedade}: ${JSON.stringify(response.body[propriedade])}`);
        });
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(livroId); //verifica o id do livro escolhido
      });
    });
  });
  