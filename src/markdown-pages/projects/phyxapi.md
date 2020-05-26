---
path: '/projects/phyxapi'
category: 'Programming'
date: 2019-03-01
title: 'PHYX API'
featuredImage: '../../images/projects/phyx_api.png'
tags: ['TypeScript', 'GraphQL']
excerpt: "This is my first major project stepping out of front-end
  development. Everything I have made up until this point has
  focussed, in some way, on visual design. The only visual aspect of
  this project is the GraphiQL portal that's made available to
  communicate with the server. The stack consists of Apollo Server
  (GraphQL), TypeScript and a Dependency Injection Container. This is
  a project for me to experiment with architecture, TDD & SOLID
  principles. I still have a lot to learn."
---

This project is all about games I play, used to play, or like to watch. All games have a different signature, feature set and playstyle. For example: CS:GO implements an in-match economy system, while R6 Siege and Apex Legends have Operators / Legends with unique abilities. All these games have an e-sports scene around them and require some form of tactic to be played properly.

The plan for API is to provide a service for a front-end to connect to, doing validation of submitted "strategies" in a different way for each feature. There is no "one size fits all", aside from some generic `ItemValidators`. This is what defines the structure for this application. Every game that gets added, would just have a specific contract to match. The core of the application then builds the entire GraphQL API from all the `Features` in `features/gameFolder/index.ts`, using the following contract:

```typescript
// importFeatures.ts
import fs from 'fs'
import { GraphQLSchema } from 'graphql'

type FeatureModule = { default: { schema: GraphQLSchema; context?: Object } }

export type ImportFeaturesObject = {
  featureSchemas: GraphQLSchema[]
  featureContexts: Object[]
}

export async function importFeatures(): Promise<ImportFeaturesObject> {
  const featureFolders: string[] = await fs.readdirSync('src/features', 'utf8')

  const featureSchemas: GraphQLSchema[] = []
  const featureContexts: Object[] = []

  await featureFolders.map((folder: string) => {
    import(`~src/features/${folder}`)
      .then((module: FeatureModule) => {
        const schema: GraphQLSchema = module.default.schema
        const context: Object | undefined = module.default.context

        featureSchemas.push(schema)
        context && featureContexts.push(context)
      })
      .catch((error: Error) => {
        throw error
      })
  })

  return await { featureSchemas, featureContexts }
}
```

Then, every game just needs to have an `index.ts` file, looking something like this:

```typescript
// features/apex-legends/index.ts
import { FeatureExport } from '~src/types/FeatureExport'
import { ApexLegendsGraphQLShema } from './graphql/ApexLegendsGraphQLSchema'
import { ApexLegendsContainer } from './di/ApexLegendsDI'

const apexLegendsFeatureExport: FeatureExport = {
  schema: ApexLegendsContainer.resolve(ApexLegendsGraphQLShema).schema,
}

// tslint:disable-next-line: no-default-export
export default apexLegendsFeatureExport
```

In this example, no `context` is exported. Just the GraphQL schema. The feature itself then has to implement things like validation and a database. As of right now every feature in this hobby project is built with MongoDB as the database provider, and the core of the API establishes that connection. I would like to experiment with SQL, but have no plans to do so.

What I am struggling with, however, is the fact that I currently have 3 layers of typedefs: TypeScript types, the GraphQL schema and the Mongoose schema. Keeping that all in sync has turned out to be a hassle and I am currently looking for a way to improve on that front.

