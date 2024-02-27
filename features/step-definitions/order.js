import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import ProductsPage from '../page-objects/products.page.js';
import ProductPage from '../page-objects/product.page.js';
import CartPage from '../page-objects/cart.page.js';

When('I open first item', async function () {
    await ProductsPage.womenCategory.click();
    await ProductsPage.firstItem.click();
    await ProductPage.colorBlue.click();
});

When('I Add it to the cart', async function () {
    await ProductPage.AddToCart.click();
    await browser.pause(5000);
});

When('I press {string}', async function (text) {
    await ProductPage.SelectToContinue(text).click();
});

When('I press "Proceed to checkout" one more time', async function () {
    await CartPage.ProceedToCheckoutButton.click();
});
