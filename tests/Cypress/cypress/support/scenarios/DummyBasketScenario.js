import LoginAction from "../actions/storefront/account/LoginAction";

const loginAction = new LoginAction();


export default class DummyBasketScenario {

    /**
     *
     * @param quantity
     */
    constructor(quantity) {
        this.quantity = quantity;
    }

    /**
     *
     */
    execute() {

        // ATTENTION
        // this could usually include only your actions next
        // to each other.
        // the code here is just to have it working without many
        // actions added in this simple demo project.



        const user_email = "dev@localhost.de";
        const user_pwd = "DE123DE123";

        cy.visit('/account');

        cy.get('#personalSalutation').select('Mr.');
        cy.get('#personalFirstName').clear().type('Christian');
        cy.get('#personalLastName').clear().type('Dangl');
        cy.get('#personalMail').clear().type(user_email);
        cy.get('#personalPassword').clear().type(user_pwd);
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
        loginAction.doLogin('cypress@germany.de', 'DE123DE123');


        // -----------------------------------------------------------------------------------
        // PRODUCT

        cy.get('[href="http://localhost/Clothing/"] > .main-navigation-link-text > span').click();
        cy.get(':nth-child(1) > .card > .card-body > .product-info > .product-name').click();

        cy.get('.col-4 > .custom-select').select(this.quantity);
        cy.get('.buy-widget-container > .col-8 > .btn').click();

    }

}
