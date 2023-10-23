export default class LoginPage {

    /**
     *
     * @returns {*}
     */
    getEmailField() {
        return cy.get('#loginMail');
    }

    /**
     *
     * @returns {*}
     */
    getPassword() {
        return cy.get('#loginPassword');
    }

    /*

     */
    doLogin(email, password) {

        this.getEmailField().clear().type(email);
        this.getPassword().clear().type(password);

        cy.get('.login-submit > .btn').click();
    }

}
