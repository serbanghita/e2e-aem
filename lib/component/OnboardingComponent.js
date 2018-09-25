import {hasClass, waitForElementAnimationFinished} from "../helper";
import BaseComponent from "./BaseComponent";

export default class OnboardingComponent extends BaseComponent {

    constructor() {
        super("coral-overlay.granite-shell-onboarding");
    }

    /**
     * Check to see if the popover is opened and visible.
     *
     * @returns {Boolean}
     */
    isOpen() {
        return this.isExisting() && this.isVisibleWithinViewport() && hasClass(this.cssSelector, "is-open");
    }

    /**
     * Close the popover and wait for it to disappear.
     *
     * @returns {OnboardingComponent}
     */
    close() {
        browser.element(`${this.cssSelector} coral-panel[selected] button[coral-close]`).click();
        browser.waitForVisible(this.cssSelector, null, true);
        return this;
    }

    /**
     * Go to the next step.
     *
     * @returns {OnboardingComponent}
     */
    next() {
        browser.element(`${this.cssSelector} coral-panel[selected] button[coral-wizardview-next]`).click();
        waitForElementAnimationFinished("granite-shell-onboarding-popover");
        return this;
    }

}