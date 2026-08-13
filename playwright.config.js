const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 60000,

    expect: {
        timeout: 10000
    },

    fullyParallel: false,

    //workers: process.env.CI ? 1 : undefined,

    retries: 1,

    reporter: [
        ['list'],
        ['html']
    ],

    projects: [
        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome'],

                headless: !!process.env.CI,

                viewport: {
                    width: 1600,
                    height: 900
                },

                launchOptions: {
                    args: [
                        '--no-sandbox',
                        '--disable-setuid-sandbox',
                        '--disable-dev-shm-usage',
                        '--disable-gpu',
                        '--disable-extensions'

                        // ...(process.env.CI
                        //     ? []
                        //     : ['--start-maximized'])
                    ]
                },

                ignoreHTTPSErrors: true,

                screenshot: 'only-on-failure',

                trace: 'on',

                video: 'retain-on-failure'
            }
        }
    ]
});