import DummyBasketScenario from "../../../support/scenarios/DummyBasketScenario";

const scenarioDummyBasket = new DummyBasketScenario(3);


it('Full Checkout: Paid in advance', () => {

    scenarioDummyBasket.execute();

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
