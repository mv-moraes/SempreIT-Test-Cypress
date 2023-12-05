describe('Ordem especifica', () => {
    let clientCredentials;
  
    before(() => {
      // Executa antes de todos os testes
      // Lê as credenciais do cliente do arquivo cypress.json
      cy.readFile('cypress.json').then((data) => {
        clientCredentials = {
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          accessToken: data.accessToken,
        };
      });
    });
  
    it('Busca uma ordem especifica', () => {
      // Certifique de que você tem as credenciais do cliente
      if (!clientCredentials) {
        throw new Error('Credenciais do cliente não encontradas. Certifique-se de executar o teste de registro primeiro.');
      }
  
      // Substitua pelo orderId desejado
      const orderId = '4bwGw5KpcMsenGqzFrv3m';
  
      cy.request({
        method: 'GET',
        url: `https://simple-books-api.glitch.me/orders/${orderId}`,
        headers: {
          Authorization: `Bearer ${clientCredentials.accessToken}`,
        },
      }).then((response) => {
        // Exibe a resposta da API no console do Cypress
        cy.log('Resposta da API:', response.body);
        Object.keys(response.body).forEach((propriedade) => {
            cy.log(`${propriedade}: ${JSON.stringify(response.body[propriedade])}`);
          });
        expect(response.status).to.eq(200);
      });
    });
  });