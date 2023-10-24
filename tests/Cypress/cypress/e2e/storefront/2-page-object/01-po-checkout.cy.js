import LoginPage from "../../../support/pageobjects/LoginPage";

const pageLogin = new LoginPage();

it('Full Checkout: Paid in advance', () => {

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

    pageLogin.doLogin('cypress@germany.de', 'DE123DE123');

    cy.pause();


    // -----------------------------------------------------------------------------------
    // PRODUCT

    cy.get('[href="http://localhost/Clothing/"] > .main-navigation-link-text > span').click();
    cy.get(':nth-child(1) > .card > .card-body > .product-info > .product-name').click();

    cy.get('.btn-plus').click();
    cy.get('.btn-buy').first().click();


    // -----------------------------------------------------------------------------------
    // CHECKOUT

    cy.get('.begin-checkout-btn').click();

    cy.contains('Paid in advance').click({force: true});

    cy.get('.checkout-confirm-tos-label').click('left');

    cy.get('#confirmFormSubmit').click();

    // -----------------------------------------------------------------------------------

    cy.url().should('include', '/checkout/finish');
    cy.contains('Thank you for your order');

})