import { expect } from "chai";
import LoginPage from "../../lib/page/LoginPage";
import StartPage from "../../lib/page/StartPage";
import config from "../../lib/config";


describe("Login", () => {

    it("should successful load the dashboard after login", () => {
        let loginPage = new LoginPage();

        loginPage.open();
        loginPage.login();

        let page = new StartPage();
        let userProp = page.openUserProperties();

        expect(userProp.getUsername(), config.users.default.username);
    });

});