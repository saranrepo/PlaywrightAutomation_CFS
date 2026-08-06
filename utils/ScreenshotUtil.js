const Constants = require('./Constants');


class ScreenshotUtil {


    static async capture(page,fileName){


        await page.screenshot({

            path:
            `${Constants.SCREENSHOT_PATH}${fileName}.png`,

            fullPage:true

        });


    }


}


module.exports = ScreenshotUtil;