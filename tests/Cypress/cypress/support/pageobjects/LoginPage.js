export default class LoginPage {

    getEmail() {
        return cy.get('#loginMail');
    }

    getPassword() {
        return cy.get('#loginPassword');

    }

}