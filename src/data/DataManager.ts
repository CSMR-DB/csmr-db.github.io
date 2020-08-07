import { Tool, toolsProvider } from './objects/toolsProvider'
import { themeProvider } from './objects/themeProvider'
import { DefaultTheme } from 'styled-components'
import { RouteObject, routesProvider } from './objects/routesProvider'
import { Course, coursesProvider } from './objects/coursesProvider'
import { Contact, contactsProvider } from './objects/contactsProvider'
import {
  dynamicIconsProvider,
  DynamicIcons,
} from './graphql/dynamicIconsProvider'
import {
  dynamicImagesProvider,
  DynamicImages,
} from './graphql/dynamicImagesProvider'
import {
  experienceDataProvider,
  ExperienceData,
} from './graphql/experienceDataProvider'
import {
  projectsDataProvider,
  ProjectsData,
} from './graphql/projectsDataProvider'
import {
  gameWallpapersProvider,
  GameWallpapers,
} from './graphql/gameWallpapersProvider'
import {
  SeriesPosters,
  seriesPostersProvider,
} from './graphql/seriesPostersProvider'
import { SiteMetadata } from '../types/graphql.types'
import {
  SkillsetData,
  skillsetDataProvider,
} from './graphql/skillsetDataProvider'
import { siteMetadataProvider } from './graphql/siteMetadataProvider'
import {
  PhotographySquares,
  photographySquaresProvider,
} from './graphql/photographySquaresProvider'
import {
  photographyDataProvider,
  PhotographyData,
} from './graphql/photographyDataProvider'

export abstract class AStaticDataManager {
  static contacts: Contact[]
  static courses: Course[]
  static routes: RouteObject[]
  static theme: DefaultTheme
  static tools: Tool[]
  static siteMetadata: SiteMetadata
  static skillsetData: SkillsetData
  static projectsData: ProjectsData
  static experienceData: ExperienceData
  static photographyData: PhotographyData
  static gameWallpapers: GameWallpapers
  static photographySquares: PhotographySquares
  static seriesPosters: SeriesPosters
  static dynamicImages: DynamicImages
  static dynamicIcons: DynamicIcons
}

/**
 * **Static Data Manager**
 *
 * Uses an abstract rather than an interface to implement, because TypeScript expects implemented interface to define the shape of an instance, not the class itself. Currently, using an abstract is the only way to get around that, as I can refer to it as
 * `typeof AStaticDataManager` anywhere I use it.
 *
 * Provides all 'static' data to Components through 1 single source of truth. No more duplicate-y GrahpQL queries with hidden differences between 2 files, but 1 predictable response.
 *
 * Everything else should remain consistent & predictable throughout the entire website to provide the best UX it can. I don't really need instances or a Singleton. The StaticDataManager shouldn't exist at runtime anyway.
 *
 * @Note:
 * StaticDataManager can only be used inside React Components, due to the use of the `useStaticQuery` hook in the Data properties.
 *
 * @FIXME:
 * I am not 100% satisfied with the current API "inconsistencies" when destructuring the data, but alas. That's a priority item for the next revision.
 */
export class StaticDataManager implements AStaticDataManager {
  static get routes(): RouteObject[] {
    return routesProvider()
  }

  static get contacts(): Contact[] {
    return contactsProvider()
  }

  static get theme(): DefaultTheme {
    return themeProvider()
  }

  static get tools(): Tool[] {
    return toolsProvider()
  }

  static get courses(): Course[] {
    return coursesProvider()
  }

  static get siteMetadata(): SiteMetadata {
    return siteMetadataProvider()
  }

  static get skillsetData(): SkillsetData {
    return skillsetDataProvider()
  }

  static get experienceData(): ExperienceData {
    return experienceDataProvider()
  }

  static get projectsData(): ProjectsData {
    return projectsDataProvider()
  }

  static get photographyData(): PhotographyData {
    return photographyDataProvider()
  }

  static get gameWallpapers(): GameWallpapers {
    return gameWallpapersProvider()
  }

  static get photographySquares(): PhotographySquares {
    return photographySquaresProvider()
  }

  static get seriesPosters(): SeriesPosters {
    return seriesPostersProvider()
  }

  static get dynamicImages(): DynamicImages {
    return dynamicImagesProvider()
  }

  static get dynamicIcons(): DynamicIcons {
    return dynamicIconsProvider()
  }
}
