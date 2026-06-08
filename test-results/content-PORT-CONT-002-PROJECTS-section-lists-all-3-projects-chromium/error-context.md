# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content.spec.ts >> PORT-CONT-002 | PROJECTS section lists all 3 projects
- Location: tests/content.spec.ts:15:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('PARKinPL')
Expected: visible
Error: strict mode violation: getByText('PARKinPL') resolved to 2 elements:
    1) <p>…</p> aka getByText('Spent a few years as a')
    2) <span class="text-iosLabel-light flex-1 text-left min-w-0">PARKinPL</span> aka getByRole('button', { name: 'PARKinPL App Store' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('PARKinPL')

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic:
    - generic: 18:34
    - generic:
      - img
  - generic [ref=e9]:
    - generic [ref=e11]:
      - img "JungWon JUNG" [ref=e13]
      - heading "JungWon JUNG" [level=1] [ref=e14]
      - paragraph [ref=e15]: iOS Developer · Backend Engineer
      - paragraph [ref=e16]: 3 Apps on the App Store
    - generic [ref=e17]:
      - generic [ref=e18]: ABOUT
      - generic [ref=e19]:
        - generic [ref=e20]:
          - generic [ref=e21]: Name
          - generic [ref=e22]: JungWon JUNG
        - generic [ref=e24]:
          - generic [ref=e25]: Role
          - generic [ref=e26]: iOS Developer
        - generic [ref=e28]:
          - generic [ref=e29]: Location
          - generic [ref=e30]: Katowice, Poland
        - paragraph [ref=e33]: Spent a few years as a backend developer in Seoul — building APIs, optimizing queries, learning how real products work under the hood. At some point I wanted to build the parts users actually touch. Moved to Poland, picked up Swift, and shipped 3 apps to the App Store — including PARKinPL, built specifically for navigating parking in Polish cities.
    - generic [ref=e34]:
      - generic [ref=e35]: iOS DEVELOPMENT
      - generic [ref=e36]:
        - generic [ref=e37]:
          - img [ref=e39]
          - generic [ref=e41]: Swift
        - generic [ref=e43]:
          - img [ref=e45]
          - generic [ref=e47]: SwiftUI
        - generic [ref=e49]:
          - img [ref=e51]
          - generic [ref=e53]: UIKit
        - generic [ref=e55]:
          - img [ref=e57]
          - generic [ref=e59]: Combine
        - generic [ref=e61]:
          - img [ref=e63]
          - generic [ref=e65]: CoreLocation
        - generic [ref=e67]:
          - img [ref=e69]
          - generic [ref=e71]: MapKit
        - generic [ref=e73]:
          - img [ref=e75]
          - generic [ref=e77]: Firebase
        - generic [ref=e79]:
          - img [ref=e81]
          - generic [ref=e83]: MVVM
    - generic [ref=e84]:
      - generic [ref=e85]: BACKEND & WEB
      - generic [ref=e86]:
        - generic [ref=e87]:
          - img [ref=e89]
          - generic [ref=e92]: NestJS
        - generic [ref=e94]:
          - img [ref=e96]
          - generic [ref=e99]: TypeScript
        - generic [ref=e101]:
          - img [ref=e103]
          - generic [ref=e106]: MySQL · MongoDB
        - generic [ref=e108]:
          - img [ref=e110]
          - generic [ref=e113]: Elasticsearch
        - generic [ref=e115]:
          - img [ref=e117]
          - generic [ref=e120]: REST APIs
    - generic [ref=e121]:
      - generic [ref=e122]: PROJECTS
      - generic [ref=e123]:
        - button "PARKinPL App Store" [ref=e124] [cursor=pointer]:
          - img [ref=e126]
          - generic [ref=e128]: PARKinPL
          - generic [ref=e129]: App Store
          - img [ref=e131]
        - button "Challengers App Store" [ref=e134] [cursor=pointer]:
          - img [ref=e136]
          - generic [ref=e138]: Challengers
          - generic [ref=e139]: App Store
          - img [ref=e141]
        - button "Dev60s App Store" [ref=e144] [cursor=pointer]:
          - img [ref=e146]
          - generic [ref=e148]: Dev60s
          - generic [ref=e149]: App Store
          - img [ref=e151]
    - generic [ref=e153]:
      - generic [ref=e154]: CAREER
      - generic [ref=e155]:
        - button "Telus Digital 2024" [ref=e156] [cursor=pointer]:
          - img [ref=e158]
          - generic [ref=e160]: Telus Digital
          - generic [ref=e161]: "2024"
          - img [ref=e163]
        - button "Avelinix 2024" [ref=e166] [cursor=pointer]:
          - img [ref=e168]
          - generic [ref=e170]: Avelinix
          - generic [ref=e171]: "2024"
          - img [ref=e173]
        - button "FlareLane 2021" [ref=e176] [cursor=pointer]:
          - img [ref=e178]
          - generic [ref=e180]: FlareLane
          - generic [ref=e181]: "2021"
          - img [ref=e183]
        - button "Shipda 2021" [ref=e186] [cursor=pointer]:
          - img [ref=e188]
          - generic [ref=e190]: Shipda
          - generic [ref=e191]: "2021"
          - img [ref=e193]
    - generic [ref=e195]:
      - generic [ref=e196]: EDUCATION
      - generic [ref=e197]:
        - generic [ref=e198]:
          - img [ref=e200]
          - generic [ref=e204]: WSB University
        - generic [ref=e206]:
          - generic [ref=e207]: Major
          - generic [ref=e208]: Computer Science
        - generic [ref=e210]:
          - generic [ref=e211]: Degree
          - generic [ref=e212]: B.Sc.
        - generic [ref=e214]:
          - generic [ref=e215]: Expected
          - generic [ref=e216]: Winter 2026
    - generic [ref=e217]:
      - generic [ref=e218]: CONTACT
      - generic [ref=e219]:
        - button "LinkedIn" [ref=e220] [cursor=pointer]:
          - img [ref=e222]
          - generic [ref=e224]: LinkedIn
          - img [ref=e226]
        - button "GitHub" [ref=e229] [cursor=pointer]:
          - img [ref=e231]
          - generic [ref=e233]: GitHub
          - img [ref=e235]
        - button "Email wjdwjd1501@gmail.com" [ref=e238] [cursor=pointer]:
          - img [ref=e240]
          - generic [ref=e242]: Email
          - generic [ref=e243]: wjdwjd1501@gmail.com
        - button "Resume" [ref=e245] [cursor=pointer]:
          - img [ref=e247]
          - generic [ref=e249]: Resume
          - img [ref=e251]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { dismissLanding, navToProject } from './helpers';
  3  | 
  4  | // ── CONTENT ────────────────────────────────────────────────────────────────
  5  | 
  6  | test('PORT-CONT-001 | ABOUT section displays name, role, and location', async ({ page }) => {
  7  |   await dismissLanding(page);
  8  | 
  9  |   const body = await page.textContent('body');
  10 |   expect(body).toContain('JungWon');
  11 |   expect(body).toMatch(/iOS|Developer/i);
  12 |   expect(body).toMatch(/Canada|Vancouver|Waterloo/i);
  13 | });
  14 | 
  15 | test('PORT-CONT-002 | PROJECTS section lists all 3 projects', async ({ page }) => {
  16 |   await dismissLanding(page);
  17 | 
> 18 |   await expect(page.getByText('PARKinPL')).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  19 |   await expect(page.getByText('Challengers').first()).toBeVisible();
  20 |   await expect(page.getByText('Dev60s')).toBeVisible();
  21 | });
  22 | 
  23 | test('PORT-CONT-003 | Challengers detail page shows correct tech stack', async ({ page }) => {
  24 |   await dismissLanding(page);
  25 |   await navToProject(page, 'Challengers');
  26 | 
  27 |   const body = await page.textContent('body');
  28 |   expect(body).toMatch(/SwiftUI/i);
  29 |   expect(body).toMatch(/Firebase/i);
  30 |   expect(body).toMatch(/MVVM/i);
  31 |   expect(body).toMatch(/Combine/i);
  32 | });
  33 | 
  34 | test('PORT-CONT-004 | All project images load without 4xx errors', async ({ page }) => {
  35 |   const failedImages: string[] = [];
  36 |   page.on('response', res => {
  37 |     if (res.request().resourceType() === 'image' && res.status() >= 400) {
  38 |       failedImages.push(`${res.status()} ${res.url()}`);
  39 |     }
  40 |   });
  41 | 
  42 |   await dismissLanding(page);
  43 |   for (const name of ['Challengers', 'PARKinPL', 'Dev60s']) {
  44 |     await dismissLanding(page);
  45 |     await navToProject(page, name);
  46 |     await page.goBack();
  47 |     await page.waitForTimeout(200);
  48 |   }
  49 | 
  50 |   expect(failedImages).toHaveLength(0);
  51 | });
  52 | 
  53 | test('PORT-CONT-005 | EDUCATION section shows university and degree info', async ({ page }) => {
  54 |   await dismissLanding(page);
  55 | 
  56 |   const body = await page.textContent('body');
  57 |   expect(body).toMatch(/Waterloo|WSB/i);
  58 |   expect(body).toMatch(/Computer Science|CS/i);
  59 |   expect(body).toMatch(/B\.Sc|Bachelor/i);
  60 | });
  61 | 
```