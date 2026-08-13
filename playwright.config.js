import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
 
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

        headless: true,

        viewport: {

            width: 1600,

            height: 900

        },

        ignoreHTTPSErrors: true,

        screenshot: "only-on-failure",

        trace: "retain-on-failure",

        video: "retain-on-failure",

        baseURL: "https://petstore.swagger.io/v2"

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
