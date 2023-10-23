import LoginRepository from "../../../repositories/storefront/account/LoginRepository";

const repoLogin = new LoginRepository();


export default class LoginAction {

    /*

     */
    doLogin(email, password) {

        repoLogin.getEmail().clear().type(email);
        repoLogin.getPassword().clear().type(password);

        repoLogin.getSubmitButton().click();
    }

}

