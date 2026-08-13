const { test, expect } = require('@playwright/test');

const HomePage =
    require('../../pages/HomePage');

const CategoryPage =
    require('../../pages/CategoryPage');

const SearchResultPage =
    require('../../pages/SearchResultPage');

const ScreenshotUtil =
    require('../../utils/ScreenshotUtil');



test.describe('eBay UI Automation Assessment', () => {


    test('Verify Home Page, Category Navigation and Product Search',
        async ({ page }) => {

        
        const homePage =
            new HomePage(page);

        const categoryPage =
            new CategoryPage(page);


        const searchResultPage =
            new SearchResultPage(page);



        /*
        =====================================================
        1. Home Page Verification
        =====================================================
        */


        await test.step(
            'Verify eBay Home Page Navigation Elements',
            async () => {


                await homePage.navigate();
                


                await homePage.verifyHomePageLoaded();


                await expect(
                    page.locator(homePage.header)
                ).toBeVisible();



                await ScreenshotUtil.capture(
                    page,
                    '01-home-page-verification'
                );


            });



        /*
        =====================================================
        2. Category Navigation
        =====================================================
        */


        await test.step(
            'Navigate to Electronics Category',
            async () => {


                await homePage.openShopByCategory();


                await categoryPage.navigateToElectronics();


                await categoryPage.verifyCategoryLoaded();

                await expect(page.getByRole('button',{name:'Search'})).toBeVisible(); 

                await ScreenshotUtil.capture(
                    page,
                    '02-electronics-category'
                );


            });



        /*
        =====================================================
        3. Product Search
        =====================================================
        */


        await test.step(
            'Search Product and Verify Results',
            async () => {


                await homePage.searchProduct(
                    'Laptop'
                );


                await searchResultPage
                    .verifyResultsDisplayed();



                await searchResultPage
                    .verifySearchKeyword(
                        'Laptop'
                    );



                await ScreenshotUtil.capture(
                    page,
                    '03-laptop-search-results'
                );


            });



    });


});