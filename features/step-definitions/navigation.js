import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import Page from '../page-objects/page.js';
import SearchPage from '../page-objects/search.page.js';

Given("I am on the home page", async function (){
    await Page.open();
});
When("I enter {string} in the search box", async function(text){
    // (await $(`#search_query_top`)).setValue(`${text}`);
    await Page.SearchBox.setValue(`${text}`);
})
When("I press search button", async function(){
    // (await $(`button[name='submit_search']`)).click();
    await Page.SearchButton.click()
})
Then(`I see results only containing {string}`, async function(text){
    // const searchResults = (await $(`//span[@class='lighter']`));
    // await expect(searchResults).toHaveText(expect.stringContaining(text.toUpperCase()));
    await expect(SearchPage.SearchResults).toHaveText(expect.stringContaining(text.toUpperCase()));
})
