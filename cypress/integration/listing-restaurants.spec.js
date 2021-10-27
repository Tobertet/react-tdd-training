describe('Listing Restaurants', () => {
  it('shows restaurnts from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/l452YbbMCZ2X31Jlj4vJJ1KVfHLu4e51/restaurants',
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
