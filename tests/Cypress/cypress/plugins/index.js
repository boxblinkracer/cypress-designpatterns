const webpack = require('@cypress/webpack-preprocessor')
const TestRailReporter = require('cypress-testrail');

module.exports = (on, config) => {

    const customCommand = 'Shopware: ' + config.env.SHOPWARE;
    new TestRailReporter(on, config, customCommand).register();

    on('file:preprocessor', webpack({
        webpackOptions: require('../../webpack.config'),
        watchOptions: {},
    }))

    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
            launchOptions.args.push('--disable-features=SameSiteByDefaultCookies')
            return launchOptions
        }
    })

    return config
}
