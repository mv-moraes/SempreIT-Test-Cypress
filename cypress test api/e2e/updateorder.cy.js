describe('Update de order', () => {
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
  
    it('Atualiza o nome do cliente associado a uma order', () => {
      // Certifique de que você tem as credenciais do cliente
      if (!clientCredentials) {
        throw new Error('Credenciais do cliente não encontradas. Certifique-se de executar o teste de registro primeiro.');
      }
  
      // Substitua pelo ID da order que você deseja atualizar
      const orderId = '4bwGw5KpcMsenGqzFrv3m';
  
      // Substitua pelo novo nome que você deseja definir
      const novoNome = 'marcos';
  
      // Verifica se o novo nome é diferente do nome atual
      if (novoNome.toLowerCase() === clientCredentials.clientName.toLowerCase()) {
        throw new Error('O novo nome é igual ao nome atual. Não é permitido.');
      }
  
      cy.request({
        method: 'GET',
        url: `https://simple-books-api.glitch.me/orders/${orderId}`,
        headers: {
          Authorization: `Bearer ${clientCredentials.accessToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const orderData = response.body;
  
        // Verifica se o nome atual da order é diferente do novo nome
        if (orderData.customerName.toLowerCase() === novoNome.toLowerCase()) {
          throw new Error('O novo nome é igual ao nome atual. Não é permitido.');
        }
  
        // Atualiza o nome da order usando o método PATCH
        cy.request({
          method: 'PATCH',
          url: `https://simple-books-api.glitch.me/orders/${orderId}`,
          headers: {
            Authorization: `Bearer ${clientCredentials.accessToken}`,
          },
          body: {
            customerName: novoNome,
          },
        }).then((patchResponse) => {
          expect(patchResponse.status).to.eq(204);
        });
      });
    });
  });
  