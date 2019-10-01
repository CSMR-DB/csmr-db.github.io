export interface IRouteObject {
  path: string
  title: string
}

export const routes: IRouteObject[] = [
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/skillset',
    title: 'Skillset',
  },
  {
    path: '/projects',
    title: 'Projects',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
]
