import {
  allMdxProjectsJsonLdGenerator,
  AllMdxProjectsJsonLdGenerator,
} from './allMdxProjectsJsonLdGenerator'

const fakeMdx: AllMdxProjectsJsonLdGenerator = {
  projectsData: {
    edges: [
      {
        node: {
          frontmatter: {
            title: 'Some Mdx title',
            excerpt: 'Some Mdx content',
            category: 'Programming',
            date: new Date().toString(),
            favorite: false,
          },
          generatedRoute: '/blog/some_mdx_title',
        },
      },
      {
        node: {
          frontmatter: {
            title: 'Another Mdx title',
            excerpt: 'Another Mdx content',
            category: 'Programming',
            date: new Date().toString(),
            favorite: false,
          },
          generatedRoute: '/blog/another_mdx_title',
        },
      },
    ],
  },
  siteMetadata: {
    author: 'MDXAUTHOR',
    description: '',
    image: '',
    title: 'CSMR',
    url: 'https://csmr.nl',
  },
}

describe('allMdxJsonLdGenerator', (): void => {
  it('should generate an array of @type = ListItem', (): void => {
    expect(allMdxProjectsJsonLdGenerator(fakeMdx)).toEqual([
      {
        '@type': 'ListItem',
        name: 'Some Mdx title',
        description: 'Some Mdx content',
        position: 0,
        url: 'https://csmr.nl/blog/some_mdx_title',
      },
      {
        '@type': 'ListItem',
        name: 'Another Mdx title',
        description: 'Another Mdx content',
        position: 1,
        url: 'https://csmr.nl/blog/another_mdx_title',
      },
    ])
  })
})
