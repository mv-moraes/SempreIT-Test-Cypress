  describe('Teste de exclusão de order', () => {
    let clientCredentials;
  
    before(() => {
      // Executa antes de todos os testes
      // Lê as credenciais do cliente do arquivo cypress.json
      cy.readFile('clientregistration.json').then((data) => {
        clientCredentials = {
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          accessToken: data.accessToken,
        };
      });
    });
  
    it('Exclui uma order', () => {
      // Certifique de que você tem as credenciais do cliente
      if (!clientCredentials) {
        throw new Error('Credenciais do cliente não encontradas. Certifique-se de executar o teste de registro primeiro.');
      }
  
      // Substitua pelo ID da order que você deseja excluir
      const orderId = '4bwGw5KpcMsenGqzFrv3m';
  
      // Verifica se o ID da order foi fornecido
      if (!orderId) {
        throw new Error('ID da order não fornecido. Forneça um ID de order válido para excluir.');
      }
      cy.request({
        method: 'DELETE',
        url: `https://simple-books-api.glitch.me/orders/${orderId}`,
        headers: {
          Authorization: `Bearer ${clientCredentials.accessToken}`,
        },
      }).then((response) => {
        if (response.status === 404) {
          throw new Error(`Order com ID ${orderId} não encontrada.`);
        }
        expect(response.status).to.eq(204);
      });
    });
  });
  