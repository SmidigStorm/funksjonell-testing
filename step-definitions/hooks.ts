import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';

let browser: Browser;

// Launch the browser before all scenarios
BeforeAll(async function () {
  browser = await chromium.launch({ headless: false }); // Launch browser in non-headless mode
});

// Close the browser after all scenarios
AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

// Create a new context and page before each scenario
Before(async function () {
  const context = await browser.newContext();
  this.page = await context.newPage(); // Save the page to the `this` context for easy access in steps
});

// Dispose of the page and context after each scenario
After(async function () {
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
});
