it.only('Sample Test', () => {

    cy.viewport(1920, 1080);

    cy.visit('/account');

    cy.get('#personalFirstName').clear().type('Christian');

})