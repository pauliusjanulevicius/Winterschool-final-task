import { Page } from '../page-objects/page.js';
import { browser } from '@wdio/globals';

class SearchPage extends Page {
    get SearchResults() { return $(`//span[@class='lighter']`); }

}

export default new SearchPage();