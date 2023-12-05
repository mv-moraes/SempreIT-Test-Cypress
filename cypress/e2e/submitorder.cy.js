describe('Teste de envio de ordem', () => {
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

  it('Envia uma ordem e verificar o estoque', () => {
      // Certifique de que você tem as credenciais do cliente
      if (!clientCredentials) {
          throw new Error('Credenciais do cliente não encontradas. Certifique-se de executar o teste de registro primeiro.');
      }

      const orderData = {
          bookId: 1, // Substitua pelo ID do livro desejado
          customerName: 'John',
      };

      cy.request({
          method: 'GET',
          url: `https://simple-books-api.glitch.me/books/${orderData.bookId}`,
      }).then((bookResponse) => {
          // Verifica se o livro existe
          if (bookResponse.status === 404) {
              throw new Error(`Livro com ID ${orderData.bookId} não encontrado.`);
          }

          // Verifica se há estoque suficiente
          const currentStock = bookResponse.body.current_stock;
          if (currentStock === 0) {
              throw new Error(`Livro com ID ${orderData.bookId} está fora de estoque.`);
          }

          cy.request({
              method: 'POST',
              url: 'https://simple-books-api.glitch.me/orders/',
              headers: {
                  Authorization: `Bearer ${clientCredentials.accessToken}`,
              },
              body: orderData,
          }).then((response) => {
              expect(response.status).to.eq(201);
          });
      });
  });
});