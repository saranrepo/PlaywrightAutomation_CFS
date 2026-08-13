// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
 
    testDir: './tests',

    timeout: 60000,

    expect: {

        timeout: 10000

    },

    fullyParallel: false,

    retries: 1,

    reporter: [

        ['list'],

        ['html']

    ],

    use: {

        headless: false,

        launchOptions: {
            args: [
                '--start-maximized',
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-extensions'
            ]
        },

        viewport: null,

        ignoreHTTPSErrors: true,

        screenshot: "only-on-failure",

        trace: "on",

        video: "retain-on-failure"

    },

    projects: [

        {

            name: 'chromium',

            use: {

                ...devices['Desktop Chrome']

            }

        }

    ]
});

