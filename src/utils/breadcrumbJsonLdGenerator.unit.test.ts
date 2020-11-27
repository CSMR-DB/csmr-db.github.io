import { breadCrumbJsonLdGenerator } from './breadcrumbJsonLdGenerator'

describe('breadCrumbJsonLdGenerator', (): void => {
  it('should generate an array of breadcrumbs from a name and path', (): void => {
    expect(breadCrumbJsonLdGenerator('CSMR', '/blog/react/')).toEqual([
      'CSMR',
      'Blog',
      'React',
    ])

    expect(
      breadCrumbJsonLdGenerator('CSMR', '/blog/javascript/frameworks/angular/')
    ).toEqual(['CSMR', 'Blog', 'Javascript', 'Frameworks', 'Angular'])
  })
})
