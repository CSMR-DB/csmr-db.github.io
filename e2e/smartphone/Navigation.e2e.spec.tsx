import { launch, Browser, Page, devices } from 'puppeteer'
// import path from 'path'
const server: {
  port: number
  command: string
  launchTimeout: number
} = require('../../jest-puppeteer.config').server

import { SPECS } from '../specs'

const siteRoot: string = `http://localhost:${server.port}`

describe('Navigation (both WASDNav & IONavigator)', (): void => {
  let browser: Browser
  let page: Page

  beforeAll(
    async (): Promise<void> => {
      browser = await launch({
        // headless: false,
        // slowMo: 100,
        // devtools: true,
      })
      page = await browser.newPage()

      // tslint:disable-next-line: no-floating-promises
      await page.emulate(devices['iPhone 8'])
    }
  )

  beforeEach(
    async (): Promise<void> => {
      /**
       * I am starting at /404 here explicitly to test the keyboard navigation for all keys including '/',
       * which navigates to the root URL, thus *NOT* triggering a navigation event I can "wait for" in Puppeteer
       */
      await page.goto(`${siteRoot}/404`)
      await page.waitFor(SPECS.ANIMATION_WAIT_TIME)
    }
  )

  afterAll(
    async (): Promise<void> => {
      // tslint:disable-next-line: no-floating-promises
      browser.close()
    }
  )

  describe.each(['Skillset', 'Projects', 'Contact', 'About'])(
    'Primary Pages',
    (route: string): void => {
      it(`should go to the ${route} page when menu item is clicked`, async (): Promise<
        void
      > => {
        await page.waitForSelector(`[data-testid=NavTo${route}]`)

        await page.click(`[data-testid=NavTo${route}]`)

        await page.waitForNavigation()

        const newURL: string = page.url()

        expect(newURL).toEqual(`${siteRoot}/${route.toLocaleLowerCase()}`)
      })
    }
  )

  // describe.each([
  //   { key: '/', route: '' },
  //   { key: 'W', route: 'about' },
  //   { key: 'A', route: 'contact' },
  //   { key: 'S', route: 'skillset' },
  //   { key: 'D', route: 'projects' },
  //   { key: 'O', route: 'onepage' },
  //   { key: 'P', route: 'photography' },
  // ])('IONavigator', ({ key, route }: { key: string, route: string }): void => {
  //   it(`should navigate to /${route} on keypress of ${key}`, async (): Promise<void> => {
  //     await page.evaluate(async ({ passedKey }: { passedKey: string }): Promise<void> => {
  //       window.dispatchEvent(new KeyboardEvent('keydown', { key: passedKey.toLocaleLowerCase() }))
  //     }, ({ passedKey: key }))

  //     await page.waitForNavigation()

  //     await page.waitFor(SPECS.ANIMATION_WAIT_TIME)
  //     await page.screenshot({ path: path.join(__dirname, `/screenshots/${(route !== '' ? route.toLocaleLowerCase() : 'homepage')}.png`), fullPage: true })

  //     const newURL: string = page.url()

  //     expect(newURL).toEqual(`${siteRoot}/${route.toLocaleLowerCase()}`)
  //   });
  // })
})
