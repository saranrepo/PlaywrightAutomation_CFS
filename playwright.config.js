// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
 
    testDir: './tests',

    timeout: 60000,

    expect: {

        timeout: 10000

    },

    workers: 1,
    
    fullyParallel: false,

    retries: 1,

    reporter: [

        ['list'],

        ['html']

    ],

    use: {

        headless: process.env.CI ? true : false,

        launchOptions: {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-extensions'
            ]
        },

        viewport: {

            width: 1600,

            height: 900

        },

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

