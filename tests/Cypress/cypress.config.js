const {defineConfig} = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    retries: {
        "runMode": 3,
        "openMode": 0
    },
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    video: false,
    videoCompression: 50,
    "viewportWidth": 1000,
    "viewportHeight": 660,
    e2e: {
        defaultCommandTimeout: 10000,
        experimentalSessionAndOrigin: true,
        testIsolation: true,
        experimentalWebKitSupport: true,
        supportFile: './cypress/support/index.js',
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
    },
})
