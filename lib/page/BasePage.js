import config from "../config";

export default class BasePage {

    constructor(path) {
        this.path = path;
    }

    getPath() {
        return this.path;
    }

    getUrl() {
        return `${config.instance.getUrl()}/${this.path}`;
    }

    open(path) {
        if (path) {
            this.path = path;
        }

        browser.url(this.getUrl());

        return this;
    }

    openInNewWindow(path) {
        if (path) {
            this.path = path;
        }

        browser.newWindow(this.getUrl());

        return this;
    }

    refresh() {
        browser.url(this.getUrl());
    }

    isOpen() {
        return browser.getUrl().indexOf(this.path) !== -1;
    }
}