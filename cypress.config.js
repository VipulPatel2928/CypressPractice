const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,
  pageLoadTimeout : 600000,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    "experimentalSessionAndOrigin":true,
    "chromeWebSecurity" :false,
  },
})
