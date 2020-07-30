export type RouteObject = {
  path: string
  boundKeys: [string, number]
  title: string
}

const ROUTES: RouteObject[] = [
  {
    path: '/about',
    boundKeys: ['w', 0],
    title: 'about',
  },
  {
    path: '/contact',
    boundKeys: ['a', 1],
    title: 'contact',
  },
  {
    path: '/skillset',
    boundKeys: ['s', 2],
    title: 'skillset',
  },
  {
    path: '/projects',
    boundKeys: ['d', 3],
    title: 'projects',
  },
]

export function routesProvider(): RouteObject[] {
  return ROUTES
}
