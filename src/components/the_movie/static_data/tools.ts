import {
  ReactSVG,
  AngularSVG,
  VueSVG,
  SvelteSVG,
  CSSSVG,
  SassSVG,
  StylusSVG,
  GitSVG,
  JestSVG,
  GraphQLSVG,
  NodeSVG,
  MongoSVG,
  MeteorSVG,
  HTMLSVG,
  JSSVG,
  TSSVG,
} from './../components/CodeSVGs'
import { AnyExoticRefComponent } from './../types.interface'

export interface ITool {
  name: string
  svg: AnyExoticRefComponent<any>
  color?: string
}

export const frontEndFrameworks: ITool[] = [
  {
    name: 'React',
    color: '#00d8ff',
    svg: ReactSVG,
  },
  {
    name: 'Angular',
    color: '#c3002f',
    svg: AngularSVG,
  },
  {
    name: 'Vue',
    color: '#41b883',
    svg: VueSVG,
  },
  {
    name: 'Svelte',
    color: '#ff3e00',
    svg: SvelteSVG,
  },
]

export const coreStuff: ITool[] = [
  {
    name: 'CSS',
    color: '#1572b6',
    svg: CSSSVG,
  },
  {
    name: 'Stylus',
    color: '#c2c2c2',
    svg: StylusSVG,
  },
  {
    name: 'Sass',
    color: '#cd6799',
    svg: SassSVG,
  },
  {
    name: 'HTML',
    color: '#e44f26',
    svg: HTMLSVG,
  },
  {
    name: 'JavaScript',
    color: '#f5de19',
    svg: JSSVG,
  },
  {
    name: 'TypeScript',
    color: '#007acc',
    svg: TSSVG,
  },
]

export const misc: ITool[] = [
  {
    name: 'Git',
    color: '#dd4c35',
    svg: GitSVG,
  },
  {
    name: 'Jest',
    color: '#c63d14',
    svg: JestSVG,
  },
  {
    name: 'GraphQL',
    color: '#e10098',
    svg: GraphQLSVG,
  },
  {
    name: 'MongoDB',
    color: '#48a547',
    svg: MongoSVG,
  },
  {
    name: 'Node',
    color: '#83cd29',
    svg: NodeSVG,
  },
  {
    name: 'Meteor',
    color: '#df4f4f',
    svg: MeteorSVG,
  },
]

export const allSVGs: ITool[] = [...coreStuff, ...frontEndFrameworks, ...misc]
