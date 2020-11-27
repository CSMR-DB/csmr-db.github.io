import { RenderResult } from '@testing-library/react'
import { ReactTestRendererJSON } from 'react-test-renderer'

export type RTRTree = ReactTestRendererJSON | ReactTestRendererJSON[] | null

export type RenderResultImport = RenderResult<
  typeof import('c:/Users/casim/Documents/Code/__nodejs/csmr-db/node_modules/@testing-library/dom/types/queries')
>

export type TestAttrs = {
  'data-testid'?: string
}
