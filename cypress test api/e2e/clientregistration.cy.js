describe('Registro de Cliente', () => {
    let clientCredentials;
  
    before(() => {
      // Executa antes de todos os testes
      // Gera as credenciais do cliente
      clientCredentials = {
        clientName: 'SempreIT',
        clientEmail: 'sempreITest@example.com',
      };
    });
  
    it('Registra um novo cliente e gravar informações no arquivo JSON', () => { 
      // Certifica de que você tem as credenciais do cliente
      if (!clientCredentials) {
        throw new Error('Credenciais do cliente não encontradas.');
      }
  
      cy.request({
        method: 'POST',
        url: 'https://simple-books-api.glitch.me/api-clients',
        body: clientCredentials,
      }).then((response) => {
        expect(response.status).to.eq(201);
  
        // Grava informações no arquivo JSON
        const dataToWrite = {
          clientName: clientCredentials.clientName,
          clientEmail: clientCredentials.clientEmail,
          accessToken: response.body.accessToken,
        };
  
        cy.writeFile('cypress.json', dataToWrite);
      });
    });
  });