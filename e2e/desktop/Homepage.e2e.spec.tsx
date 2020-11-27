import { launch, Browser, Page } from 'puppeteer'
// import path from 'path'
const server: {
  port: number
  command: string
  launchTimeout: number
} = require('../../jest-puppeteer.config').server

import { SPECS } from '../specs'

const siteRoot: string = `http://localhost:${server.port}`

describe('Desktop __ Homepage', (): void => {
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
      await page.emulate({
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
      await page.waitFor(SPECS.ANIMATION_WAIT_TIME)
    }
  )

  afterAll(
    async (): Promise<void> => {
      // tslint:disable-next-line: no-floating-promises
      browser.close()
    }
  )

  it('should display my "ProfileCard"', async (): Promise<void> => {
    await page.waitForSelector('#___gatsby')

    await page.waitForSelector('[data-testid=ProfileCard]')

    const ProfileCard: string = await page.$eval(
      '[data-testid=ProfileCard]',
      (e: Element): string => e.innerHTML
    )

    expect(ProfileCard).toMatch('Casimir')
  })

  it(`should show ${SPECS.LIST_TOP_COUNT} SkillCards`, async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=SkillCard]')

    const SkillCards: string[] = await page.$$eval(
      '[data-testid=SkillCard]',
      (e: Element[]): string[] =>
        e.map((elem: Element): string => elem.innerHTML)
    )

    expect(SkillCards.length).toBeLessThanOrEqual(SPECS.LIST_TOP_COUNT)
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
    // await page.waitFor(SPECS.ANIMATION_WAIT_TIME)

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

  it(`should show ${SPECS.LIST_TOP_COUNT} ProjectCards`, async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=ProjectCard]')

    const ProjectCards: string[] = await page.$$eval(
      '[data-testid=ProjectCard]',
      (e: Element[]): string[] =>
        e.map((elem: Element): string => elem.innerHTML)
    )

    expect(ProjectCards.length).toBeLessThanOrEqual(SPECS.LIST_TOP_COUNT)
  })

  it('should navigate to a subpage inside /projects when the user clicks on a project', async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=ProjectCard]')

    const Project: string = await page.$eval(
      '[data-testid=ProjectCard] [data-testid=ProjectPageLink]',
      (e: Element): string => e.innerHTML
    )

    await page.click('[data-testid=ProjectPageLink]')
    await page.waitForNavigation()
    // await page.waitFor(SPECS.ANIMATION_WAIT_TIME)

    await page.waitForSelector('[data-testid=ProjectTemplateArticle]')

    const newURL: string = page.url()

    const ProjectTemplateArticleTitle: string = await page.$eval(
      '[data-testid=ProjectTemplateArticle] h1',
      (e: Element): string => e.innerHTML
    )

    expect(newURL).toEqual(
      `${siteRoot}/projects/${Project.toLocaleLowerCase().replace(' ', '_')}`
    )
    expect(ProjectTemplateArticleTitle).toEqual(Project)
  })
})
