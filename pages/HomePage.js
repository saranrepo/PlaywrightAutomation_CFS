class HomePage {

    constructor(page) {
        this.page = page;

        // Search
        this.searchBox = '#gh-ac';
        this.searchButton = '#gh-search-btn';

        // Navigation
        //this.shopByCategoryButton = '#gh-shop-a';
        this.shopByCategoryButton = '.gh-categories__title';

        // Logo
        this.logo = '#gh-logo';

        // Header
        this.header = '#gh';
    }

    async navigate() {
        await this.page.goto('https://www.ebay.com');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyHomePageLoaded() {
        await this.page.waitForSelector(this.logo);
        await this.page.waitForSelector(this.searchBox);
        await this.page.waitForSelector(this.searchButton);
    }

    async openShopByCategory() {
        await this.page.click(this.shopByCategoryButton);
    }

    async searchProduct(productName) {
        await this.page.fill(this.searchBox, productName);
        await this.page.click(this.searchButton);
    }

    async takeScreenshot(path) {
        await this.page.screenshot({
            path,
            fullPage: true
        });
    }
}

module.exports = HomePage;