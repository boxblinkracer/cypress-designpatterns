before(function () {
    cy.viewport(1920, 1080);
})


it('Full Checkout: Paid in advance', () => {

    // -----------------------------------------------------------------------------------
    // REGISTER
    registerAction.register('scd@localhost.de', 'SCD123SCD123');

    // -----------------------------------------------------------------------------------
    // CLEAR SESSION
    sessionAction.clearSession();

    // -----------------------------------------------------------------------------------
    // LOGIN
    loginAction.login('scd@localhost.de', 'SCD123SCD123');


    // -----------------------------------------------------------------------------------
    // PRODUCT

    mainMenuAction.clickHome();

    listingAction.selectFirstProduct();

    pdpAction.addToCart(2);

    // -----------------------------------------------------------------------------------
    // CHECKOUT

    checkoutAction.goToCheckout();

    checkoutAction.selectPayment('Paid in advance');

    checkoutAction.placeOrder();

    // -----------------------------------------------------------------------------------

    cy.url().should('include', '/checkout/finish');
    cy.contains('Thank you for your order');

})
