const { expect } = require('@playwright/test');

class CategoryPage {

    constructor(page) {
        this.page = page;

        this.electronicsLink = 'text=Electronics';

        this.pageHeading = 'h1';
    }

    async navigateToElectronics() {
        await this.page.click(this.electronicsLink);
    }

    async verifyCategoryLoaded() { 
        await expect(this.page).toHaveURL(/electronics/i);
    }

    async takeScreenshot(path) {

        await this.page.screenshot({

            path,

            fullPage: true

        });

    }

}

module.exports = CategoryPage;