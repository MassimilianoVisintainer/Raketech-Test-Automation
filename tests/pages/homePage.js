import { HeaderPage } from "../base/header";

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.Header = new HeaderPage(page);
    this.productLink = page
      .getByRole("heading", { name: "Products Page", exact: true })
      .getByRole("link");
  }

  async gotoHome() {
    await this.page.goto("https://raketech.com/", {
      waitUntil: "domcontentloaded",
    });
  }

  async searchForPorducts() {
    await this.Header.clickSearchIcon();
    await this.Header.searchForItem("Products Page");
    await this.page.waitForTimeout(1000);
    await this.productLink.waitFor({ state: "visible" });
    await this.productLink.click();
    await this.page.waitForTimeout(1000);
  }
};
