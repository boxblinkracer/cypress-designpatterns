const {defineConfig} = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    retries: {
        "runMode": 1,
        "openMode": 0
    },
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    video: false,
    videoCompression: 50,
    e2e: {
        defaultCommandTimeout: 10000,
        experimentalSessionAndOrigin: true,
        testIsolation: true,
        experimentalWebKitSupport: true,
        supportFile: './cypress/support/index.js',
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
    },
})
