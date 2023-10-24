import DummyBasketScenario from "../../../support/scenarios/DummyBasketScenario";
import Shopware from "Services/Shopware";


const scenarioBasket = new DummyBasketScenario(5);

const shopware = new Shopware();

it('Full Checkout: Paid in advance', () => {

    scenarioBasket.execute();

    // -----------------------------------------------------------------------------------
    // PRODUCT

    cy.get('.home-link > .main-navigation-link-text').click();
    cy.get(':nth-child(1) > .card > .card-body > .product-info > .product-name').click();
    
    if (shopware.isVersionGreaterEqual('6.5')) {
        cy.get('.btn-plus').click();
        cy.get('.btn-buy').first().click();
    } else {
        cy.get('.col-4 > .custom-select').select("1");
        cy.get('.buy-widget-container > .col-8 > .btn');
    }

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
