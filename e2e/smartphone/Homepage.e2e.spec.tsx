import { launch, Browser, Page, devices } from 'puppeteer'
// import path from 'path'
const server: {
  port: number
  command: string
  launchTimeout: number
} = require('../../jest-puppeteer.config').server

import { SPECS } from '../specs'
import {
  JPGetComputedStyle,
  JPGetClassStyle,
  JPStyleSheetObject,
} from '../utils'

const siteRoot: string = `http://localhost:${server.port}`

const DEVICE: devices.Device = devices['iPhone 6']
const TEST_DEVICES: devices.Device[] = [
  devices['iPhone 6'],
  devices['iPhone 8'],
  devices['Galaxy S5'],
]

/**
 * Just check that devices render the main Grid properly
 */
describe.each(TEST_DEVICES)('Smartphones', (device: devices.Device): void => {
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
      await page.emulate(device)
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

  it(`should display main content in a Grid with a computed gridTemplateColumns property of ${
    device.viewport.width - SPECS.REM_TO_PX * 2
  }px`, async (): Promise<void> => {
    await page.waitForSelector('[data-testid=MainGrid]')

    const Element_gridTemplateColumns: string = await JPGetComputedStyle(
      page,
      '[data-testid=MainGrid]',
      'gridTemplateColumns'
    )
    const Element_width: string = await JPGetComputedStyle(
      page,
      '[data-testid=MainGrid]',
      'width'
    )

    expect(Element_gridTemplateColumns).toEqual(
      `${device.viewport.width - SPECS.REM_TO_PX * 2}px`
    )
    expect(Element_width).toEqual(
      `${device.viewport.width - SPECS.REM_TO_PX * 2}px`
    )

    const Element_styleSheets: JPStyleSheetObject = await JPGetClassStyle(
      page,
      '[data-testid=MainGrid]',
      'width'
    )
    // expect(Element_styleSheets[0].rules).toEqual(`${device.viewport.width - SPECS.REM_TO_PX * 2}px`)
    expect(Element_styleSheets).toEqual({ kek: 'w' })
  })
})

/**
 * Extended Test Suite
 */
describe.skip(`${DEVICE.name} - Smartphone __ Homepage`, (): void => {
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
      await page.emulate(DEVICE)
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

  it('should display main content in a Grid of 1 column', async (): Promise<
    void
  > => {
    await page.waitForSelector('[data-testid=MainGrid]')

    const Element_gridTemplateColumns: string = await JPGetComputedStyle(
      page,
      '[data-testid=MainGrid]',
      'gridTemplateColumns'
    )
    const Element_width: string = await JPGetComputedStyle(
      page,
      '[data-testid=MainGrid]',
      'width'
    )

    expect(Element_gridTemplateColumns).toEqual(
      `${DEVICE.viewport.width - SPECS.REM_TO_PX * 2}px`
    )
    expect(Element_width).toEqual(
      `${DEVICE.viewport.width - SPECS.REM_TO_PX * 2}px`
    )
  })

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
