import LoginAction from "Actions/storefront/account/LoginAction";
import Session from "Actions/utils/Session";
import RegisterAction from "Actions/storefront/account/RegisterAction";


const login = new LoginAction();
const session = new Session();
const register = new RegisterAction();


export default class DummyUserScenario {

    /**
     *
     * @param user_email
     */
    constructor(user_email) {
        this.user_email = user_email;
    }

    /**
     *
     */
    execute() {

        const user_pwd = "SCD123SCD123";

        cy.visit('/');

        register.doRegister(this.user_email, user_pwd);

        session.resetBrowserSession();

        login.doLogin(this.user_email, user_pwd);
    }

}
