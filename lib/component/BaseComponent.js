import {waitForElementAnimationFinished} from "../helper";

export default class BaseComponent {

    constructor(cssSelector) {
        this.element = browser.element(cssSelector);
        this.cssSelector = cssSelector;
    }

    isVisible() {
        return browser.isVisible(this.cssSelector);
    }

    render() {
        browser.waitForVisible(this.cssSelector);
        waitForElementAnimationFinished(this.cssSelector);
    }

}