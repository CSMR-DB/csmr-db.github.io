import { launch, Browser, Page } from 'puppeteer'
import path from 'path'
const server: {
  port: number
  command: string
  launchTimeout: number
} = require('../jest-puppeteer.config').server

import { SPECS } from './specs'

const siteRoot: string = `http://localhost:${server.port}`

describe('Desktop __ Required Skillset Pages', (): void => {
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
      await page.goto(`${siteRoot}/`)
      // await page.waitFor(SPECS.ANIMATION_WAIT_TIME)
    }
  )

  afterAll(
    async (): Promise<void> => {
      // tslint:disable-next-line: no-floating-promises
      browser.close()
    }
  )

  describe.each(SPECS.REQUIRED_SKILLSET_PAGES)(
    'generated through gatsby-node',
    (subject: string): void => {
      it(`should include /skillset/${subject}`, async (): Promise<void> => {
        await page.goto(`${siteRoot}/skillset/${subject}`)

        await page.waitForSelector('[data-testid=SkillCard]')

        await page.waitFor(SPECS.ANIMATION_WAIT_TIME)
        await page.screenshot({
          path: path.join(
            __dirname,
            `/desktop/screenshots/skillset_${subject}.png`
          ),
        })

        const RootNav: string = await page.$eval(
          '[data-testid=NavToSkillset]',
          (e: Element): string => e.className
        )

        const SkillCard: string = await page.$eval(
          '[data-testid=SkillCard]',
          (e: Element): string => e.innerHTML
        )

        const ProjectCards: string[] = await page.$$eval(
          '[data-testid=ProjectCard]',
          (e: Element[]): string[] =>
            e.map((elem: Element): string => elem.innerHTML)
        )

        expect(RootNav).toContain('active')
        expect(SkillCard).toMatch(subject)
        expect(ProjectCards.length).toBeGreaterThanOrEqual(0)
      })
    }
  )
})
