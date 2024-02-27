import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given("I am on the home page", async function (){
    await browser.navigateTo(`http://www.automationpractice.pl/`);
});
When("I enter {string} in the search box", async function(text){
    (await $(`#search_query_top`)).setValue(`${text}`);
})
When("I press search button", async function(){
    (await $(`button[name='submit_search']`)).click();
})
Then(`I see results only containing {string}`, async function(text){
    const searchResults = (await $(`//span[@class='lighter']`));
    await expect(searchResults).toHaveText(expect.stringContaining(text.toUpperCase()));
})
