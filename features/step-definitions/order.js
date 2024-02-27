import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import ProductsPage from '../page-objects/products.page.js';
import ProductPage from '../page-objects/product.page.js';
import CartPage from '../page-objects/cart.page.js';

When ('I open first item', async function(){
    // (await $("//a[@title='Women']")).click();
    // (await $("//img[@title='Faded Short Sleeve T-shirts']")).click();
    // (await $('#color_14')).click();
    await ProductsPage.womenCategory.click();
    await ProductsPage.firstItem.click();
    await ProductPage.colorBlue.click();
});
When ('I Add it to the cart', async function(){
    // (await $("//span[text()='Add to cart']")).click();
    await ProductPage.AddToCart.click();
    await browser.pause(5000);
});
When ('I press {string}', async function(text){
    // (await $(`a[title='${text}'] span`)).click();
    await ProductPage.SelectToContinue(text).click();
});
When ('I press "Proceed to checkout" one more time', async function(){
    // (await $(`a[class='button btn btn-default standard-checkout button-medium']`)).click();
    await CartPage.ProceedToCheckoutButton.click();
});
