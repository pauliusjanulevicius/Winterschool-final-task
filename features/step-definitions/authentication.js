import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import Page from '../page-objects/page.js';

When("I've been asked to create an account", async function () {
    await expect(Page.CurrentStepSignIn).toBeDisplayed();
})

