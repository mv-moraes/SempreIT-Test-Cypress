describe('Testes de API', () => {
  it('Get do status da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/status',
    }).then((response) => {
      cy.log(response.body);  // Isso exibe os dados da resposta no painel de comandos do Cypress
      expect(response.status).to.eq(200);
    });
  });
});
