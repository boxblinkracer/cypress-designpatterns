export default class LoginPage {

    /**
     *
     * @returns {*}
     */
    getEmail() {
        return cy.get('#loginMail');
    }

    /**
     *
     * @returns {*}
     */
    getPassword() {
        return cy.get('#loginPassword');
    }

    /**
     *
     * @param email
     * @param password
     */
    doLogin(email, password) {
        this.getEmail().clear().type(email);
        this.getPassword().clear().type(password);
        cy.get('.login-submit > .btn').click();
    }
}
