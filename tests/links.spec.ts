import { test, expect } from '@playwright/test';
import { dismissLanding, navToProject, mockWindowOpen, getLastOpenedUrl, httpGet } from './helpers';

// ── LINKS ──────────────────────────────────────────────────────────────────

test('PORT-LINK-001 | Challengers App Store button opens correct URL', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Challengers');
  await mockWindowOpen(page);

  await page.getByRole('button', { name: /view on app store/i }).click();
  await page.waitForTimeout(300);

  const url = await getLastOpenedUrl(page);
  expect(url).toContain('apps.apple.com');
  expect(url).toContain('challengers');
});

test('PORT-LINK-002 | PARKinPL App Store button opens correct URL', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'PARKinPL');
  await mockWindowOpen(page);

  await page.getByRole('button', { name: /view on app store/i }).click();
  await page.waitForTimeout(300);

  const url = await getLastOpenedUrl(page);
  expect(url).toContain('apps.apple.com');
  expect(url).toContain('parkinpl');
});

test('PORT-LINK-003 | Dev60s App Store button opens correct URL', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Dev60s');
  await mockWindowOpen(page);

  await page.getByRole('button', { name: /view on app store/i }).click();
  await page.waitForTimeout(300);

  const url = await getLastOpenedUrl(page);
  expect(url).toContain('apps.apple.com');
  expect(url).toContain('dev60s');
});

test('PORT-LINK-004 | PARKinPL GitHub button opens correct URL', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'PARKinPL');
  await mockWindowOpen(page);

  await page.getByRole('button', { name: /view on github/i }).click();
  await page.waitForTimeout(300);

  const url = await getLastOpenedUrl(page);
  expect(url).toContain('github.com');
  expect(url).toContain('PARKinPL');
});

test('PORT-LINK-005 | Dev60s GitHub button opens correct URL', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Dev60s');
  await mockWindowOpen(page);

  await page.getByRole('button', { name: /view on github/i }).click();
  await page.waitForTimeout(300);

  const url = await getLastOpenedUrl(page);
  expect(url).toContain('github.com');
  expect(url).toContain('Dev60s');
});

test('PORT-LINK-006 | LinkedIn and GitHub social links are present in CONTACT', async ({ page }) => {
  await dismissLanding(page);
  await mockWindowOpen(page);

  const body = await page.textContent('body');
  expect(body).toMatch(/LinkedIn/i);
  expect(body).toMatch(/GitHub/i);
});

test('PORT-LINK-007 | Resume PDF returns HTTP 200', async ({ page }) => {
  const status = await httpGet('http://localhost:3000/JUNGWON_JUNG_CV_2026.pdf');
  expect(status).toBe(200);
});
