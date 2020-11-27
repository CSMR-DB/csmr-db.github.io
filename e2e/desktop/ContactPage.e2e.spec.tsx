import { launch, Browser, Page, SerializableOrJSHandle } from 'puppeteer'
const server: {
  port: number
  command: string
  launchTimeout: number
} = require('../../jest-puppeteer.config').server

import { SPECS, SPECSDEF } from '../specs'

const siteRoot: string = `http://localhost:${server.port}`

describe('ContactPage', (): void => {
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
      page.emulate({
        viewport: {
          width: 1920,
          height: 1080,
        },
        userAgent: '',
      })
    }
  )

  beforeEach(
    async (): Promise<void> => {
      await page.goto(`${siteRoot}/contact`)
    }
  )

  afterAll(
    async (): Promise<void> => {
      // tslint:disable-next-line: no-floating-promises
      browser.close()
    }
  )

  describe.each(SPECS.REQUIRED_CONTACT_OPTIONS)(
    'Contact Options',
    ({ NAME, HREF, OPENS }: SPECSDEF['REQUIRED_CONTACT_OPTIONS'][0]): void => {
      it(`should include ${NAME}`, async (): Promise<void> => {
        await page.waitForSelector(`[data-testid=SocialButton${NAME}]`)

        const SocialButtonHref: string = await page.$eval(
          `[data-testid=SocialButton${NAME}]`,
          (e: Element): string => e.outerHTML
        )

        expect(SocialButtonHref).toMatch(HREF)

        const oldPage: string = page.url()

        /**
         * Override target="blank | _blank" attribute to keep the navigation in the same page.
         */
        const clickTarget: SerializableOrJSHandle = await page.$(
          `[data-testid=SocialButton${NAME}]`
        )
        await page.evaluateHandle((el: { target: string }): void => {
          el.target = '_self'
        }, clickTarget)

        await page.click(`[data-testid=SocialButton${NAME}]`)

        const newPage: string = page.url()

        expect(newPage).toEqual(OPENS === 'PAGE' ? HREF : oldPage)
      })
    }
  )
})
