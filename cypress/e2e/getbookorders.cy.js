describe('Teste para obter todas as orders', () => {
    let clientCredentials;
  
    before(() => {
      // Lê as credenciais do cliente do arquivo cypress.json
      cy.readFile('clientregistration.json').then((data) => {
        clientCredentials = {
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          accessToken: data.accessToken,
        };
      });
    });
  
    it('Deveria obter todas as orders', () => {
      // Certifique de que você tem as credenciais do cliente
      if (!clientCredentials) {
        throw new Error('Credenciais do cliente não encontradas.');
      }
      cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me/orders',
        headers: {
          Authorization: `Bearer ${clientCredentials.accessToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
  
        // Verifica se a resposta contém um array de orders
        expect(response.body).to.be.an('array');
        const orders = response.body;
  
        // Exibe detalhes de cada order
        const ordersCount = orders.length;
        cy.log(`Quantidade de Pedidos: ${ordersCount}`);
  
        orders.forEach((order, index) => {
          cy.log(`Detalhes do Pedido ${index + 1}:`);
          cy.log(JSON.stringify(order, null, 2)); // Indentação de 2 espaços
        });
      });
    });
  });
  