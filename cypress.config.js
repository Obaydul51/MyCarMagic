const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: "cypress/e2e/*.feature",
  },
  env: {
    login_url: 'http://localhost:4000',
    products_url: '/products',
  }
});
