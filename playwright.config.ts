import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true, // This will run the tests in a visible browser window
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

export default config;
