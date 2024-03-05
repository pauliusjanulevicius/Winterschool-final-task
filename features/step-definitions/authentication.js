import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import Page from '../page-objects/page.js';

// REVIEW: This shouldn't be "When"
When("I've been asked to create an account", async function () {
    // REVIEW: This doesn't really validate anything specific to creating an account.
    // The "li[class='step_current second'] span" could also be something else
    await expect(Page.CurrentStepSignIn).toBeDisplayed();
})

