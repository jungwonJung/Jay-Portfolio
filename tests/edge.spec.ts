import { test, expect } from '@playwright/test';

// ── EDGE CASES ─────────────────────────────────────────────────────────────
// BUG: App.tsx handleScrollDown() uses window.location.href='/' instead of
// React Router navigate('/') when pathname !== '/'.
// This means deep-linking to any invalid route shows LandingHero,
// then CTA click redirects to root — error pages are never visible.

test('PORT-EDGE-001 | Invalid project deep-link: no blank/crash, but shows LandingHero (known bug)', async ({ page }) => {
  await page.goto('/project/doesnotexist');
  await page.waitForTimeout(300);

  // App should not crash or go blank
  const html = await page.content();
  expect(html.length).toBeGreaterThan(300);

  // BUG: clicking CTA redirects to root via window.location.href instead of showing error page
  await page.locator('button').first().click();
  await page.waitForTimeout(500);

  // Verify redirect happened (confirms the bug)
  const url = page.url();
  expect(url).toMatch(/localhost:3000\/?$/);

  // ⚠️ Expected: "Project not found" page
  // ⚠️ Actual: Redirected to root — "Project not found" is unreachable
  // Root cause: handleScrollDown() in App.tsx should use navigate('/') not window.location.href='/'
});

test('PORT-EDGE-002 | Invalid career deep-link: no blank/crash, but shows LandingHero (known bug)', async ({ page }) => {
  await page.goto('/career/fakeid');
  await page.waitForTimeout(300);

  const html = await page.content();
  expect(html.length).toBeGreaterThan(300);

  await page.locator('button').first().click();
  await page.waitForTimeout(500);

  const url = page.url();
  expect(url).toMatch(/localhost:3000\/?$/);

  // ⚠️ Expected: "Career not found" page
  // ⚠️ Actual: Redirected to root — same bug as EDGE-001
});

test('PORT-EDGE-003 | Valid project deep-link: SPA server serves correct HTML (no 404)', async ({ page }) => {
  await page.goto('/project/challengers');
  await page.waitForTimeout(500);

  const html = await page.content();
  expect(html.length).toBeGreaterThan(300);
  expect(html.toLowerCase()).not.toContain('cannot get');

  // Note: App.tsx showLanding=true on every fresh mount, so LandingHero
  // appears first — this is by design (dismiss to reach ProjectDetail)
});
