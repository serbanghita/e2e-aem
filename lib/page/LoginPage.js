import BasePage from "./BasePage";
import config from "../config";

export default class LoginPage extends BasePage {

    constructor() {
        super(`libs/granite/core/content/login.html`);
    }

    static isLoggedIn() {
        return browser.getCookie("login-token") !== null;
    }

    get usernameField() {
        return browser.element("#username");
    }

    get passwordField() {
        return browser.element("#password");
    }

    get submitButton() {
        return browser.element("#submit-button");
    }

    login() {
        let userData = config.users.default;
        return this.loginAs(userData.username, userData.password);
    }

    loginAs(username, password) {
        if (!LoginPage.isLoggedIn()) {
            this.open();
            this.usernameField.setValue(username);
            this.passwordField.setValue(password);
            this.submitButton.click();

            browser.waitForVisible("coral-panelstack");
        }
        return this;
    }
}