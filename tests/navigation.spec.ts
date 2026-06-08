import { test, expect } from '@playwright/test';
import { dismissLanding, navToProject } from './helpers';

// ── NAVIGATION ─────────────────────────────────────────────────────────────

test('PORT-NAV-001 | Challengers project row navigates to detail page', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Challengers');

  await expect(page).toHaveURL(/\/project\/challengers/);
});

test('PORT-NAV-002 | PARKinPL project row navigates to detail page', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'PARKinPL');

  await expect(page).toHaveURL(/\/project\/parkinpl/);
});

test('PORT-NAV-003 | Dev60s project row navigates to detail page', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Dev60s');

  await expect(page).toHaveURL(/\/project\/dev60s/);
});

test('PORT-NAV-004 | Back navigation returns to IOSHome without re-showing Landing Hero', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Challengers');
  await page.goBack();
  await page.waitForTimeout(300);

  // Landing Hero should NOT reappear (skipLanding flag respected)
  await expect(page.getByText('PROJECTS')).toBeVisible();
});

test('PORT-NAV-005 | Career row navigates to career detail page', async ({ page }) => {
  await dismissLanding(page);
  await page.getByText('telus').click({ timeout: 5000 }).catch(async () => {
    await page.getByText('TELUS').first().click();
  });
  await page.waitForTimeout(500);

  await expect(page).toHaveURL(/\/career\//);
});

test('PORT-NAV-006 | Page refresh at /project/challengers does not show blank or 404', async ({ page }) => {
  await page.goto('/project/challengers');
  await page.waitForTimeout(500);

  const html = await page.content();
  expect(html.length).toBeGreaterThan(300);
  expect(html.toLowerCase()).not.toContain('cannot get');
});
