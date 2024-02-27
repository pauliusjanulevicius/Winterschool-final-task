import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";

When(`There is one item in cart`, async function(){
    const cart = (await $(`a[title='View my shopping cart'] span[class='ajax_cart_quantity']`));
    await expect(cart).toHaveText(expect.stringContaining("1"));
})
When(`I remove it from the cart`, async function(){
    (await $(`a[title='View my shopping cart']`)).isSelected();
    await browser.debug()
    (await $(`.ajax_cart_block_remove_link`)).click();
})
Then(`I see the cart is empty`, async function(){

})
