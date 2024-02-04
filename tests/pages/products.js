exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.casinoGuideHeader = page.getByRole("heading", {
      name: "Casinoguide",
      exact: true,
    });
  }

  async navigateToCasinoGuide() {
    await this.casinoGuideHeader.waitFor({ state: "visible" });
    await this.casinoGuideHeader.click();
    await this.page.waitForTimeout(1000);
  }
};
