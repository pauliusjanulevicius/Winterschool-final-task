import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import Page from '../page-objects/page.js';
import SearchPage from '../page-objects/search.page.js';

Given("I am on the home page", async function () {
    await Page.open();
});

When("I enter {string} in the search box", async function (text) {
    await Page.SearchBox.setValue(`${text}`);
})

When("I press search button", async function () {
    await Page.SearchButton.click()
})

Then(`I see results only containing {string}`, async function (text) {
    await expect(SearchPage.SearchResults).toHaveText(expect.stringContaining(text.toUpperCase()));
})
