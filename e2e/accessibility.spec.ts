import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mockHygraphRoutes } from "./global-setup";

test.describe("Accessibility", () => {
  const testRoutes = ["/"];

  testRoutes.forEach((route) => {
    test.describe(`"${route}" Route`, () => {
      test("should not have any automatically detectable accessibility issues", async ({
        page,
      }) => {
        // Mock Hygraph API calls
        await mockHygraphRoutes(page);
        //Go to route
        await page.goto(route, { waitUntil: "networkidle" });

        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
  });
});
