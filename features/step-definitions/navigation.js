import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given("I am on the home page", async function (){
    await browser.navigateTo(`http://www.automationpractice.pl/`);
});
