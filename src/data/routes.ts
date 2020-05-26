export interface IRouteObject {
  path: string
  boundKeys: [ string, number ]
  title: string
}

export const routes: IRouteObject[] = [
  {
    path: '/about',
    boundKeys: [ 'w', 0 ],
    title: 'about',
  },
  {
    path: '/contact',
    boundKeys: [ 'a', 1 ],
    title: 'contact',
  },
  {
    path: '/skillset',
    boundKeys: [ 's', 2 ],
    title: 'skillset',
  },
  {
    path: '/projects',
    boundKeys: [ 'd', 3 ],
    title: 'projects',
  },
]
