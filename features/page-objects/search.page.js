import { Page } from '../page-objects/page.js';
import { browser } from '@wdio/globals';

class SearchPage extends Page {
    get SearchResultsTitle() { return $(`//span[@class='lighter']`); }
    async CheckSearchResults(text) { await $$("h5[itemprop='name'] a[title]").map((el) => expect(el).toHaveText(expect.stringContaining(text))); }
}

export default new SearchPage();