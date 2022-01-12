
it('Sample Test: Login', () => {

    // -----------------------------------------------------------------------------------
    // REGISTER

    cy.visit('/account');

    cy.get('#personalSalutation').select('Mr.');
    cy.get('#personalFirstName').clear().type('Christian');
    cy.get('#personalLastName').clear().type('Dangl');
    cy.get('#personalMail').clear().type("cypress@germany.de");
    cy.get('#personalPassword').clear().type("DE123DE123");
    cy.get('#billingAddressAddressStreet').clear().type('Cypress');
    cy.get('#billingAddressAddressZipcode').clear().type('DE');
    cy.get('#billingAddressAddressCity').clear().type('Germany Town');
    cy.get('#billingAddressAddressCountry').select('Germany');
    cy.get('.register-submit > .btn').click();

    // -----------------------------------------------------------------------------------
    // CLEAR SESSION

    cy.clearCookies();
    cy.visit('/', {
        onBeforeLoad: (win) => {
            win.sessionStorage.clear()
        }
    });

    // -----------------------------------------------------------------------------------
    // LOGIN

    cy.visit('/account');

    cy.get('#loginMail').clear().type('cypress@germany.de');
    cy.get('#loginPassword').clear().type('DE123DE123');
    cy.get('.login-submit > .btn').click();

})