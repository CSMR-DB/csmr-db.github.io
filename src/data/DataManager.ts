import { ITool, toolsProvider } from './objects/toolsProvider'
import { themeProvider } from './objects/themeProvider'
import { DefaultTheme } from 'styled-components'
import { IRouteObject, routesProvider } from './objects/routesProvider'
import { ICourse, coursesProvider } from './objects/coursesProvider'
import { IContact, contactsProvider } from './objects/contactsProvider'
import {
  dynamicIconsProvider,
  IDynamicIcons,
} from './graphql/dynamicIconsProvider'
import {
  dynamicImagesProvider,
  IDynamicImages,
} from './graphql/dynamicImagesProvider'
import {
  experienceDataProvider,
  IExperienceData,
} from './graphql/experienceDataProvider'
import {
  gameWallpapersProvider,
  IGameWallpapers,
} from './graphql/gameWallpapersProvider'
import {
  ISeriesPosters,
  seriesPostersProvider,
} from './graphql/seriesPostersProvider'
import { ISiteMetadata } from '../types/interfaces'
import {
  ISkillsetData,
  skillsetDataProvider,
} from './graphql/skillsetDataProvider'
import { siteMetadataProvider } from './graphql/siteMetadataProvider'
import {
  IGraphicDesignData,
  graphicDesignDataProvider,
} from './graphql/graphicDesignDataProvider'
import {
  IPhotographySquares,
  photographySquaresProvider,
} from './graphql/photographySquaresProvider'
import {
  programmingDataProvider,
  IProgrammingData,
} from './graphql/programmingDataProvider'
import {
  photographyDataProvider,
  IPhotographyData,
} from './graphql/photographyDataProvider'

export abstract class AStaticDataManager {
  static contacts: IContact[]
  static courses: ICourse[]
  static routes: IRouteObject[]
  static theme: DefaultTheme
  static tools: ITool[]
  static siteMetadata: ISiteMetadata
  static skillsetData: ISkillsetData
  static experienceData: IExperienceData
  static programmingData: IProgrammingData
  static graphicDesignData: IGraphicDesignData
  static photographyData: IPhotographyData
  static gameWallpapers: IGameWallpapers
  static photographySquares: IPhotographySquares
  static seriesPosters: ISeriesPosters
  static dynamicImages: IDynamicImages
  static dynamicIcons: IDynamicIcons
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
  static get routes(): IRouteObject[] {
    return routesProvider()
  }

  static get contacts(): IContact[] {
    return contactsProvider()
  }

  static get theme(): DefaultTheme {
    return themeProvider()
  }

  static get tools(): ITool[] {
    return toolsProvider()
  }

  static get courses(): ICourse[] {
    return coursesProvider()
  }

  static get siteMetadata(): ISiteMetadata {
    return siteMetadataProvider()
  }

  static get skillsetData(): ISkillsetData {
    return skillsetDataProvider()
  }

  static get experienceData(): IExperienceData {
    return experienceDataProvider()
  }

  static get programmingData(): IProgrammingData {
    return programmingDataProvider()
  }

  static get graphicDesignData(): IGraphicDesignData {
    return graphicDesignDataProvider()
  }

  static get photographyData(): IPhotographyData {
    return photographyDataProvider()
  }

  static get gameWallpapers(): IGameWallpapers {
    return gameWallpapersProvider()
  }

  static get photographySquares(): IPhotographySquares {
    return photographySquaresProvider()
  }

  static get seriesPosters(): ISeriesPosters {
    return seriesPostersProvider()
  }

  static get dynamicImages(): IDynamicImages {
    return dynamicImagesProvider()
  }

  static get dynamicIcons(): IDynamicIcons {
    return dynamicIconsProvider()
  }
}
