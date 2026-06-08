import { test, expect } from '@playwright/test';
import { dismissLanding, navToProject } from './helpers';

// ── CONTENT ────────────────────────────────────────────────────────────────

test('PORT-CONT-001 | ABOUT section displays name, role, and location', async ({ page }) => {
  await dismissLanding(page);

  const body = await page.textContent('body');
  expect(body).toContain('JungWon');
  expect(body).toMatch(/iOS|Developer/i);
  expect(body).toMatch(/Canada|Vancouver|Waterloo/i);
});

test('PORT-CONT-002 | PROJECTS section lists all 3 projects', async ({ page }) => {
  await dismissLanding(page);

  await expect(page.getByText('PARKinPL')).toBeVisible();
  await expect(page.getByText('Challengers').first()).toBeVisible();
  await expect(page.getByText('Dev60s')).toBeVisible();
});

test('PORT-CONT-003 | Challengers detail page shows correct tech stack', async ({ page }) => {
  await dismissLanding(page);
  await navToProject(page, 'Challengers');

  const body = await page.textContent('body');
  expect(body).toMatch(/SwiftUI/i);
  expect(body).toMatch(/Firebase/i);
  expect(body).toMatch(/MVVM/i);
  expect(body).toMatch(/Combine/i);
});

test('PORT-CONT-004 | All project images load without 4xx errors', async ({ page }) => {
  const failedImages: string[] = [];
  page.on('response', res => {
    if (res.request().resourceType() === 'image' && res.status() >= 400) {
      failedImages.push(`${res.status()} ${res.url()}`);
    }
  });

  await dismissLanding(page);
  for (const name of ['Challengers', 'PARKinPL', 'Dev60s']) {
    await dismissLanding(page);
    await navToProject(page, name);
    await page.goBack();
    await page.waitForTimeout(200);
  }

  expect(failedImages).toHaveLength(0);
});

test('PORT-CONT-005 | EDUCATION section shows university and degree info', async ({ page }) => {
  await dismissLanding(page);

  const body = await page.textContent('body');
  expect(body).toMatch(/Waterloo|WSB/i);
  expect(body).toMatch(/Computer Science|CS/i);
  expect(body).toMatch(/B\.Sc|Bachelor/i);
});
