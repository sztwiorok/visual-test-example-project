const { defineConfig } = require("cypress");

const baseUrl = process.env.CI ? "http://0.0.0.0:4000" : "http://localhost:4000";

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl,
  },
});
