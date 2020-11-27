import { launch, Browser, Page } from 'puppeteer'
const server: {
  port: number
  command: string
  launchTimeout: number
} = require('../../jest-puppeteer.config').server

import { SPECS } from '../specs'

const siteRoot: string = `http://localhost:${server.port}`

describe('SkillsetPage', (): void => {
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
      await page.goto(`${siteRoot}/skillset`)
      // await page.waitFor(SPECS.ANIMATION_WAIT_TIME)
    }
  )

  afterAll(
    async (): Promise<void> => {
      // tslint:disable-next-line: no-floating-promises
      browser.close()
    }
  )

  it(`should show at least ${SPECS.LIST_TOP_COUNT} ProgrammingSkillCards`, async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=ProgrammingSkillCards]')

    const SkillCards: string[] = await page.$$eval(
      '[data-testid=ProgrammingSkillCards] [data-testid=SkillCard]',
      (e: Element[]): string[] =>
        e.map((elem: Element): string => elem.innerHTML)
    )

    expect(SkillCards.length).toBeGreaterThanOrEqual(SPECS.LIST_TOP_COUNT)
  })

  it(`should show at least ${SPECS.LIST_TOP_COUNT} GraphicDesignSkillCards`, async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=GraphicDesignSkillCards]')

    const SkillCards: string[] = await page.$$eval(
      '[data-testid=GraphicDesignSkillCards] [data-testid=SkillCard]',
      (e: Element[]): string[] =>
        e.map((elem: Element): string => elem.innerHTML)
    )

    expect(SkillCards.length).toBeGreaterThanOrEqual(SPECS.LIST_TOP_COUNT)
  })

  it('should show at least 2 ExperienceCards', async (): Promise<void> => {
    await page.waitForSelector('[data-testid=ExperienceCard]')

    const ExperienceCards: string[] = await page.$$eval(
      '[data-testid=ExperienceCard]',
      (e: Element[]): string[] =>
        e.map((elem: Element): string => elem.innerHTML)
    )

    expect(ExperienceCards.length).toBeGreaterThanOrEqual(2)
  })

  it('should navigate to a subpage inside /skillset when the user clicks on a skill', async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=SkillCard]')

    const Skill: string = await page.$eval(
      '[data-testid=SkillCard] [data-testid=SkillPageLink]',
      (e: Element): string => e.innerHTML
    )

    await page.click('[data-testid=SkillPageLink]')
    await page.waitForNavigation()

    await page.waitForSelector('[data-testid=SkillCard]')

    const ProjectCards: string[] = await page.$$eval(
      '[data-testid=ProjectCard]',
      (e: Element[]): string[] =>
        e.map((elem: Element): string => elem.innerHTML)
    )

    const newURL: string = page.url()

    expect(ProjectCards.length).toBeGreaterThanOrEqual(0)
    expect(newURL).toEqual(
      `${siteRoot}/skillset/${Skill.toLocaleLowerCase().replace(' ', '_')}`
    )
  })
})
