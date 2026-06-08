import { Page } from '@playwright/test';
import http from 'http';

/** Dismiss LandingHero and return to IOSHome */
export async function dismissLanding(page: Page): Promise<void> {
  await page.goto('/');
  await page.waitForTimeout(300);
  await page.locator('button').first().click();
  await page.waitForTimeout(500);
}

/** Intercept window.open calls and collect URLs */
export async function mockWindowOpen(page: Page): Promise<void> {
  await page.evaluate(() => {
    (window as any)._openedUrls = [];
    window.open = (url?: string | URL) => {
      (window as any)._openedUrls.push(url ? String(url) : '');
      return null;
    };
  });
}

/** Get the last URL passed to window.open */
export async function getLastOpenedUrl(page: Page): Promise<string> {
  return page.evaluate(() => {
    const urls = (window as any)._openedUrls || [];
    return urls[urls.length - 1] || '';
  });
}

/** Navigate to a project detail page by project name in the PROJECTS list */
export async function navToProject(page: Page, name: string): Promise<void> {
  const locator = name === 'PARKinPL'
    ? page.getByText(name).last()
    : page.getByText(name).first();
  await locator.click();
  await page.waitForTimeout(500);
}

/** Simple HTTP GET — returns status code (no Playwright download trigger) */
export function httpGet(url: string): Promise<number> {
  return new Promise(resolve => {
    http.get(url, res => { res.resume(); resolve(res.statusCode ?? 0); })
      .on('error', () => resolve(0));
  });
}
