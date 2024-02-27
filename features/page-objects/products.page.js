import { Page } from '../page-objects/page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get womenCategory() { return $("//a[@title='Women']"); }
    get firstItem() { return $("//img[@title='Faded Short Sleeve T-shirts']"); }
}

export default new ProductsPage();