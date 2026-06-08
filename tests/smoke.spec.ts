import { test, expect } from '@playwright/test';
import { dismissLanding } from './helpers';

// ── SMOKE ──────────────────────────────────────────────────────────────────

test('PORT-SMOKE-001 | Page loads with correct title and no JS errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      if (!text.includes('ERR_EMPTY_RESPONSE') && !text.includes('favicon') && !text.includes('ws://')) {
        errors.push(text);
      }
    }
  });

  await page.goto('/');
  await page.waitForTimeout(500);

  await expect(page).toHaveTitle(/JungWon JUNG/i);
  expect(errors).toHaveLength(0);
});

test('PORT-SMOKE-002 | Landing Hero renders with CTA button', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(300);

  const cta = page.locator('button').first();
  await expect(cta).toBeVisible();

  const bodyText = await page.textContent('body');
  expect(bodyText!.length).toBeGreaterThan(50);
});

test('PORT-SMOKE-003 | CTA dismisses Landing Hero and shows IOSHome', async ({ page }) => {
  await dismissLanding(page);

  await expect(page.getByText('PROJECTS')).toBeVisible();
  await expect(page.getByText('ABOUT')).toBeVisible();
});
