import { Page } from '../page-objects/page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get ProceedToCheckoutButton() { return $(`a[class='button btn btn-default standard-checkout button-medium']`); }
    get ItemsInCartCount() { return $(`a[title='View my shopping cart'] span[class='ajax_cart_quantity']`); }
    get RemoveItem() { return $(`.icon-trash`); }
    get Cart() { return $(`.ajax_cart_no_product`); }
    get CartMessage() { return $(`.alert.alert-warning`); }
}

export default new CartPage();