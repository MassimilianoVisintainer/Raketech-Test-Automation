import { test, expect } from "@playwright/test";

test("Check R2-D2 skin color", async ({ request }) => {
  const response = await request.get("https://swapi.dev/api/people/");
  const data = await response.json();

  const r2d2 = data.results.find((character) => character.name === "R2-D2");

  expect(r2d2).toBeTruthy();

  expect(r2d2.skin_color).toContain("white");
  expect(r2d2.skin_color).toContain("blue");
});
