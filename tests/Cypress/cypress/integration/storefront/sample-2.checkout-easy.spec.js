import LoginPage from "../../support/pageobjects/LoginPage";

it('Full Checkout: Paid in advance', () => {

    cy.viewport(1920, 1080);


    // -----------------------------------------------------------------------------------
    // REGISTER

    cy.visit('/account');

    cy.get('#personalSalutation').select('Mr.');
    cy.get('#personalFirstName').clear().type('Christian');
    cy.get('#personalLastName').clear().type('Dangl');
    cy.get('#personalMail').clear().type("scd@localhost.de");
    cy.get('#personalPassword').clear().type("SCD123SCD123");
    cy.get('#billingAddressAddressStreet').clear().type('SCD');
    cy.get('#billingAddressAddressZipcode').clear().type('SCD');
    cy.get('#billingAddressAddressCity').clear().type('SCD');
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

    cy.get('#loginMail').clear().type('scd@localhost.de');
    cy.get('#loginPassword').clear().type('SCD123SCD123');
    cy.get('.login-submit > .btn').click();

    // -----------------------------------------------------------------------------------
    // PRODUCT

    cy.get('.home-link > .main-navigation-link-text').click();
    cy.get(':nth-child(1) > .card > .card-body > .product-info > .product-name').click();

    cy.get('.col-4 > .custom-select').select("2");
    cy.get('.buy-widget-container > .col-8 > .btn').click();


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