exports.HeaderPage = class HeaderPage {
  constructor(page) {
    this.page = page;
    this.searchButton = page.locator("#search-btn").getByRole("link");
    this.searchTextbox = page.getByRole("textbox", { name: "s" });
  }

  async clickSearchIcon() {
    await this.searchButton.waitFor({ state: "visible" });
    await this.searchButton.click();
  }

  async searchForItem(text) {
    await this.searchTextbox.fill(text);
    await this.searchTextbox.press("Enter");
  }
};
