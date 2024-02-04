exports.CasinoGuidePage = class CasinoGuidePage {
  constructor(page) {
    this.page = page;
    this.websiteIcon = page
      .locator('.bottom_meta a[href="https://www.casinoguide.se"]')
      .last();
  }

  async navigateToWebsite() {
    await this.websiteIcon.waitFor({ state: "visible" });
    await this.websiteIcon.click();
    await this.page.waitForTimeout(1000);
  }
};
