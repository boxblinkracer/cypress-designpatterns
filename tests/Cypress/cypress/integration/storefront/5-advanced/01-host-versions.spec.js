import Shopware from "../../../support/services/Shopware";

const versionChecker = new Shopware();


before(function () {
    cy.viewport(1920, 1080);
})


it('Full Checkout: Register', () => {

    cy.visit('/account');

    if (versionChecker.isVersionGreater('6.4')) {
        cy.get('#personalSalutation').select('Mr.');
    } else {
        cy.get('#personalSalutationOld').select('Mr.');
    }

    cy.get('#personalFirstName').clear().type('Mollie');
    cy.get('#personalLastName').clear().type('Mollie');
    cy.get('#personalMail').clear().type("scd@localhost.de");
    cy.get('#personalPassword').clear().type("SCD123SCD123");
    cy.get('#billingAddressAddressStreet').clear().type('Mollie');
    cy.get('#billingAddressAddressZipcode').clear().type('Mollie');
    cy.get('#billingAddressAddressCity').clear().type('Mollie');
    cy.get('#billingAddressAddressCountry').select('Germany');
    cy.get('.register-submit > .btn').click();

})