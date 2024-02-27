import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import CartPage from '../page-objects/cart.page.js';

When(`There is one item in cart`, async function () {
    await expect(CartPage.ItemsInCartCount).toHaveText(expect.stringContaining("1"));
})

When(`I remove it from the cart`, async function () {
    await CartPage.RemoveItem.click();
})

Then(`I see the cart is empty`, async function () {
    await expect(CartPage.Cart).toHaveText(expect.stringContaining("(empty)"));
    await expect(CartPage.CartMessage).toHaveText(expect.stringContaining("Your shopping cart is empty."));
})
