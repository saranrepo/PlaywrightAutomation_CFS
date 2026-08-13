const { expect } = require('@playwright/test');

class SearchResultPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page) {

        this.page = page;

        this.resultList = '.srp-results';

        this.searchText = '.srp-controls__count-heading';

    }

    async verifyResultsDisplayed() {

        await expect(this.page.locator(this.resultList))
            .toBeVisible();
        await expect(this.page.locator(`${this.resultList}:visible`)); 
        //await expect(this.page.getByText("2026 ASUS Vivobook 16")).toBeVisible();   
        
    }

    async verifySearchKeyword(keyword) {

        await expect(this.page)
            .toHaveTitle(new RegExp(keyword, 'i'));

    }

    async takeScreenshot(path) {

        await this.page.screenshot({

            path,

            fullPage: true

        });

    }

}

module.exports = SearchResultPage;