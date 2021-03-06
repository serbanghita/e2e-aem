# WebdriverIO and Selenium Standalone


## Requirements

* Node.js and NPM
* Java 1.8
* Optional: Docker (for running Selenium with Docker Service)
* Running AEM instance (default port 4502)
* Tests are written in ES6

## Install and usage

* `git clone https://github.com/serbanghita/e2e-aem.git`
* `cd e2e-aem`
* `npm install`
* `npm run test` (uses Docker)

## Selenium

**Starting Selenium manually with `selenium-standalone`.**

* `./node_modules/.bin/selenium-standalone install && ./node_modules/.bin/selenium-standalone start`
    * OR `npm run start-selenium`
* Run all tests: `./node_modules/.bin/wdio`
* Run specific test: `./node_modules/.bin/wdio --spec GithubTest.js`
* Run specific test: `./node_modules/.bin/wdio --spec AEMLoginTest.js`

**Starting Selenium automatically.**

* `./node_modules/.bin/wdio`

## Create new project from scratch.

* `npm init`
    * Configure your NPM project.
* `npm install --save-dev webdriverio`
* `npm install --save-dev selenium-standalone`
* `npm install --save-dev chai mocha`
* `./node_modules/.bin/wdio config`
    * Configure WDIO.
    * Add spec reporter `npm install --save-dev wdio-spec-reporter`
* `npm install --save-dev babel-register babel-preset-es2015`
    * Configure `.babelrc` and `wdio.conf.js` to be able to use latest ES6 syntax.
* Create [`tests/specs`](./tests/spec) folder.
* Create [`lib`](./lib) folder where you will put your PageObjects.
* Optional Docker: `npm install wdio-docker-service --save-dev`
    * Add [Docker service](https://github.com/stsvilik/wdio-docker-service) configuration to `wdio.config.js`



