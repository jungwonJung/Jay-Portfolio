# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: links.spec.ts >> PORT-LINK-001 | Challengers App Store button opens correct URL
- Location: tests/links.spec.ts:6:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "challengers"
Received string:    "https://apps.apple.com/pl/app/challlengers/id6758675338"
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic:
    - generic: 18:34
    - generic:
      - img
  - generic [ref=e8]:
    - navigation [ref=e9]:
      - button "Back" [ref=e11] [cursor=pointer]:
        - img [ref=e12]
    - generic [ref=e14]:
      - heading "Challengers" [level=1] [ref=e16]
      - img "Screens of Challengers iOS challenge app" [ref=e19]
      - generic [ref=e20]:
        - generic [ref=e21]:
          - img "Challengers icon" [ref=e23]
          - paragraph [ref=e25]: Social challenge app — create and join goals with friends. Live on the App Store.
        - button "View on App Store" [active] [ref=e27] [cursor=pointer]
      - generic [ref=e28]:
        - generic [ref=e29]: DESCRIPTION
        - list [ref=e32]:
          - listitem [ref=e33]:
            - generic [ref=e34]: •
            - generic [ref=e35]:
              - text: Led full development and design — from concept to
              - strong [ref=e36]: App Store
              - text: release.
          - listitem [ref=e37]:
            - generic [ref=e38]: •
            - generic [ref=e39]: Real-time challenge creation and tracking with friends.
          - listitem [ref=e40]:
            - generic [ref=e41]: •
            - generic [ref=e42]:
              - strong [ref=e43]: SwiftUI
              - text: +
              - strong [ref=e44]: Combine
              - text: with
              - strong [ref=e45]: MVVM
              - text: for clean, scalable state management.
          - listitem [ref=e46]:
            - generic [ref=e47]: •
            - generic [ref=e48]:
              - strong [ref=e49]: Firebase
              - text: backend for live data sync across users.
          - listitem [ref=e50]:
            - generic [ref=e51]: •
            - generic [ref=e52]:
              - text: Live on the
              - strong [ref=e53]: App Store
              - text: .
      - generic [ref=e54]:
        - generic [ref=e55]: KEY FEATURES
        - generic [ref=e56]:
          - generic [ref=e57]:
            - img [ref=e59]
            - generic [ref=e62]: "End-to-end ownership: design, architecture, development, and release."
          - generic [ref=e64]:
            - img [ref=e66]
            - generic [ref=e69]: Onboarding, challenge creation, and history flows with strong UX focus.
          - generic [ref=e71]:
            - img [ref=e73]
            - generic [ref=e76]:
              - strong [ref=e77]: MVVM
              - text: +
              - strong [ref=e78]: Combine
              - text: for
              - strong [ref=e79]: react
              - text: ive, testable architecture.
          - generic [ref=e81]:
            - img [ref=e83]
            - generic [ref=e85]:
              - strong [ref=e86]: Firebase
              - text: "-backed real-time data — live for real users."
      - generic [ref=e87]:
        - generic [ref=e88]: TECHNOLOGIES
        - generic [ref=e89]:
          - generic [ref=e90]:
            - img [ref=e92]
            - generic [ref=e94]: Swift
          - generic [ref=e96]:
            - img [ref=e98]
            - generic [ref=e100]: SwiftUI
          - generic [ref=e102]:
            - img [ref=e104]
            - generic [ref=e107]: Combine
          - generic [ref=e109]:
            - img [ref=e111]
            - generic [ref=e114]: Firebase
          - generic [ref=e116]:
            - img [ref=e118]
            - generic [ref=e121]: MVVM
      - generic [ref=e122]:
        - generic [ref=e123]: LINKS
        - button "App Store" [ref=e125] [cursor=pointer]:
          - img [ref=e127]
          - generic [ref=e129]: App Store
          - img [ref=e131]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { dismissLanding, navToProject, mockWindowOpen, getLastOpenedUrl, httpGet } from './helpers';
  3  | 
  4  | // ── LINKS ──────────────────────────────────────────────────────────────────
  5  | 
  6  | test('PORT-LINK-001 | Challengers App Store button opens correct URL', async ({ page }) => {
  7  |   await dismissLanding(page);
  8  |   await navToProject(page, 'Challengers');
  9  |   await mockWindowOpen(page);
  10 | 
  11 |   await page.getByRole('button', { name: /view on app store/i }).click();
  12 |   await page.waitForTimeout(300);
  13 | 
  14 |   const url = await getLastOpenedUrl(page);
  15 |   expect(url).toContain('apps.apple.com');
> 16 |   expect(url).toContain('challengers');
     |               ^ Error: expect(received).toContain(expected) // indexOf
  17 | });
  18 | 
  19 | test('PORT-LINK-002 | PARKinPL App Store button opens correct URL', async ({ page }) => {
  20 |   await dismissLanding(page);
  21 |   await navToProject(page, 'PARKinPL');
  22 |   await mockWindowOpen(page);
  23 | 
  24 |   await page.getByRole('button', { name: /view on app store/i }).click();
  25 |   await page.waitForTimeout(300);
  26 | 
  27 |   const url = await getLastOpenedUrl(page);
  28 |   expect(url).toContain('apps.apple.com');
  29 |   expect(url).toContain('parkinpl');
  30 | });
  31 | 
  32 | test('PORT-LINK-003 | Dev60s App Store button opens correct URL', async ({ page }) => {
  33 |   await dismissLanding(page);
  34 |   await navToProject(page, 'Dev60s');
  35 |   await mockWindowOpen(page);
  36 | 
  37 |   await page.getByRole('button', { name: /view on app store/i }).click();
  38 |   await page.waitForTimeout(300);
  39 | 
  40 |   const url = await getLastOpenedUrl(page);
  41 |   expect(url).toContain('apps.apple.com');
  42 |   expect(url).toContain('dev60s');
  43 | });
  44 | 
  45 | test('PORT-LINK-004 | PARKinPL GitHub button opens correct URL', async ({ page }) => {
  46 |   await dismissLanding(page);
  47 |   await navToProject(page, 'PARKinPL');
  48 |   await mockWindowOpen(page);
  49 | 
  50 |   await page.getByRole('button', { name: /view on github/i }).click();
  51 |   await page.waitForTimeout(300);
  52 | 
  53 |   const url = await getLastOpenedUrl(page);
  54 |   expect(url).toContain('github.com');
  55 |   expect(url).toContain('PARKinPL');
  56 | });
  57 | 
  58 | test('PORT-LINK-005 | Dev60s GitHub button opens correct URL', async ({ page }) => {
  59 |   await dismissLanding(page);
  60 |   await navToProject(page, 'Dev60s');
  61 |   await mockWindowOpen(page);
  62 | 
  63 |   await page.getByRole('button', { name: /view on github/i }).click();
  64 |   await page.waitForTimeout(300);
  65 | 
  66 |   const url = await getLastOpenedUrl(page);
  67 |   expect(url).toContain('github.com');
  68 |   expect(url).toContain('Dev60s');
  69 | });
  70 | 
  71 | test('PORT-LINK-006 | LinkedIn and GitHub social links are present in CONTACT', async ({ page }) => {
  72 |   await dismissLanding(page);
  73 |   await mockWindowOpen(page);
  74 | 
  75 |   const body = await page.textContent('body');
  76 |   expect(body).toMatch(/LinkedIn/i);
  77 |   expect(body).toMatch(/GitHub/i);
  78 | });
  79 | 
  80 | test('PORT-LINK-007 | Resume PDF returns HTTP 200', async ({ page }) => {
  81 |   const status = await httpGet('http://localhost:3000/JUNGWON_JUNG_CV_2026.pdf');
  82 |   expect(status).toBe(200);
  83 | });
  84 | 
```