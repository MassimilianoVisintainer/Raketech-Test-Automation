import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/homePage";
import { ProductsPage } from "./pages/products";
import { CasinoGuidePage } from "./pages/CasinoGuide";

test("Verify Casino Guide Website Navigation trough search functionality", async ({
  page,
}) => {
  const Home = new HomePage(page);
  const Products = new ProductsPage(page);
  const CasinoGuide = new CasinoGuidePage(page);

  await Home.gotoHome();
  await Home.searchForPorducts();
  await expect(page).toHaveURL("https://raketech.com/products/");
  await Products.navigateToCasinoGuide();
  const page1Promise = page.waitForEvent("popup");
  await CasinoGuide.navigateToWebsite();
  const websiteTab = await page1Promise;
  await expect(websiteTab).toHaveURL("https://www.casinoguide.se/");
});
