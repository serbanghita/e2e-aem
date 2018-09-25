
export function waitForElementAnimationFinished(selector) {
    // @todo Externalize this. Animation finished should be used for both hide/show events.
    browser.waitForVisible(selector);

    // Wait until animation is finished
    let previousLocation = {};
    browser.waitUntil(() => {
        let currentLocation = browser.getLocation(selector);
        let hasStopped = previousLocation.x === currentLocation.x && previousLocation.y === currentLocation.y;

        previousLocation = currentLocation;

        return hasStopped;
    }, 3000);
}

export function hasClass(cssSelector, className) {
    let classes = "";
    if (typeof cssSelector === "string") {
        classes = browser.getAttribute(cssSelector, "class");
    } else {
        /**
         * @var cssSelector {browser.element}
         */
        classes = cssSelector.getAttribute("class");
    }

    let arr = classes.split(" ");
    return arr.indexOf(className) !== -1;
}