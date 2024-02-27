export class Page {
    async open() {
        await browser.navigateTo(`http://www.automationpractice.pl/`);
    }
    get CurrentStepSignIn() { return $(`li[class='step_current second'] span`); }
    get SearchBox() { return $(`#search_query_top`); }
    get SearchButton() { return $(`button[name='submit_search']`); }
}

export default new Page();