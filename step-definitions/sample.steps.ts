import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I open the example page', async function () {
  await this.page.goto('https://example.com'); // Accessing page from the shared context
});

Then('I should see {string} in the page title', async function (expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toEqual(expectedTitle);
});
