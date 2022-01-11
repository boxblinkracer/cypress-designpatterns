import LoginAction from "../../../support/actions/storefront/account/LoginAction";
import RegisterAction from "../../../support/actions/storefront/account/RegisterAction";
import Session from "../../../support/actions/utils/Session";

const session = new Session();

const register = new RegisterAction();
const login = new LoginAction();
// these are just placeholders to demonstrate the approach
const menu = null;
const listing = null;
const pdp = null;
const checkout = null;


it('Full Checkout: Paid in advance', () => {

    cy.visit('/account');
    register.doRegister("cypress@germany.de", "DE123DE123");

    session.resetSession();

    cy.visit('/account');
    login.doLogin('cypress@germany.de', 'DE123DE123');

    menu.openFirstCategory();
    listing.clickOnFirstProduct();
    pdp.addToCart();

    checkout.openCart();
    checkout.switchPaymentMethod('Paid in advance');
    checkout.placeOrder();

    // -----------------------------------------------------------------------------------

    cy.url().should('include', '/checkout/finish');
    cy.contains('Thank you for your order');

})
