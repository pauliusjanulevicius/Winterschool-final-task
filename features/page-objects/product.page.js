import { Page } from '../page-objects/page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get colorBlue() { return $('#color_14'); }
    get AddToCart() { return $("//span[text()='Add to cart']") }
    SelectToContinue(text) { return $(`a[title='${text}'] span`) }
}

export default new ProductPage();