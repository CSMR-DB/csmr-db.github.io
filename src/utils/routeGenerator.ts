export function routeGenerator(fileAbsolutePath: string): string {
  const pageDirectory: string = fileAbsolutePath.match(
    /(markdown-pages)\/(\w+\/)+/gi
  )![0] // 'markdown-pages/blog/article/'
  const subDirectory: string = pageDirectory
    .replace('markdown-pages/', '/')
    .slice(0, -1)
    .toLocaleLowerCase() // '/blog/article'

  return subDirectory
}
