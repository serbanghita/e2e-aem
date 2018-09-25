import BaseComponent from "./BaseComponent";

export default class UserPropertiesComponent extends BaseComponent {

    constructor() {
        super(`coral-shell-menu[open]`);
    }

    getUsername() {
        return browser.getText(`${this.element.selector} > coral-shell-user coral-shell-user-heading`);
    }

    // signOut()

}