it.only('Sample Test', () => {

    cy.visit('/');

    cy.get('#accountWidget > .icon > svg').click();
    cy.get('.account-menu-login > .btn').click();

    cy.get('#personalFirstName').clear().type('Christian');
})