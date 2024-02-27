import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import CartPage from '../page-objects/cart.page.js';

When(`There is one item in cart`, async function(){
    // const cart = (await $(`a[title='View my shopping cart'] span[class='ajax_cart_quantity']`));
    // await expect(cart).toHaveText(expect.stringContaining("1"));
    await expect(CartPage.ItemsInCartCount).toHaveText(expect.stringContaining("1"));
})
When(`I remove it from the cart`, async function(){
    // (await $(`.icon-trash`)).click();
    await CartPage.RemoveItem.click();
})
Then(`I see the cart is empty`, async function(){
    // const cart = (await $(`.ajax_cart_no_product`));
    // const cartMessage = (await $(`.alert.alert-warning`));
    // await expect(cart).toHaveText(expect.stringContaining("(empty)"));
    // await expect(cartMessage).toHaveText(expect.stringContaining("Your shopping cart is empty."));
    await expect(CartPage.Cart).toHaveText(expect.stringContaining("(empty)"));
    await expect(CartPage.CartMessage).toHaveText(expect.stringContaining("Your shopping cart is empty."));
})
