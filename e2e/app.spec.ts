import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test('smoke test', async ({ page }) => {
  await expect(page.getByText(/Dennis Cope/)).toBeVisible()
});

