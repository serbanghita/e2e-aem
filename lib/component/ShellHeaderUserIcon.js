import BaseComponent from "./BaseComponent";
import UserPropertiesComponent from "./UserPropertiesComponent";
import {hasClass, waitForElementAnimationFinished} from "../helper";

export default class ShellHeaderUserIcon extends BaseComponent {

    constructor() {
        super(`coral-shell-menubar-item[icon="userCircleColor"]`);
    }

    /**
     * @returns {UserPropertiesComponent}
     */
    open() {
        this.element.click();
        browser.waitForVisible(`coral-shell-menu`);
        browser.waitUntil(() => {
            return hasClass(`coral-shell-menu`, "is-open");
        });
        waitForElementAnimationFinished(`coral-shell-menu`);

        return new UserPropertiesComponent();
    }

}