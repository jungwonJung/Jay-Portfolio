import { test, expect } from '@playwright/test';
import { dismissLanding } from './helpers';

// ── VISUAL ─────────────────────────────────────────────────────────────────

test('PORT-VIS-001 | Background uses gradient styling', async ({ page }) => {
  await dismissLanding(page);

  const bgStyle = await page.evaluate(() => {
    const el = document.body;
    return window.getComputedStyle(el).background || window.getComputedStyle(el).backgroundImage;
  });

  expect(bgStyle).toMatch(/gradient/i);
});

test('PORT-VIS-002 | Framer-motion animation attributes are present in DOM', async ({ page }) => {
  await dismissLanding(page);

  const hasMotionAttrs = await page.evaluate(() => {
    const els = document.querySelectorAll('[style*="opacity"], [style*="transform"]');
    return els.length > 0;
  });

  expect(hasMotionAttrs).toBe(true);
});

test('PORT-VIS-003 | iOS-style UI elements (separators, chevrons) are visible', async ({ page }) => {
  await dismissLanding(page);

  const hasSeparators = await page.evaluate(() =>
    document.querySelectorAll('.ios-separator, [class*="separator"]').length > 0
  );
  const hasChevrons = await page.evaluate(() =>
    document.querySelectorAll('[class*="chevron"], svg').length > 0
  );

  expect(hasSeparators || hasChevrons).toBe(true);
});

test('PORT-VIS-004 | No horizontal overflow at mobile viewport (375×812)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await dismissLanding(page);

  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.body.scrollWidth,
    clientWidth: document.body.clientWidth,
  }));

  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
