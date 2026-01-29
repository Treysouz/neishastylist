import { Page } from "@playwright/test";

// Helper function to mock Hygraph API calls
export async function mockHygraphRoutes(page: Page) {
  await page.route("**hygraph**/content/**", async (route) => {
    await route.fulfill({ status: 200 });
  });

  await page.route("**graphassets**/**", async (route) => {
    await route.fulfill({ status: 200 });
  });
}
