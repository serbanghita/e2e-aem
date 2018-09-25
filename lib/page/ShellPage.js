import BasePage from "./BasePage";
import OnboardingComponent from "../component/OnboardingComponent";
import ShellHeaderUserIcon from "../component/ShellHeaderUserIcon";

export default class ShellPage extends BasePage {

    open(path) {
        super.open(path);
        this.waitForContent();
        this.closeOnboarding();
    }

    refresh() {
        super.refresh();
        this.waitForContent();
        this.closeOnboarding();
    }

    closeOnboarding() {
        let sitesOnboarding = new OnboardingComponent();
        if (sitesOnboarding.isOpen()) {
            sitesOnboarding.close();
        }
    }

    waitForContent() {
        browser.waitForVisible("coral-shell-content");
    }

    openUserProperties() {
        let userIcon = new ShellHeaderUserIcon();
        let userProp = userIcon.open();
        return userProp;
    }

}