This structure for "Feature" folders is different to allow me to experiment a lot. For example, I found this sweet post on Medium that made me want to try out [a TypeScript DI system](https://medium.com/@OlegVaraksin/minimalistic-dependency-injection-di-container-in-typescript-2ce93d1c303b) using `reflect-metadata`:

```typescript
// tiny-di.ts
import 'reflect-metadata'

export interface Type<T> {
  new (...args: any[]): T
}

type GenericClassDecorator<T> = (target: T) => void

export type InjectableType = () => GenericClassDecorator<Type<Object>>

/**
 * **$DIContainer**
 * @property injectables: a Map of all resolved Injectables using the Injectable(containerRef) Decorator
 * @method register: a method to call inside the Injectable decorator to add a dependency to the list
 * @method resolve<T> construct dependency from injectables (default), or resolve dependencies manually
 * @example
 * const FeatureDC = new $DIContainer() // Default, only registered dependencies will resolve using this Container construction
 * const FeatureDCWithAutoResolve = new $DIContainer({autoResolve: true}) // This will also resolve ANY dependency not explicitly listed in the 'registered' Map
 */
export class $DIContainer {
  constructor(
    private _options: { autoResolve: boolean } = { autoResolve: false }
  ) {}

  injectables: Map<string, Object> = new Map()
  register(service: Type<Object>): void {
    const resolvedRegistree: void | Object = this.resolve(service)

    if (resolvedRegistree) {
      this.injectables.set(service.name, resolvedRegistree)
    }
  }

  resolve<T>(target: Type<T>): T {
    // tokens are required dependencies, while injections are resolved tokens from the DIContainer
    const tokens: Type<T>[] =
      Reflect.getMetadata('design:paramtypes', target) || []
    const injections: (Object | T | void)[] = tokens.map((token: Type<T>) => {
      if (this.injectables.has(token.name)) {
        return this.injectables.get(token.name)
      } else {
        console.error(`Dependency not available in registry: ${token.name}.`)

        if (this._options)
          if (this._options.autoResolve) return this.resolve(token)
          else return
        else return
      }
    })

    return new target(...injections)
  }
}

/**
 * **Injectable**
 * @param containers - Provide one (or more) DI Containers to register this dependency in. It is curried so that
 * @example
 * const FeatureDC = new $DIContainer()
 * const FeatureInjectable = Injectable(FeatureDC);
 *
 * at FeatureInjectable()
 * class FeatureModule {}
 */
export const Injectable: (...containers: $DIContainer[]) => InjectableType = (
  ...containers: $DIContainer[]
): InjectableType => (): ((target: Type<Object>) => void) => (
  target: Type<Object>
): void => {
  containers.forEach((container: $DIContainer) => container.register(target)) // do something with `target`, e.g. some kind of validation or passing it to the DIContainer and store them
}

export const DefaultDIContainer: $DIContainer = new $DIContainer()
export const DefaultInjectable: InjectableType = Injectable(DefaultDIContainer)
```

I've chosen to export both default instances to the DI system, as well the classes to create my own. That all ties in to the structure of "Features" as independent entities. I would instantiate a DI Container inside a feature folder, allowing to only inject dependencies in said folder.

```typescript
// ApexLegendsDI.ts
import { $DIContainer, InjectableType, Injectable } from '~src/tiny-di/tiny-di'

export const ApexLegendsContainer: $DIContainer = new $DIContainer()
export const ApexLegendsInjectable: InjectableType = Injectable(
  ApexLegendsContainer
)
```

Then, inside `features/apex-legends` files I would always import the `ApexLegendsInjectable()` decorator and use it as suggested.

```typescript
// ApexLegendsGraphQLSchema.ts
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import { ApexLegendsTypeDefs } from './ApexLegendsTypeDefs'
import { ApexLegendsResolvers } from './ApexLegendsResolvers'
import { ApexLegendsInjectable } from '../di/ApexLegendsDI'

@ApexLegendsInjectable()
export class ApexLegendsGraphQLShema {
  public schema: GraphQLSchema

  constructor(typeDefs: ApexLegendsTypeDefs, resolvers: ApexLegendsResolvers) {
    this.schema = makeExecutableSchema({
      typeDefs: typeDefs.typeDefs,
      resolvers: resolvers.resolvers,
    })
  }
}
```

The reason it passes `typeDefs.typeDefs` is because the DI system requires the use of classes. The typeDefs class actually looks like this:

```typescript
import { ITypeDefinitions } from 'graphql-tools'
import { ApexLegendsInjectable } from '../di/ApexLegendsDI'
import { getGQLTypes } from '~src/utils/getGQLTypes'

@ApexLegendsInjectable()
export class ApexLegendsTypeDefs {
  typeDefs: ITypeDefinitions = [
    getGQLTypes('src/graphql/shared.types.gql'),
    getGQLTypes(__dirname + '/ApexLegends.types.gql'),
    getGQLTypes(__dirname + '/ApexLegendsItem.types.gql'),
    getGQLTypes(__dirname + '/ApexLegendsLegend.types.gql'),
  ]
}
```

And finally, building said feature as shown up top. I love this way of working with TypeScript as it allows me to not have to manually construct any class inside the feature folder. I still have the flexibility to do so, if required for testing purposes or whatever. a

Full code for this project is [available on GitHub](https://github.com/CSMR-DB/phyx-api)
