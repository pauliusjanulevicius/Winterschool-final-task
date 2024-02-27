import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";

When("I've been asked to create an account", async function() {
    await expect($(`li[class='step_current second'] span`)).toBeDisplayed();
    // await browser.debug()
})

