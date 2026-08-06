const { expect } = require('@playwright/test');

class SearchResultPage {

    constructor(page) {

        this.page = page;

        this.resultList = '.srp-results';

        this.searchText = '.srp-controls__count-heading';

    }

    async verifyResultsDisplayed() {

        await expect(this.page.locator(this.resultList))
            .toBeVisible();

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