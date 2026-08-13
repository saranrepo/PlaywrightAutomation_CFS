const Constants = require('./Constants');
const fs = require('fs');


class ScreenshotUtil {

    static async capture(page, fileName) {

        // ensure directory exists
        try {
            fs.mkdirSync(Constants.SCREENSHOT_PATH, { recursive: true });
        } catch (e) {
            // ignore
        }

        const options = {
            path: `${Constants.SCREENSHOT_PATH}${fileName}.png`
        };

        // In CI avoid fullPage screenshots to reduce memory usage
        if (!process.env.CI) {
            options.fullPage = true;
        }

        await page.screenshot(options);

    }


}

module.exports = ScreenshotUtil;
